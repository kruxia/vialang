
function UnknownNodeTypeError(node) {
    this.message = 'Unknown type: ' + node.type;
    if (node.line && node.col) {
        this.message += ' {line: ' + node.line + ', column: ' + node.col + '}';
    }
    this.name = 'UnknownNodeTypeError';
}

function NotImplementedError(message) {
    this.message = 'Not implemented: ' + message;
    this.name = 'NotImplementedError';
}

module.exports = {
    UnknownNodeTypeError: UnknownNodeTypeError,
    NotImplementedError: NotImplementedError,
}