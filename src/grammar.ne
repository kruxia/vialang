# Via Parser (using Nearly)
# -----------------------------------------------------------------------------
@{% 
const { lexer } = require("./lexer")
%}
@lexer lexer
@builtin "whitespace.ne"  # _ = optional whitespace, __ = required whitespace
# -----------------------------------------------------------------------------

Main -> (_ Expression):* _

Expression -> 
    Comment
    | Define
    | Return
    | Function
    | If
    | While
    | Quote
    | Boolean
    | Comparison
    | Scalar

Comment -> %COMMENT _ String _ %END _ %COMMENT
    {% function(d) {return {t:'Comment', v:d}} %}

Define -> %DEFINE _ Identifier _ %AS _ Expression
    {% function(d) {return {t:'Define', v:d}} %}

Return -> %RETURN _ Expression
    {% function(d) {return {t:'Return', v:d}} %}

Function -> 
    %FUNCTION _ 
        (%WITH (_ Identifier (_ %AS _ Scalars):?):+ _):?
    %BEGIN _ 
        (Expression _):*
    %END _ %FUNCTION
    {% function(d) {return {t:'Function', v:d}} %}

If -> 
    %IF _ Boolean _ %BEGIN _
        (Expression _):*
    %END _ %IF
    {% function(d) {return {t:'If', v:d}} %}

While ->
    %WHILE _ Boolean _ %BEGIN _
        (Expression _):*
    %END _ %WHILE
    {% function(d) {return {t:'While', v:d}} %}

# -- Boolean --

Boolean -> 
	( Both | Either | Not | Scalar | Comparison )
	{% function(d) {return d[0][0]} %}

Both ->
	%BOTH _ Boolean _ %AND _ Boolean
	{% function(d) {return {t:'Both', v:d[d[2], d[6]]}} %}

Either ->
	%EITHER _ Boolean _ %OR _ Boolean
	{% function(d) {return {t:'Either', v:[d[2], d[6]]}} %}

Not -> 
	%NOT _ Boolean
	{% function(d) {return {t:'Not', v:d[2]}} %}

# -- Comparison --

Comparison -> Scalar _ Compare _ Scalar
	{% function(d) {return {t:'Comparison', v:d}} %}

Compare -> NotCompare | OrCompare | SingleCompare
	{% function(d) {return {t:'Compare', v:d}} %}

NotCompare -> %NOT _ Compare
	{% function(d) {return {t:'NotCompare', v:d}} %}
	
OrCompare -> SingleCompare _ %OR _ SingleCompare
	{% function(d) {return {t:'OrCompare', v:[d[0], d[2]]}} %}

SingleCompare ->
	( %LESS_THAN | %GREATER_THAN | %EQUAL_TO )
	{% function(d) {return d} %}

# -- Scalars --

Scalars ->
    Scalar (_ Scalar):*
    {% function(d) {return {t:'Scalars', v:d}} %}

Scalar ->
    ( Identifier | Quote | Float | Integer | True | False | Null )
    {% function(d) {return d[0][0]} %}

Quote -> %QUOTE _ String _ %END _ %QUOTE
    {% function(d) {return {t:'Quote', v:d}} %}

String -> Token (_ Token):*
    {% function(d) {return {t:'String', v:d}} %}

Float -> %float
    {% function(d) {return {t:'Float', v:d}} %}

Integer -> %integer
    {% function(d) {return {t:'Integer', v:d}} %}

Identifier -> %identifier
    {% function(d) {return d[0]} %}

True -> %TRUE
    {% function(d) {return {t:'True', v:d}} %}

False -> %FALSE
    {% function(d) {return {t:'False', v:d}} %}

Null -> %NULL
    {% function(d) {return {t:'Null', v:d}} %}

Token -> 
    %identifier | %float | %integer | %word | %HELP | %DEFINE | %AS | %WITH | %BEGIN |
    %END | %QUOTE | %BLOCK | %FUNCTION | %COMMENT | %IF | %ELSE | %WHILE | %CONTINUE |
    %BREAK | %RETURN | %AND | %OR | %NOT | %TRUE | %FALSE | %NULL | %EQUAL_TO |
    %LESS_THAN | %GREATER_THAN 
    
    {% function(d) {return {t:'Token', v:d}} %}
