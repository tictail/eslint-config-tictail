module.exports = {
  plugins: ['prettier', 'compat'],
  rules: {
    'accessor-pairs': 1,
    'block-scoped-var': 2,
    camelcase: [1, { properties: 'never' }],
    'capitalized-comments': 0,
    'consistent-this': [1, 'that'],
    'constructor-super': 2,
    'default-case': 1,
    'dot-notation': 1, // encourages use of dot notation whenever possible
    'eol-last': 1, // enforce newline at the end of file, with no multiple empty lines
    eqeqeq: [2, 'smart'],
    'func-name-matching': 1,
    'guard-for-in': 1,
    'handle-callback-err': 1, // enforces error handling in callbacks (off by default) (on by default in the node environment)
    'max-params': [1, 5], // limits the number of parameters that can be used in the function declaration. (off by default)
    'new-cap': [2, { newIsCap: true, capIsNew: false }], // require a capital letter for constructors
    'new-parens': 1, // disallow the omission of parentheses when invoking a constructor with no arguments
    'no-alert': 1, // disallow the use of alert, confirm, and prompt
    'no-await-in-loop': 1,
    'no-bitwise': 1, // disallow use of bitwise operators (off by default)
    'no-case-declarations': 2,
    'no-catch-shadow': 1, // disallow the catch clause parameter name being the same as a variable in the outer scope (off by default in the node environment)
    'no-class-assign': 2,
    'no-compare-neg-zero': 1,
    'callback-return': 0, // Later
    'class-methods-use-this': 0, // Later
    'prefer-rest-params': 0, // Later
    'no-cond-assign': 1, // disallow assignment in conditional expressions
    'no-console': 1, // disallow use of console (off by default in the node environment)
    'no-const-assign': 2,
    'no-constant-condition': 1, // disallow use of constant expressions in conditions
    'no-control-regex': 2, // disallow control characters in regular expressions
    'no-debugger': 1, // disallow use of debugger
    'no-delete-var': 1, // disallow deletion of variables
    'no-div-regex': 1, // disallow division operators explicitly at beginning of regular expression (off by default)
    'no-dupe-args': 2,
    'no-dupe-class-members': 2,
    'no-dupe-keys': 2, // disallow duplicate keys when creating object literals
    'no-duplicate-case': 2,
    'no-duplicate-imports': 2,
    'no-else-return': 1, // disallow else after a return in an if (off by default)
    'no-empty-character-class': 2,
    'no-empty-pattern': 1,
    'no-empty': 1, // disallow empty statements
    'no-eval': 2, // disallow use of eval()
    'no-ex-assign': 1, // disallow assigning to the exception in a catch block
    'no-extend-native': 1, // disallow adding to native types
    'no-extra-bind': 1, // disallow unnecessary function binding
    'no-extra-boolean-cast': 1, // disallow double-negation boolean casts in a boolean context
    'no-extra-semi': 0,
    'no-fallthrough': 1, // disallow fallthrough of case statements
    'no-floating-decimal': 1, // disallow the use of leading or trailing decimal points in numeric literals (off by default)
    'no-func-assign': 1, // disallow overwriting functions written as function declarations
    'no-global-assign': 1,
    'no-implied-eval': 1, // disallow use of eval()-like methods
    'no-inner-declarations': 1, // disallow function or variable declarations in nested blocks
    'no-invalid-regexp': 2, // disallow invalid regular expression strings in the RegExp constructor
    'no-iterator': 1, // disallow usage of __iterator__ property
    'no-label-var': 2, // disallow labels that share a name with a variable
    'no-lone-blocks': 1, // disallow unnecessary nested blocks
    'no-lonely-if': 1, // disallow if as the only statement in an else block (off by default)
    'no-loop-func': 1, // disallow creation of functions within loops
    'no-mixed-requires': 1, // disallow mixing regular variable and require declarations (off by default) (on by default in the node environment)
    'no-multi-assign': 1,
    'no-multi-str': 1, // disallow use of multiline strings
    'no-multiple-empty-lines': 1, // disallow multiple empty lines (off by default)
    'no-native-reassign': 1, // disallow reassignments of native objects
    'no-negated-in-lhs': 1, // disallow negation of the left operand of an in expression
    'no-new-func': 1, // disallow use of new operator for Function object
    'no-new-object': 1, // disallow use of the Object constructor
    'no-new-require': 1, // disallow use of new operator with the require function (off by default) (on by default in the node environment)
    'no-new-symbol': 2,
    'no-new-wrappers': 1, // disallows creating new instances of String, Number, and Boolean
    'no-obj-calls': 2, // disallow the use of object properties of the global object (Math and JSON) as functions
    'no-octal-escape': 1, // disallow use of octal escape sequences in string literals, such as var foo = "Copyright \251";
    'no-octal': 1, // disallow use of octal literals
    'no-param-reassign': 1,
    'no-path-concat': 1, // disallow string concatenation with __dirname and __filename (off by default) (on by default in the node environment)
    'no-plusplus': 1, // disallow use of unary operators, ++ and -- (off by default)
    'no-process-exit': 1, // disallow process.exit() (on by default in the node environment)
    'no-proto': 1, // disallow usage of __proto__ property
    'no-prototype-builtins': 1,
    'no-redeclare': 2, // disallow declaring the same variable more then once
    'no-return-assign': 1, // disallow use of assignment in return statement
    'no-script-url': 2, // disallow use of javascript: urls.
    'no-self-assign': 2,
    'no-self-compare': 1, // disallow comparisons where both sides are exactly the same (off by default)
    'no-sequences': 1, // disallow use of comma operator
    'no-shadow-restricted-names': 2, // disallow shadowing of names such as arguments
    'no-this-before-super': 2,
    'no-undef': 1,
    'no-underscore-dangle': 0,
    'no-unexpected-multiline': 2,
    'no-unmodified-loop-condition': 2,
    'no-unneeded-ternary': 1,
    'no-unreachable': 2, // disallow unreachable statements after a return, throw, continue, or break statement
    'no-unsafe-finally': 2,
    'no-unsafe-negation': 2,
    'no-unused-labels': 2,
    'no-unused-vars': 1, // disallow declaration of variables that are not used in the code
    'no-useless-call': 1,
    'no-useless-computed-key': 1,
    'no-useless-concat': 1,
    'no-useless-constructor': 1,
    'no-useless-escape': 1,
    'no-useless-rename': 1,
    'no-useless-return': 1,
    'no-var': 2, // require let or const instead of var (off by default)
    'no-void': 2, // disallow use of void operator (off by default)
    'no-with': 2, // disallow use of the with statement
    'object-shorthand': [1, 'always'],
    'one-var-declaration-per-line': 1,
    'operator-assignment': [2, 'never'], // require assignment operator shorthand where possible or prohibit it entirely (off by default)
    'operator-linebreak': 0,
    'padded-blocks': [1, 'never'], // enforce padding within blocks (off by default)
    'prefer-const': 1,
    'prefer-spread': 1,
    'quote-props': [1, 'as-needed'], // require quotes around object literal property names (off by default)
    radix: 1, // require use of the second argument for parseInt() (off by default)
    'require-yield': 2,
    'space-before-function-paren': [1, 'never'],
    'spaced-comment': [1, 'always'],
    strict: [2, 'global'], // controls location of Use Strict Directives
    'use-isnan': 2, // disallow comparisons with the value NaN
    'valid-typeof': 2, // Ensure that the results of typeof are compared against a valid string
    'vars-on-top': 1, // requires to declare all vars on top of their containing scope (off by default)
    'prettier/prettier': [
      1,
      {
        trailingComma: 'es5',
        singleQuote: true,
        semi: false,
      },
    ],
    'compat/compat': 2,
  },
}
