const fs = require("fs");
const path = require("path");
const yaml = require('js-yaml');
const { parser } = require('../src/parser');

test("parse via with expected results: define.yaml", () => {
    data = yaml.safeLoad(
        fs.readFileSync(path.join(__dirname, "define.yaml"), { encoding: "UTF-8" })
    );
    for (item of data) {
        // throws an error if the grammar won't parse the examples
        parser.feed(item.via);
        
        // expect an unambiguous parser result
        expect(parser.results.length).toBe(1);

        // console.log(JSON.stringify(parser.results))
        parser_results = JSON.parse(JSON.stringify(parser.results))
        
        // expect the parser results to match what we expect them to be
        expect(parser_results).toStrictEqual(item.results);
    }
});
