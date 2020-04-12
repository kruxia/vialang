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
    | DefineExpression
    | ReturnExpression
    | FunctionExpression
    | IfExpression
    | WhileExpression
    | QuoteExpression
    | Token

Comment -> %COMMENT _ String _ %END _ %COMMENT

DefineExpression -> %DEFINE _ %word _ %AS _ Expression
ReturnExpression -> %RETURN _ Expression

FunctionExpression -> 
    %FUNCTION _ 
        (%WITH (_ %word (_ %AS _ Token):?):+ _):?
    %BEGIN _ 
        (Expression _):*
    %END _ %FUNCTION

IfExpression -> 
    %IF _ %TRUE _ %BEGIN _
        (Expression _):*
    %END _ %IF

WhileExpression ->
    %WHILE _ %TRUE _ %BEGIN _
        (Expression _):*
    %END _ %WHILE

QuoteExpression -> %QUOTE _ String _ %END _ %QUOTE

String ->
    Token (_ Token):*

Token -> 
    %float | %integer | %word | %TRUE | %FALSE | %NULL
