const fs = require("fs");
const path = require("path");
const yaml = require('js-yaml');
const nearley = require("nearley");
const grammar = require("../src/grammar.js"); // pre-compiled from grammar.ne

for (fixture of ['define.yaml']) {
    test("parse via with expected results: " + fixture, () => {
        var sourcePath = path.join(__dirname, 'fixtures', fixture);
        var data = yaml.safeLoad(fs.readFileSync(sourcePath, { encoding: "UTF-8" }));
        for (item of data) {
            // instantiate a new parser for each item, so that each test is isolated
            // (otherwise, it collects all the inputs, so that each result includes the
            // previous results)
            var parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));

            // throws an error if the grammar won't parse the examples
            parser.feed(item.via);

            // expect an unambiguous parser result
            expect(parser.results.length).toBe(1);

            parser_results = JSON.parse(JSON.stringify(parser.results))
            // console.log(JSON.stringify(parser_results))

            // expect the parser results to match what we expect them to be
            expect(parser_results).toStrictEqual(item.results);
        }
    });
}