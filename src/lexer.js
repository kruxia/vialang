const moo = require('moo');

let lexer = moo.compile({
    // whitespace
    WHITESPACE:     { match: /[^\S\n]+/, value: null },
    NEWLINE:        { match: /\n/, lineBreaks: true, value: null },

    // keywords
    HELP:           /\b[Hh][Ee][Ll][Pp]\b/,
    DEFINE:         /\b[Dd][Ee][Ff][Ii][Nn][Ee]\b/,
    AS:             /\b[Aa][Ss]\b/,
    WITH:           /\b[Ww][Ii][Tt][Hh]\b/,

    BEGIN:          /\b[Bb][Ee][Gg][Ii][Nn]\b/,
    END:            /\b[Ee][Nn][Dd]\b/,
    
    QUOTE:          /\b[Qq][Uu][Oo][Tt][Ee]\b/,
    BLOCK:          /\b[Bb][Ll][Oo][Cc][Kk]\b/,
    FUNCTION:       /\b[Ff][Uu][Nn][Cc][Tt][Ii][Oo][Nn]\b/,
    COMMENT:        /\b[Cc][Oo][Mm][Mm][Ee][Nn][Tt]\b/,
    
    IF:             /\b[Ii][Ff]\b/,
    ELSE:           /\b[Ee][Ll][Ss][Ee]\b/,
    WHILE:          /\b[Ww][Hh][Ii][Ll][Ee]\b/,
    CONTINUE:       /\b[Cc][Oo][Nn][Tt][Ii][Nn][Uu][Ee]\b/,
    BREAK:          /\b[Bb][Rr][Ee][Aa][Kk]\b/,
    RETURN:         /\b[Rr][Ee][Tt][Uu][Rr][Nn]\b/,

    BOTH:           /\b[Bb][Oo][Tt][Hh]\b/,
    EITHER:         /\b[Ee][Ii][Tt][Hh][Ee][Rr]\b/,
    AND:            /\b[Aa][Nn][Dd]\b/,
    OR:             /\b[Oo][Rr]\b/,
    NOT:            /\b[Nn][Oo][Tt]\b/,
    
    TRUE:           /\b[Tt][Rr][Uu][Ee]\b/,
    FALSE:          /\b[Ff][Aa][Ll][Ss][Ee]\b/,
    NULL:           /\b[Nn][Uu][Ll][Ll]\b/,

    EQUAL_TO:       /\b[Ee][Qq][Uu][Aa][Ll] [Tt][Oo]\b/,
    LESS_THAN:      /\b[Ll][Ee][Ss][Ss] [Tt][Hh][Aa][Nn]\b/,
    GREATER_THAN:   /\b[Gg][Rr][Ee][Aa][Tt][Ee][Rr] [Tt][Hh][Aa][Nn]\b/,

    // numbers
    float:          {
                        match:/\b-?[0-9]+\.(?:[0-9]+)?(?:[eE][+\-]?[0-9]+)?\b/, 
                        value: function(d) { return parseFloat(d) }
                    },
    integer:        {
                        match: /\b[0-9]+\b/, 
                        value: function(d) { return parseInt(d) }
                    },

    // strings
    identifier:     /\b[\w\-]+\b/,
    word:           /[\S]+/,  // includes surrounding punctuation -- hence no \b...\b
})

module.exports = { lexer: lexer }
