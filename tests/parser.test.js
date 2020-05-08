const fs = require("fs");
const path = require("path");
const yaml = require('js-yaml');
const parser = require('../src/parser.js');

var fixtures = [
    'define-scalar.yaml',
    'return-scalar.yaml',
    'return-boolean.yaml',
    'return-comparison.yaml',
    'return-boolean-comparison.yaml',
    'return-call.yaml',
    'define-function.yaml',
    'comment.yaml',
    'if.yaml',
    'while.yaml',
]

describe.each(fixtures)('grammar: %s', (source) => {
    var sourcePath = path.join(__dirname, 'grammar-fixtures', source);
    var data = yaml.safeLoad(fs.readFileSync(sourcePath, { encoding: "UTF-8" }));
    describe.each(data)('', (item) => {
        test(item.via, () => {
            try {
                // throws an error if the grammar won't parse the examples
                parser_results = JSON.parse(JSON.stringify(parser.parse(item.via)))
            } catch (err) {
                console.log("item.via: " + item.via);
                throw (err);
            }

            try {
                // expect an unambiguous parser result
                expect(parser_results.length).toBe(1);

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
