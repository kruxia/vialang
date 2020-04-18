const { lexer } = require("../src/lexer")

example = "define a as 5"
test('lexer produces the expected tokens: "' + example + '"', () => {
    lexer.reset(example)
    token = lexer.next(); expect(token.type).toBe("DEFINE");
    token = lexer.next(); expect(token.type).toBe("WS");
    token = lexer.next(); expect(token.type).toBe("identifier"); expect(token.value).toBe("a");
    token = lexer.next(); expect(token.type).toBe("WS");
    token = lexer.next(); expect(token.type).toBe("AS");
    token = lexer.next(); expect(token.type).toBe("WS");
    token = lexer.next(); expect(token.type).toBe("integer"); expect(token.value).toBe(5);
});
