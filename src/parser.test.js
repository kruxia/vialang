const fs = require("fs");
const path = require("path");
const { parser } = require('./parser'); 

test("examples.via parses without error", () => {
    viaSamples = fs.readFileSync(
        path.join(__dirname, "examples.via"), {encoding: "UTF-8"}
    );
    parser.feed(viaSamples); // throws an error if the grammar won't parse the examples
    expect(parser.results.length).toBe(1); // expect an unambiguous parser result
});
