// Generated automatically by nearley, version 2.19.1
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
 
const { lexer } = require("./lexer")
var grammar = {
    Lexer: lexer,
    ParserRules: [
    {"name": "_$ebnf$1", "symbols": []},
    {"name": "_$ebnf$1", "symbols": ["_$ebnf$1", "wschar"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "_", "symbols": ["_$ebnf$1"], "postprocess": function(d) {return null;}},
    {"name": "__$ebnf$1", "symbols": ["wschar"]},
    {"name": "__$ebnf$1", "symbols": ["__$ebnf$1", "wschar"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "__", "symbols": ["__$ebnf$1"], "postprocess": function(d) {return null;}},
    {"name": "wschar", "symbols": [/[\s]/], "postprocess": id},
    {"name": "Main$ebnf$1", "symbols": []},
    {"name": "Main$ebnf$1$subexpression$1", "symbols": ["_", "Expression"]},
    {"name": "Main$ebnf$1", "symbols": ["Main$ebnf$1", "Main$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "Main", "symbols": ["Main$ebnf$1", "_"]},
    {"name": "Expression", "symbols": ["Comment"]},
    {"name": "Expression", "symbols": ["DefineExpression"]},
    {"name": "Expression", "symbols": ["ReturnExpression"]},
    {"name": "Expression", "symbols": ["FunctionExpression"]},
    {"name": "Expression", "symbols": ["IfExpression"]},
    {"name": "Expression", "symbols": ["WhileExpression"]},
    {"name": "Expression", "symbols": ["QuoteExpression"]},
    {"name": "Expression", "symbols": ["Token"]},
    {"name": "Comment", "symbols": [(lexer.has("COMMENT") ? {type: "COMMENT"} : COMMENT), "_", "String", "_", (lexer.has("END") ? {type: "END"} : END), "_", (lexer.has("COMMENT") ? {type: "COMMENT"} : COMMENT)]},
    {"name": "DefineExpression", "symbols": [(lexer.has("DEFINE") ? {type: "DEFINE"} : DEFINE), "_", (lexer.has("word") ? {type: "word"} : word), "_", (lexer.has("AS") ? {type: "AS"} : AS), "_", "Expression"]},
    {"name": "ReturnExpression", "symbols": [(lexer.has("RETURN") ? {type: "RETURN"} : RETURN), "_", "Expression"]},
    {"name": "FunctionExpression$ebnf$1$subexpression$1$ebnf$1$subexpression$1$ebnf$1$subexpression$1", "symbols": ["_", (lexer.has("AS") ? {type: "AS"} : AS), "_", "Token"]},
    {"name": "FunctionExpression$ebnf$1$subexpression$1$ebnf$1$subexpression$1$ebnf$1", "symbols": ["FunctionExpression$ebnf$1$subexpression$1$ebnf$1$subexpression$1$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "FunctionExpression$ebnf$1$subexpression$1$ebnf$1$subexpression$1$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "FunctionExpression$ebnf$1$subexpression$1$ebnf$1$subexpression$1", "symbols": ["_", (lexer.has("word") ? {type: "word"} : word), "FunctionExpression$ebnf$1$subexpression$1$ebnf$1$subexpression$1$ebnf$1"]},
    {"name": "FunctionExpression$ebnf$1$subexpression$1$ebnf$1", "symbols": ["FunctionExpression$ebnf$1$subexpression$1$ebnf$1$subexpression$1"]},
    {"name": "FunctionExpression$ebnf$1$subexpression$1$ebnf$1$subexpression$2$ebnf$1$subexpression$1", "symbols": ["_", (lexer.has("AS") ? {type: "AS"} : AS), "_", "Token"]},
    {"name": "FunctionExpression$ebnf$1$subexpression$1$ebnf$1$subexpression$2$ebnf$1", "symbols": ["FunctionExpression$ebnf$1$subexpression$1$ebnf$1$subexpression$2$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "FunctionExpression$ebnf$1$subexpression$1$ebnf$1$subexpression$2$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "FunctionExpression$ebnf$1$subexpression$1$ebnf$1$subexpression$2", "symbols": ["_", (lexer.has("word") ? {type: "word"} : word), "FunctionExpression$ebnf$1$subexpression$1$ebnf$1$subexpression$2$ebnf$1"]},
    {"name": "FunctionExpression$ebnf$1$subexpression$1$ebnf$1", "symbols": ["FunctionExpression$ebnf$1$subexpression$1$ebnf$1", "FunctionExpression$ebnf$1$subexpression$1$ebnf$1$subexpression$2"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "FunctionExpression$ebnf$1$subexpression$1", "symbols": [(lexer.has("WITH") ? {type: "WITH"} : WITH), "FunctionExpression$ebnf$1$subexpression$1$ebnf$1", "_"]},
    {"name": "FunctionExpression$ebnf$1", "symbols": ["FunctionExpression$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "FunctionExpression$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "FunctionExpression$ebnf$2", "symbols": []},
    {"name": "FunctionExpression$ebnf$2$subexpression$1", "symbols": ["Expression", "_"]},
    {"name": "FunctionExpression$ebnf$2", "symbols": ["FunctionExpression$ebnf$2", "FunctionExpression$ebnf$2$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "FunctionExpression", "symbols": [(lexer.has("FUNCTION") ? {type: "FUNCTION"} : FUNCTION), "_", "FunctionExpression$ebnf$1", (lexer.has("BEGIN") ? {type: "BEGIN"} : BEGIN), "_", "FunctionExpression$ebnf$2", (lexer.has("END") ? {type: "END"} : END), "_", (lexer.has("FUNCTION") ? {type: "FUNCTION"} : FUNCTION)]},
    {"name": "IfExpression$ebnf$1", "symbols": []},
    {"name": "IfExpression$ebnf$1$subexpression$1", "symbols": ["Expression", "_"]},
    {"name": "IfExpression$ebnf$1", "symbols": ["IfExpression$ebnf$1", "IfExpression$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "IfExpression", "symbols": [(lexer.has("IF") ? {type: "IF"} : IF), "_", (lexer.has("TRUE") ? {type: "TRUE"} : TRUE), "_", (lexer.has("BEGIN") ? {type: "BEGIN"} : BEGIN), "_", "IfExpression$ebnf$1", (lexer.has("END") ? {type: "END"} : END), "_", (lexer.has("IF") ? {type: "IF"} : IF)]},
    {"name": "WhileExpression$ebnf$1", "symbols": []},
    {"name": "WhileExpression$ebnf$1$subexpression$1", "symbols": ["Expression", "_"]},
    {"name": "WhileExpression$ebnf$1", "symbols": ["WhileExpression$ebnf$1", "WhileExpression$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "WhileExpression", "symbols": [(lexer.has("WHILE") ? {type: "WHILE"} : WHILE), "_", (lexer.has("TRUE") ? {type: "TRUE"} : TRUE), "_", (lexer.has("BEGIN") ? {type: "BEGIN"} : BEGIN), "_", "WhileExpression$ebnf$1", (lexer.has("END") ? {type: "END"} : END), "_", (lexer.has("WHILE") ? {type: "WHILE"} : WHILE)]},
    {"name": "QuoteExpression", "symbols": [(lexer.has("QUOTE") ? {type: "QUOTE"} : QUOTE), "_", "String", "_", (lexer.has("END") ? {type: "END"} : END), "_", (lexer.has("QUOTE") ? {type: "QUOTE"} : QUOTE)]},
    {"name": "String$ebnf$1", "symbols": []},
    {"name": "String$ebnf$1$subexpression$1", "symbols": ["_", "Token"]},
    {"name": "String$ebnf$1", "symbols": ["String$ebnf$1", "String$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "String", "symbols": ["Token", "String$ebnf$1"]},
    {"name": "Token", "symbols": [(lexer.has("float") ? {type: "float"} : float)]},
    {"name": "Token", "symbols": [(lexer.has("integer") ? {type: "integer"} : integer)]},
    {"name": "Token", "symbols": [(lexer.has("word") ? {type: "word"} : word)]},
    {"name": "Token", "symbols": [(lexer.has("TRUE") ? {type: "TRUE"} : TRUE)]},
    {"name": "Token", "symbols": [(lexer.has("FALSE") ? {type: "FALSE"} : FALSE)]},
    {"name": "Token", "symbols": [(lexer.has("NULL") ? {type: "NULL"} : NULL)]}
]
  , ParserStart: "Main"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
