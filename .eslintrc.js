module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'plugin:react/recommended',
        'airbnb'
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 12,
        sourceType: 'module'
    },
    plugins: [
        'react'
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        indent: ['error', 4],
        semi: ['error', 'never'],
        quotes: ['error', 'single'],
        'comma-dangle': ['error', 'never'],
        'arrow-parens': ['error', 'as-needed'],
        'no-underscore-dangle': ['warn', { allowAfterThis: true }],
        'jsx-quotes': ['error', 'prefer-single'],
        'react/prop-types': 0,
        'react/jsx-indent': ['warn', 4]
    }
}
