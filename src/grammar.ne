# Via Parser (using Nearly)
# -----------------------------------------------------------------------------
@{% 
const { lexer } = require("./lexer")
%}
@lexer lexer
# -----------------------------------------------------------------------------

Main -> _ (Expression _):*
    {% 
    function(d) {
        return {
            type: 'Main', 
            value:  d[1].filter((v) => v && v[0]).map((v) => v[0]).flat()
        }
    } 
    %}

Expression -> 
    Comment 
    | Define 
    | Return 
    | Function 
    | If 
    | While 
    | Boolean 
    | Call
    
    {% function(d) {return d[0]} %}

Comment -> %COMMENT _ Tokens _ %END _ %COMMENT
    {% function(d) {return {type: 'Comment', value: d[2]}} %}

Define -> %DEFINE _ Identifier _ %AS _ Expression
    {% function(d) {return {type: 'Define', value: [d[2], d[6]]}} %}

Return -> %RETURN _ Expression
    {% function(d) {return {type: 'Return', value: d}} %}

Function -> 
    %FUNCTION _ 
        (%WITH (_ Identifier (_ %AS _ Object):?):+ _):?
    %BEGIN _ 
        (Expression _):*
    %END _ %FUNCTION
    {% function(d) {return {type: 'Function', value: d}} %}

If -> 
    %IF _ ( Boolean | Object ) _ %BEGIN _
        (Expression _):*
    %END _ %IF
    {% function(d) {return {type: 'If', value: d}} %}

While ->
    %WHILE _ ( Boolean | Object ) _ %BEGIN _
        (Expression _):*
    %END _ %WHILE
    {% function(d) {return {type: 'While', value: d}} %}

# -- Boolean --

Boolean -> 
	( Both | Either | Not | Comparison )
	{% function(d) {return {type: 'Boolean', value: d[0][0]}} %}

Both ->
	%BOTH _ Boolean _ %AND _ Boolean
	{% function(d) {return {type: 'Both', value: d[d[2], d[6]]}} %}

Either ->
	%EITHER _ Boolean _ %OR _ Boolean
	{% function(d) {return {type: 'Either', value: [d[2], d[6]]}} %}

Not -> 
	%NOT _ Boolean
	{% function(d) {return {type: 'Not', value: d[2]}} %}

# -- Comparison --

Comparison -> Scalar _ Compare _ Scalar
	{% function(d) {return {type: 'Comparison', value: d}} %}

Compare -> NotCompare | OrCompare | SingleCompare

NotCompare -> %NOT _ Compare
	{% function(d) {return {type: 'NotCompare', value: d}} %}
	
OrCompare -> SingleCompare _ %OR _ SingleCompare
	{% function(d) {return {type: 'OrCompare', value: [d[0], d[2]]}} %}

SingleCompare ->
	%LESS_THAN | %GREATER_THAN | %EQUAL_TO
	{% function(d) {return {type: 'SingleCompare', value: d}} %}

# -- Call --

Call -> Object (_ Object):*
    {% 
    function(d) {
        var value = d[0];
        if (d[2]) value.concat(d[2][0]);        
        return {type: 'Call', value: value};
    } 
    %}

# -- Objects --

Object -> Identifier | Quote | Float | Integer | True | False | Null 
    {% function(d) {return d[0]} %}

Quote -> %QUOTE _ Tokens _ %END _ %QUOTE
    {% function(d) {return {type: 'Quote', value: d[2]}} %}

Tokens -> Token (_ Token):*
    {% 
    function(d) {
        // It takes quite a bit to unnest the results of this rule. 
        // (We don't need the Tokens object, so we just return the array value.)
        return [d[0][0]].concat(
            d[1].filter((v) => v && v[0]).map((v) => v.filter((v) => v).flat()).flat());
    } 
    %}

Float -> %float
    {% function(d) {return d[0]} %}

Integer -> %integer
    {% function(d) {return d[0]} %}

Identifier -> %identifier
    {% function(d) {return d[0]} %}

True -> %TRUE
    {% function(d) {var v = d[0]; v.value = true; return v} %}

False -> %FALSE
    {% function(d) {var v = d[0]; v.value = false; return v} %}

Null -> %NULL
    {% function(d) {var v = d[0]; v.value = null; return v} %}

Token -> 
    %float | %integer | %identifier | %punct | %HELP | %DEFINE | %AS | %WITH | %BEGIN |
    %END | %QUOTE | %BLOCK | %FUNCTION | %COMMENT | %IF | %ELSE | %WHILE | %CONTINUE |
    %BREAK | %RETURN | %AND | %OR | %NOT | %TRUE | %FALSE | %NULL | %EQUAL_TO |
    %LESS_THAN | %GREATER_THAN 
    
    {% function(d) {return d[0]} %}

_  -> ( %WS | %NL ):* {% function(d) {return d[0].flat()} %}
