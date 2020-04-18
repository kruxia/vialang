# Via Parser (using Nearly)
# -----------------------------------------------------------------------------
@{% 
const { lexer } = require("./lexer")
%}
@lexer lexer
# @builtin "whitespace.ne"  # _ = optional whitespace, __ = required whitespace
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
    | Scalar
    
    {% function(d) {return {type: 'Expression', value: d[0]}} %}

Comment -> %COMMENT _ Tokens _ %END _ %COMMENT
    {% function(d) {return {type: 'Comment', value: d[2]}} %}

Define -> %DEFINE _ Identifier _ %AS _ Expression
    {% function(d) {return {type: 'Define', value: [d[2], d[6]]}} %}

Return -> %RETURN _ Expression
    {% function(d) {return {type: 'Return', value: d}} %}

Function -> 
    %FUNCTION _ 
        (%WITH (_ Identifier (_ %AS _ Scalar):?):+ _):?
    %BEGIN _ 
        (Expression _):*
    %END _ %FUNCTION
    {% function(d) {return {type: 'Function', value: d}} %}

If -> 
    %IF _ Boolean _ %BEGIN _
        (Expression _):*
    %END _ %IF
    {% function(d) {return {type: 'If', value: d}} %}

While ->
    %WHILE _ Boolean _ %BEGIN _
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

# -- Scalars --

Scalar -> Identifier | Quote | Float | Integer | True | False | Null 

Quote -> %QUOTE _ Tokens _ %END _ %QUOTE
    {% function(d) {return {type: 'Quote', value: d[2]}} %}

Tokens -> Token (_ Token):*
    {% 
    function(d) {
        return {
            type: 'Tokens', 
            // It takes quite a bit to unnest the results of this rule.
            value: [d[0][0]].concat(
                d[1].filter((v) => v && v[0]).map((v) => v.map((v) => v[0])).flat())
        }
    } 
    %}

Float -> %float
    {% function(d) {return d[0]} %}

Integer -> %integer
    {% function(d) {return d[0]} %}

Identifier -> %identifier
    {% function(d) {return d[0]} %}

True -> %TRUE
    {% function(d) {return d[0]} %}

False -> %FALSE
    {% function(d) {return d[0]} %}

Null -> %NULL
    {% function(d) {return d[0]} %}

Token -> 
    %identifier | %float | %integer | %word | %HELP | %DEFINE | %AS |
    %WITH | %BEGIN | %END | %QUOTE | %BLOCK | %FUNCTION | %COMMENT | %IF | %ELSE |
    %WHILE | %CONTINUE | %BREAK | %RETURN | %AND | %OR | %NOT | %TRUE | %FALSE | %NULL |
    %EQUAL_TO | %LESS_THAN | %GREATER_THAN 
    
    {% function(d) {return d} %}

_  -> ( %WS | %NL ):* {% function(d) {return d[0][0];} %}
