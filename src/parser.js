const nearley = require("nearley");
const grammar = require("./grammar.js"); // pre-compiled from grammar.ne
const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));

module.exports = { parser: parser }
