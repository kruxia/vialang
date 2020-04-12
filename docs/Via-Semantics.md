# Via Semantics
2020-04-08

* every thing is an object
* every phrase is an expression
* every block is a sequence of expressions with lexical scope
* every function parameter is an immutable reference (no silent mutations or call by value)
* every block evaluation is lazy (and based on its lexical scope) 
* there are no side-effects except in closures

Basic types:

* `type` = the root of all types
* `boolean` = a boolean object (`true` and `false`)
  * `true`
  * `false`
* `integer` = i64
* `quote` = str
* `sequence` = iterator
* `function` = function
* `block` = a sequence of expressions with lexical scope
* `null` = the absence of any value (a type with one instance object)
* `comment` = a comment in the code, not evaluated
* `module` = a named block

Other reserved words and phrases:

* `type` = to define a new type or return an object's type
* `begin` = the beginning of a block or instance body
* `end {type}` = the end of the block or instance body of the given type
* `define {symbol} as {expression}` = variable assignment
* `if {expression} {block} else {block}`
* `while {expression} {block}` = define a sequence
* `and`, `or`, `not`
* `continue`, `break` = ways to end a sequence / iteration
* `return {expression}` = return the given expression and end the current function
* `help` = give me immediate help in the current context.
* `yield {expression}` = values returned from a sequence
* `[from {module}*] import {module} [as {symbol}]`
