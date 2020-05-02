const fs = require("fs");
const path = require("path");
const yaml = require('js-yaml');
const nearley = require("nearley");
const grammar = require("../src/grammar.js");  // pre-compiled from grammar.ne

var fixtures = [
    'define-scalar.yaml',
    'return-scalar.yaml',
    'return-boolean.yaml',
    'return-comparison.yaml',
    'return-boolean-comparison.yaml',
    'return-call.yaml',
    'define-function.yaml',
]

describe.each(fixtures)('grammar: %s', (source) => {
    var sourcePath = path.join(__dirname, 'fixtures', source);
    var data = yaml.safeLoad(fs.readFileSync(sourcePath, { encoding: "UTF-8" }));
    describe.each(data)('', (item) => {
        test(item.via, () => {
            // instantiate a new parser for each item, so that each test is isolated
            // (the parser collects its feeds, so each result includes previous feeds)
            var parser = new nearley.Parser(
                nearley.Grammar.fromCompiled(grammar),
                { keepHistory: true });

            try {
                // throws an error if the grammar won't parse the examples
                parser.feed(item.via);
                parser_results = JSON.parse(JSON.stringify(parser.results))
            } catch (err) {
                console.log("item.via: " + item.via);
                throw (err);
            }

            try {
                // expect an unambiguous parser result
                expect(parser.results.length).toBe(1);

                // expect the parser results to match what we expect them to be
                expect(parser_results).toStrictEqual(item.results);
            } catch (err) {
                console.log(
                    "item.via: " + item.via
                    + "\n  expected: " + JSON.stringify(item.results)
                    + "\n  parsed:   " + JSON.stringify(parser_results)
                );
                throw (err);
            }

        });
    });
});
