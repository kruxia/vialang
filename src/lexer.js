const moo = require('moo');

let lexer = moo.compile({
    // whitespace
    _:          { match: /[^\S\n]+/, value: null },
    newline:    { match: /\n/, lineBreaks: true, value: null },

    // keywords
    HELP:       /\b[Hh][Ee][Ll][Pp]\b/,
    DEFINE:     /\b[Dd][Ee][Ff][Ii][Nn][Ee]\b/,
    AS:         /\b[Aa][Ss]\b/,
    WITH:       /\b[Ww][Ii][Tt][Hh]\b/,

    BEGIN:      /\b[Bb][Ee][Gg][Ii][Nn]\b/,
    END:        /\b[Ee][Nn][Dd]\b/,
    
    QUOTE:      /\b[Qq][Uu][Oo][Tt][Ee]\b/,
    BLOCK:      /\b[Bb][Ll][Oo][Cc][Kk]\b/,
    FUNCTION:   /\b[Ff][Uu][Nn][Cc][Tt][Ii][Oo][Nn]\b/,
    COMMENT:    /\b[Cc][Oo][Mm][Mm][Ee][Nn][Tt]\b/,
    
    IF:         /\b[Ii][Ff]\b/,
    ELSE:       /\b[Ee][Ll][Ss][Ee]\b/,
    WHILE:      /\b[Ww][Hh][Ii][Ll][Ee]\b/,
    CONTINUE:   /\b[Cc][Oo][Nn][Tt][Ii][Nn][Uu][Ee]\b/,
    BREAK:      /\b[Bb][Rr][Ee][Aa][Kk]\b/,
    RETURN:     /\b[Rr][Ee][Tt][Uu][Rr][Nn]\b/,

    AND:        /\b[Aa][Nn][Dd]\b/,
    OR:         /\b[Oo][Rr]\b/,
    NOT:        /\b[Nn][Oo][Tt]\b/,
    
    TRUE:       /\b[Tt][Rr][Uu][Ee]\b/,
    FALSE:      /\b[Ff][Aa][Ll][Ss][Ee]\b/,
    NULL:       /\b[Nn][Uu][Ll][Ll]\b/,

    // numbers
    float:      /\b-?[0-9]+\.(?:[0-9]+)?(?:[eE][+\-]?[0-9]+)?\b/,
    integer:    /\b[0-9]+\b/,

    // strings
    // identifier: /\b[\w\-]+\b/,
    word:       /[\S]+/,  // includes surrounding punctuation -- hence no \b...\b
})

module.exports = { lexer: lexer }
