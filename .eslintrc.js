module.exports = {
    root: true,
    env: {
        node: true,
        commonjs: true,
        es6: true,
        browser: true
    },
    extends: ['plugin:react/recommended', 'eslint:recommended'],
    parserOptions: {
        parser: 'babel-eslint',
        "ecmaVersion": 8,
        'sourceType': 'module',
        'ecmaFeatures': {
            'jsx': true
        }
    },
    'plugins': [
        'react'
    ],
    settings: {
        react: {
            'version': 'latest'
        }
    },
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
        'react/prop-types': 0
    },
    overrides: [
        {
            files: [
                '**/__tests__/*.{j,t}s?(x)',
                '**/tests/unit/**/*.spec.{j,t}s?(x)'
            ],
            env: {
                jest: true
            }
        }
    ]
}