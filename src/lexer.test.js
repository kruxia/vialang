const { lexer } = require("./lexer")
const fs = require('fs')
const path = require('path')

test('examples.via produces the expected tokens', () => {
    viaSamples = fs.readFileSync(path.join(__dirname, "examples.via"), { encoding: 'UTF-8' })
    lexer.reset(viaSamples)

    token = lexer.next(); expect(token.type).toBe("newline");
    token = lexer.next(); expect(token.type).toBe("DEFINE");
    token = lexer.next(); expect(token.type).toBe("_");
    token = lexer.next(); expect(token.type).toBe("word"); expect(token.value).toBe("a");
    token = lexer.next(); expect(token.type).toBe("_");
    token = lexer.next(); expect(token.type).toBe("AS"); 
    token = lexer.next(); expect(token.type).toBe("_");
    token = lexer.next(); expect(token.type).toBe("integer"); expect(token.value).toBe("5");
});

