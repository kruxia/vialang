// Generated automatically by nearley, version 2.19.1
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
 
const { lexer } = require("./lexer")
var grammar = {
    Lexer: lexer,
    ParserRules: [
    {"name": "Main$ebnf$1", "symbols": []},
    {"name": "Main$ebnf$1$subexpression$1", "symbols": ["Expression", "_"]},
    {"name": "Main$ebnf$1", "symbols": ["Main$ebnf$1", "Main$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "Main", "symbols": ["_", "Main$ebnf$1"], "postprocess":  
        function(d) {
            return {
                type: 'Main', 
                value:  d[1].filter((v) => v && v[0]).map((v) => v[0]).flat()
            }
        } 
        },
    {"name": "Expression", "symbols": ["Comment"]},
    {"name": "Expression", "symbols": ["Define"]},
    {"name": "Expression", "symbols": ["Return"]},
    {"name": "Expression", "symbols": ["Function"]},
    {"name": "Expression", "symbols": ["If"]},
    {"name": "Expression", "symbols": ["While"]},
    {"name": "Expression", "symbols": ["Boolean"]},
    {"name": "Expression", "symbols": ["Call"], "postprocess": function(d) {return d[0]}},
    {"name": "Comment", "symbols": [(lexer.has("COMMENT") ? {type: "COMMENT"} : COMMENT), "_", "Tokens", "_", (lexer.has("END") ? {type: "END"} : END), "_", (lexer.has("COMMENT") ? {type: "COMMENT"} : COMMENT)], "postprocess": function(d) {return {type: 'Comment', value: d[2]}}},
    {"name": "Define", "symbols": [(lexer.has("DEFINE") ? {type: "DEFINE"} : DEFINE), "_", "Identifier", "_", (lexer.has("AS") ? {type: "AS"} : AS), "_", "Expression"], "postprocess": function(d) {return {type: 'Define', value: [d[2], d[6]]}}},
    {"name": "Return", "symbols": [(lexer.has("RETURN") ? {type: "RETURN"} : RETURN), "_", "Expression"], "postprocess": function(d) {return {type: 'Return', value: d}}},
    {"name": "Function$ebnf$1$subexpression$1$ebnf$1$subexpression$1$ebnf$1$subexpression$1", "symbols": ["_", (lexer.has("AS") ? {type: "AS"} : AS), "_", "Object"]},
    {"name": "Function$ebnf$1$subexpression$1$ebnf$1$subexpression$1$ebnf$1", "symbols": ["Function$ebnf$1$subexpression$1$ebnf$1$subexpression$1$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "Function$ebnf$1$subexpression$1$ebnf$1$subexpression$1$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "Function$ebnf$1$subexpression$1$ebnf$1$subexpression$1", "symbols": ["_", "Identifier", "Function$ebnf$1$subexpression$1$ebnf$1$subexpression$1$ebnf$1"]},
    {"name": "Function$ebnf$1$subexpression$1$ebnf$1", "symbols": ["Function$ebnf$1$subexpression$1$ebnf$1$subexpression$1"]},
    {"name": "Function$ebnf$1$subexpression$1$ebnf$1$subexpression$2$ebnf$1$subexpression$1", "symbols": ["_", (lexer.has("AS") ? {type: "AS"} : AS), "_", "Object"]},
    {"name": "Function$ebnf$1$subexpression$1$ebnf$1$subexpression$2$ebnf$1", "symbols": ["Function$ebnf$1$subexpression$1$ebnf$1$subexpression$2$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "Function$ebnf$1$subexpression$1$ebnf$1$subexpression$2$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "Function$ebnf$1$subexpression$1$ebnf$1$subexpression$2", "symbols": ["_", "Identifier", "Function$ebnf$1$subexpression$1$ebnf$1$subexpression$2$ebnf$1"]},
    {"name": "Function$ebnf$1$subexpression$1$ebnf$1", "symbols": ["Function$ebnf$1$subexpression$1$ebnf$1", "Function$ebnf$1$subexpression$1$ebnf$1$subexpression$2"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "Function$ebnf$1$subexpression$1", "symbols": [(lexer.has("WITH") ? {type: "WITH"} : WITH), "Function$ebnf$1$subexpression$1$ebnf$1", "_"]},
    {"name": "Function$ebnf$1", "symbols": ["Function$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "Function$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "Function$ebnf$2", "symbols": []},
    {"name": "Function$ebnf$2$subexpression$1", "symbols": ["Expression", "_"]},
    {"name": "Function$ebnf$2", "symbols": ["Function$ebnf$2", "Function$ebnf$2$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "Function", "symbols": [(lexer.has("FUNCTION") ? {type: "FUNCTION"} : FUNCTION), "_", "Function$ebnf$1", (lexer.has("BEGIN") ? {type: "BEGIN"} : BEGIN), "_", "Function$ebnf$2", (lexer.has("END") ? {type: "END"} : END), "_", (lexer.has("FUNCTION") ? {type: "FUNCTION"} : FUNCTION)], "postprocess": function(d) {return {type: 'Function', value: d}}},
    {"name": "If$subexpression$1", "symbols": ["Boolean"]},
    {"name": "If$subexpression$1", "symbols": ["Call"]},
    {"name": "If$ebnf$1", "symbols": []},
    {"name": "If$ebnf$1$subexpression$1", "symbols": ["Expression", "_"]},
    {"name": "If$ebnf$1", "symbols": ["If$ebnf$1", "If$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "If", "symbols": [(lexer.has("IF") ? {type: "IF"} : IF), "_", "If$subexpression$1", "_", (lexer.has("BEGIN") ? {type: "BEGIN"} : BEGIN), "_", "If$ebnf$1", (lexer.has("END") ? {type: "END"} : END), "_", (lexer.has("IF") ? {type: "IF"} : IF)], "postprocess": function(d) {return {type: 'If', value: d}}},
    {"name": "While$subexpression$1", "symbols": ["Boolean"]},
    {"name": "While$subexpression$1", "symbols": ["Call"]},
    {"name": "While$ebnf$1", "symbols": []},
    {"name": "While$ebnf$1$subexpression$1", "symbols": ["Expression", "_"]},
    {"name": "While$ebnf$1", "symbols": ["While$ebnf$1", "While$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "While", "symbols": [(lexer.has("WHILE") ? {type: "WHILE"} : WHILE), "_", "While$subexpression$1", "_", (lexer.has("BEGIN") ? {type: "BEGIN"} : BEGIN), "_", "While$ebnf$1", (lexer.has("END") ? {type: "END"} : END), "_", (lexer.has("WHILE") ? {type: "WHILE"} : WHILE)], "postprocess": function(d) {return {type: 'While', value: d}}},
    {"name": "Boolean$subexpression$1", "symbols": ["Both"]},
    {"name": "Boolean$subexpression$1", "symbols": ["Either"]},
    {"name": "Boolean$subexpression$1", "symbols": ["Not"]},
    {"name": "Boolean$subexpression$1", "symbols": ["Comparison"]},
    {"name": "Boolean", "symbols": ["Boolean$subexpression$1"], "postprocess": function(d) {return d[0][0]}},
    {"name": "Both$subexpression$1", "symbols": ["Boolean"]},
    {"name": "Both$subexpression$1", "symbols": ["Call"]},
    {"name": "Both$subexpression$2", "symbols": ["Boolean"]},
    {"name": "Both$subexpression$2", "symbols": ["Call"]},
    {"name": "Both", "symbols": [(lexer.has("BOTH") ? {type: "BOTH"} : BOTH), "_", "Both$subexpression$1", "_", (lexer.has("AND") ? {type: "AND"} : AND), "_", "Both$subexpression$2"], "postprocess": function(d) {return {type: 'Both', value: [d[2][0], d[6][0]]}}},
    {"name": "Either$subexpression$1", "symbols": ["Boolean"]},
    {"name": "Either$subexpression$1", "symbols": ["Call"]},
    {"name": "Either$subexpression$2", "symbols": ["Boolean"]},
    {"name": "Either$subexpression$2", "symbols": ["Call"]},
    {"name": "Either", "symbols": [(lexer.has("EITHER") ? {type: "EITHER"} : EITHER), "_", "Either$subexpression$1", "_", (lexer.has("OR") ? {type: "OR"} : OR), "_", "Either$subexpression$2"], "postprocess": function(d) {return {type: 'Either', value: [d[2][0], d[6][0]]}}},
    {"name": "Not$subexpression$1", "symbols": ["Boolean"]},
    {"name": "Not$subexpression$1", "symbols": ["Call"]},
    {"name": "Not", "symbols": [(lexer.has("NOT") ? {type: "NOT"} : NOT), "_", "Not$subexpression$1"], "postprocess": function(d) {return {type: 'Not', value: d[2][0]}}},
    {"name": "Comparison$subexpression$1", "symbols": ["Call"]},
    {"name": "Comparison$subexpression$2", "symbols": ["Call"]},
    {"name": "Comparison", "symbols": ["Comparison$subexpression$1", "_", "Compare", "_", "Comparison$subexpression$2"], "postprocess": function(d) {return {type: 'Comparison', value: [d[0][0], d[2][0], d[4][0]]}}},
    {"name": "Compare$subexpression$1", "symbols": ["NotCompare"]},
    {"name": "Compare$subexpression$1", "symbols": ["OrCompare"]},
    {"name": "Compare$subexpression$1", "symbols": ["CompareOp"]},
    {"name": "Compare", "symbols": ["Compare$subexpression$1"], "postprocess": function(d) {return d[0]}},
    {"name": "NotCompare", "symbols": [(lexer.has("NOT") ? {type: "NOT"} : NOT), "_", "Compare"], "postprocess": function(d) {return {type: 'NotCompare', value: d[2][0]}}},
    {"name": "OrCompare", "symbols": ["CompareOp", "_", (lexer.has("OR") ? {type: "OR"} : OR), "_", "CompareOp"], "postprocess": function(d) {return {type: 'OrCompare', value: [d[0], d[4]]}}},
    {"name": "CompareOp$subexpression$1", "symbols": [(lexer.has("LESS_THAN") ? {type: "LESS_THAN"} : LESS_THAN)]},
    {"name": "CompareOp$subexpression$1", "symbols": [(lexer.has("GREATER_THAN") ? {type: "GREATER_THAN"} : GREATER_THAN)]},
    {"name": "CompareOp$subexpression$1", "symbols": [(lexer.has("EQUAL_TO") ? {type: "EQUAL_TO"} : EQUAL_TO)]},
    {"name": "CompareOp", "symbols": ["CompareOp$subexpression$1"], "postprocess": function(d) {return d[0][0]}},
    {"name": "Call$ebnf$1", "symbols": []},
    {"name": "Call$ebnf$1$subexpression$1", "symbols": ["_", "Object"]},
    {"name": "Call$ebnf$1", "symbols": ["Call$ebnf$1", "Call$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "Call", "symbols": ["Object", "Call$ebnf$1"], "postprocess":  
        function(d) {
            var value = d[0];
            if (d[2]) value.concat(d[2][0]);        
            return {type: 'Call', value: value};
        } 
        },
    {"name": "Object", "symbols": ["Identifier"]},
    {"name": "Object", "symbols": ["Quote"]},
    {"name": "Object", "symbols": ["Float"]},
    {"name": "Object", "symbols": ["Integer"]},
    {"name": "Object", "symbols": ["True"]},
    {"name": "Object", "symbols": ["False"]},
    {"name": "Object", "symbols": ["Null"], "postprocess": function(d) {return d[0]}},
    {"name": "Quote", "symbols": [(lexer.has("QUOTE") ? {type: "QUOTE"} : QUOTE), "_", "Tokens", "_", (lexer.has("END") ? {type: "END"} : END), "_", (lexer.has("QUOTE") ? {type: "QUOTE"} : QUOTE)], "postprocess": function(d) {return {type: 'Quote', value: d[2]}}},
    {"name": "Tokens$ebnf$1", "symbols": []},
    {"name": "Tokens$ebnf$1$subexpression$1", "symbols": ["_", "Token"]},
    {"name": "Tokens$ebnf$1", "symbols": ["Tokens$ebnf$1", "Tokens$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "Tokens", "symbols": ["Token", "Tokens$ebnf$1"], "postprocess":  
        function(d) {
            // It takes quite a bit to unnest the results of this rule. 
            // (We don't need the Tokens object, so we just return the array value.)
            return [d[0][0]].concat(
                d[1].filter((v) => v && v[0]).map((v) => v.filter((v) => v).flat()).flat());
        } 
        },
    {"name": "Float", "symbols": [(lexer.has("float") ? {type: "float"} : float)], "postprocess": function(d) {return d[0]}},
    {"name": "Integer", "symbols": [(lexer.has("integer") ? {type: "integer"} : integer)], "postprocess": function(d) {return d[0]}},
    {"name": "Identifier", "symbols": [(lexer.has("identifier") ? {type: "identifier"} : identifier)], "postprocess": function(d) {return d[0]}},
    {"name": "True", "symbols": [(lexer.has("TRUE") ? {type: "TRUE"} : TRUE)], "postprocess": function(d) {var v = d[0]; v.value = true; return v}},
    {"name": "False", "symbols": [(lexer.has("FALSE") ? {type: "FALSE"} : FALSE)], "postprocess": function(d) {var v = d[0]; v.value = false; return v}},
    {"name": "Null", "symbols": [(lexer.has("NULL") ? {type: "NULL"} : NULL)], "postprocess": function(d) {var v = d[0]; v.value = null; return v}},
    {"name": "Token", "symbols": [(lexer.has("float") ? {type: "float"} : float)]},
    {"name": "Token", "symbols": [(lexer.has("integer") ? {type: "integer"} : integer)]},
    {"name": "Token", "symbols": [(lexer.has("identifier") ? {type: "identifier"} : identifier)]},
    {"name": "Token", "symbols": [(lexer.has("punct") ? {type: "punct"} : punct)]},
    {"name": "Token", "symbols": [(lexer.has("HELP") ? {type: "HELP"} : HELP)]},
    {"name": "Token", "symbols": [(lexer.has("DEFINE") ? {type: "DEFINE"} : DEFINE)]},
    {"name": "Token", "symbols": [(lexer.has("AS") ? {type: "AS"} : AS)]},
    {"name": "Token", "symbols": [(lexer.has("WITH") ? {type: "WITH"} : WITH)]},
    {"name": "Token", "symbols": [(lexer.has("BEGIN") ? {type: "BEGIN"} : BEGIN)]},
    {"name": "Token", "symbols": [(lexer.has("END") ? {type: "END"} : END)]},
    {"name": "Token", "symbols": [(lexer.has("QUOTE") ? {type: "QUOTE"} : QUOTE)]},
    {"name": "Token", "symbols": [(lexer.has("BLOCK") ? {type: "BLOCK"} : BLOCK)]},
    {"name": "Token", "symbols": [(lexer.has("FUNCTION") ? {type: "FUNCTION"} : FUNCTION)]},
    {"name": "Token", "symbols": [(lexer.has("COMMENT") ? {type: "COMMENT"} : COMMENT)]},
    {"name": "Token", "symbols": [(lexer.has("IF") ? {type: "IF"} : IF)]},
    {"name": "Token", "symbols": [(lexer.has("ELSE") ? {type: "ELSE"} : ELSE)]},
    {"name": "Token", "symbols": [(lexer.has("WHILE") ? {type: "WHILE"} : WHILE)]},
    {"name": "Token", "symbols": [(lexer.has("CONTINUE") ? {type: "CONTINUE"} : CONTINUE)]},
    {"name": "Token", "symbols": [(lexer.has("BREAK") ? {type: "BREAK"} : BREAK)]},
    {"name": "Token", "symbols": [(lexer.has("RETURN") ? {type: "RETURN"} : RETURN)]},
    {"name": "Token", "symbols": [(lexer.has("AND") ? {type: "AND"} : AND)]},
    {"name": "Token", "symbols": [(lexer.has("OR") ? {type: "OR"} : OR)]},
    {"name": "Token", "symbols": [(lexer.has("NOT") ? {type: "NOT"} : NOT)]},
    {"name": "Token", "symbols": [(lexer.has("TRUE") ? {type: "TRUE"} : TRUE)]},
    {"name": "Token", "symbols": [(lexer.has("FALSE") ? {type: "FALSE"} : FALSE)]},
    {"name": "Token", "symbols": [(lexer.has("NULL") ? {type: "NULL"} : NULL)]},
    {"name": "Token", "symbols": [(lexer.has("EQUAL_TO") ? {type: "EQUAL_TO"} : EQUAL_TO)]},
    {"name": "Token", "symbols": [(lexer.has("LESS_THAN") ? {type: "LESS_THAN"} : LESS_THAN)]},
    {"name": "Token", "symbols": [(lexer.has("GREATER_THAN") ? {type: "GREATER_THAN"} : GREATER_THAN)], "postprocess": function(d) {return d[0]}},
    {"name": "_$ebnf$1", "symbols": []},
    {"name": "_$ebnf$1$subexpression$1", "symbols": [(lexer.has("WS") ? {type: "WS"} : WS)]},
    {"name": "_$ebnf$1$subexpression$1", "symbols": [(lexer.has("NL") ? {type: "NL"} : NL)]},
    {"name": "_$ebnf$1", "symbols": ["_$ebnf$1", "_$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "_", "symbols": ["_$ebnf$1"], "postprocess": function(d) {return d[0].flat()}}
]
  , ParserStart: "Main"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
