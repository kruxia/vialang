# Via Semantics
2020-04-08

* every thing is an object
* every phrase is an expression
* every body is a sequence of expressions with lexical scope
* every function parameter is an immutable reference (no silent mutations or call by value)
* every body evaluation is lazy (and based on its lexical scope) 
* there are no side-effects except in closures

Basic types:

* `boolean` = a boolean object (`true` and `false`)
  * `true`
  * `false`
* `integer` = i64
* `quote` = str
* `sequence` = iterator
* `function` = function
* `body` = a sequence of expressions with lexical scope
* `null` = the absence of any value (a type with one instance object)
* `comment` = a comment in the code, not evaluated

* `type` = the root of all types

Reserved words and phrases:

* `begin` = the beginning of a body
* `end {type}` = the end of the body of the given type
* `define {symbol} as {expression}` = variable assignment
* `if {expression} {body} else {body} end if`
* `while {expression} {body} end while` = define a sequence
* `and`, `or`, `not`
* `greater than`, `less than`, `equal to`
* `return {expression}` = return the given expression and end the current function

[after 0.1.0]

* `yield {expression}` = values returned from a sequence
* `type` = to define a new type or return an object's type
* `continue`, `break` = ways to end a sequence / iteration
* `help` = give me immediate help in the current context.
* `module` = a named body
* `[from {module}*] import {module} [as {symbol}]`

## Truthiness

Boolean expressions (Both, Either, Not, Call) are evaluated to True or False.

* True
  * true
  * Non-empty string
  * Any number
  * An object with keys
  * An array with values
* False
  * NaN
  * false
  * null
  * Empty string
  * An object without keys
  * An array without values
