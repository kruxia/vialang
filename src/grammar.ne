# Via Parser (using Nearly)
# -----------------------------------------------------------------------------
@{% 
const { lexer } = require("./lexer")
%}
@lexer lexer
# -----------------------------------------------------------------------------

Body -> _ (Statement _):*
    {% function(d) {
        return {
            type: 'Body', 
            value:  d[1].filter((v) => v && v[0]).map((v) => v[0]).flat()
        }
    } %}

# -- Statement --

Statement ->
    Comment | Define | Return | If | While

Comment -> %COMMENT _ Tokens _ %END _ %COMMENT
    {% function(d) {return {type: 'Comment', value: d[2]}} %}

Define -> %DEFINE _ Identifier _ %AS _ Expression
    {% function(d) {return {type: 'Define', value: [d[2], d[6]]}} %}

Return -> %RETURN _ Expression
    {% function(d) {return {type: 'Return', value: d[2]}} %}

If -> 
    %IF _ ( Boolean | Call ) _ %BEGIN
        Body
    %END _ %IF
    {% function(d) {return {type: 'If', value: d}} %}

While ->
    %WHILE _ ( Boolean | Call ) _ %BEGIN
        Body
    %END _ %WHILE
    {% function(d) {return {type: 'While', value: d}} %}

# -- Expression --

Expression -> 
    (Function | Call | Boolean)
    {% function(d) {return d[0][0]} %}

# -- Function --

Function -> 
    %FUNCTION _ Params %BEGIN 
        Body
    %END _ %FUNCTION
    {% function(d) {
        var params = d[2] || [];
        var body = d[4];
        return {type: 'Function', value: [params, body]}
    } %}

Params -> (Param _):*
    {% function(d) {
        return d[0].map((v) => v[0]);
    } %}

Param -> %WITH _ Identifier (_ %AS _ Expression):?
    {% function(d) {
        var ident = d[2];
        var obj = d[3] && d[3][3] || null;
        return {type: 'Param', value: [ident, obj]};
    } %}

# -- Call --

Call -> Object (_ Object):*
    {% function(d) {
        var value = d[0];
        if (d[1] && value.concat) {
            value = value.concat(d[1].map((v) => v[1][0]));
        }
        return {type: 'Call', value: value};
    } %}

# -- Boolean --

Boolean -> 
	( Both | Either | Not | Comparison )
	{% function(d) {return d[0][0]} %}

Both ->
	%BOTH _ (Boolean | Call ) _ %AND _ (Boolean | Call )
	{% function(d) {return {type: 'Both', value: [d[2][0], d[6][0]]}} %}

Either ->
	%EITHER _ (Boolean | Call ) _ %OR _ (Boolean | Call )
	{% function(d) {return {type: 'Either', value: [d[2][0], d[6][0]]}} %}

Not -> 
	%NOT _ (Boolean | Call )
	{% function(d) {return {type: 'Not', value: d[2][0]}} %}

# -- Comparison --

Comparison ->  (Call) _ Compare _ (Call)
	{% function(d) {return {type: 'Comparison', value: [d[0][0], d[2][0], d[4][0]]}} %}

Compare -> (NotCompare | OrCompare | CompareOp)
    {% function(d) {return d[0]} %}

NotCompare -> %NOT _ Compare
    {% function(d) {return {type: 'NotCompare', value: d[2][0]}} %}
	
OrCompare -> CompareOp _ %OR _ CompareOp
	{% function(d) {return {type: 'OrCompare', value: [d[0], d[4]]}} %}

CompareOp -> (%LESS_THAN | %GREATER_THAN | %EQUAL_TO)
	{% function(d) {return d[0][0]} %}

# -- Objects --

Object -> Identifier | Quote | Float | Integer | True | False | Null 
    {% function(d) {return d[0]} %}

Identifier -> %identifier
    {% function(d) {return d[0]} %}

Quote -> %QUOTE _ Tokens _ %END _ %QUOTE
    {% function(d) {return {type: 'Quote', value: d[2]}} %}

Float -> %float
    {% function(d) {return d[0]} %}

Integer -> %integer
    {% function(d) {return d[0]} %}

True -> %TRUE
    {% function(d) {var v = d[0]; v.value = true; return v} %}

False -> %FALSE
    {% function(d) {var v = d[0]; v.value = false; return v} %}

Null -> %NULL
    {% function(d) {var v = d[0]; v.value = null; return v} %}

Tokens -> Token (_ Token):*
    {% function(d) {
        // (We don't need the Tokens object, so we just return the array value.)
        return [d[0][0]].concat(
            d[1].filter((v) => v && v[0]).map((v) => v.filter((v) => v).flat()).flat());
    } %}

Token -> 
    %float | %integer | %identifier | %punct | %HELP | %DEFINE | %AS | %WITH | %BEGIN |
    %END | %QUOTE | %BLOCK | %FUNCTION | %COMMENT | %IF | %ELSE | %WHILE | %CONTINUE |
    %BREAK | %RETURN | %AND | %OR | %NOT | %TRUE | %FALSE | %NULL | %EQUAL_TO |
    %LESS_THAN | %GREATER_THAN 
    
    {% function(d) {return d[0]} %}

_  -> ( %WS | %NL ):* 
    {% function(d) {return d[0].flat()} %}
