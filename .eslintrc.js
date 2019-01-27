module.exports = {
    parser: 'babel-eslint',
    extends: ['prettier', 'airbnb'],
    plugins: ['react', 'jsx-a11y', 'import'],
    rules: {
        indent: [4, 'tab', {
            SwitchCase: 1
        }],
        'no-tabs': 0,
        'no-mixed-operators': 0,
        'comma-dangle': [2, 'always-multiline'],
        strict: 0,
        'no-console': 0,
        'object-shorthand': 1,
        'space-in-parens': 2,
        'space-before-function-paren': 0,
        'no-unused-expressions': ['error', {
            allowTernary: true
        }],
        'arrow-parens': 0,
        'no-plusplus': ['error', {
            allowForLoopAfterthoughts: true
        }],
        'no-restricted-syntax': ['error', 'ForInStatement', 'LabeledStatement', 'WithStatement'],
        'no-shadow': [2, {
            allow: ['done']
        }],
        'dot-notation': 1,
        'consistent-return': 0,
        'no-param-reassign': 0,
    },
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true,
    },
    installedESLint: true,
}