const { lexer } = require("../src/lexer")

example = "define a-b as 5."
test('lexer produces the expected tokens: "' + example + '"', () => {
    lexer.reset(example)
    token = lexer.next(); expect(token.type).toBe("DEFINE");
    token = lexer.next(); expect(token.type).toBe("WS");
    token = lexer.next(); expect(token.type).toBe("identifier"); expect(token.value).toBe("a-b");
    token = lexer.next(); expect(token.type).toBe("WS");
    token = lexer.next(); expect(token.type).toBe("AS");
    token = lexer.next(); expect(token.type).toBe("WS");
    token = lexer.next(); expect(token.type).toBe("integer"); expect(token.value).toBe(5);
    token = lexer.next(); expect(token.type).toBe("punct"); expect(token.value).toBe(".");
});
