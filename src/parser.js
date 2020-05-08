const immutable = require('immutable');
const nearley = require("nearley");
const grammar = require("./grammar.js");

function parse(via) {
    // create a new parser for every source
    let parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));
    parser.feed(via);
    return immutable.fromJS(parser.results, reviver);
}

function reviver(key, value, path) {
    // use OrderedMap for objects, List for arrays
    return immutable.isKeyed(value) ? value.toOrderedMap() : value.toList()
}

module.exports = { parse: parse }
