const { UnknownNodeTypeError, NotImplementedError } = require('./errors.js');

function evaluate(node, locals) {
    switch (node.type) {
        case 'Integer':
        case 'Float':
        case 'TRUE':
        case 'FALSE':
        case 'NULL':
            return node.value;
        case 'Quote':
            return node.value.map((v) => v.value).join('');
        case 'Body':
            return evaluateBody(node.value, locals);
        case 'Call':
            return evaluateCall(node.value, locals);
        default:
            throw new UnknownNodeTypeError(node);
    }
}

function evaluateBody(statements, locals) {
    var locals = locals || {};
    for (statement of statements) {
        console.log(statement)
        switch (statement.type) {
            case 'Comment':
                break;  // nothing to do
            case 'Define':
                // statement.value[0] is an Identifier, .value[1] is a Call
                var ident = statement.value[0].value;
                locals[ident] = evaluate(statement.value[1], locals);
                break;
            case 'If':
                // statement.value[0] is a Boolean Expression, .value[1] is a Body
                if (evaluate(statement.value[0], locals)) {
                    var result = evaluate(statement.value[1], locals);
                    // if a result was returned, there was a Return, so return it.
                    if (result) {
                        return result;
                    }
                }
                break;
            case 'While':
                // statement.value[0] is a Boolean Expression, .value[1] is a Body
                while (evaluate(statement.value[0], locals)) {
                    var result = evaluate(statement.value[1], locals);
                    // if a result was returned, there was a Return, so return it.
                    if (result) {
                        return result;
                    }
                }
                break;
            case 'Return':
                return evaluate(statement.value);
            default:
                throw new UnknownNodeTypeError(statement);
        }
    }
}

function evaluateCall(nodes, locals) {
    
}

module.exports = { evaluate: evaluate }
