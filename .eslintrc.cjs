// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
const MAX_LENGTH = 500;

/** @type {import('eslint').Linter.Config} */
const config = {
  overrides: [
    {
      extends: [
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: path.join(__dirname, 'tsconfig.json'),
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: path.join(__dirname, 'tsconfig.json'),
  },
  plugins: ['@typescript-eslint'],
  extends: ['next/core-web-vitals', 'plugin:@typescript-eslint/recommended'],
  rules: {
    'curly': 'warn',
    'eqeqeq': 'error',
    'jsx-quotes': 'error',
    'max-lines': ['warn', MAX_LENGTH],
    'quotes': ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    '@typescript-eslint/array-type': ['error', { default: 'array' }],
    '@typescript-eslint/consistent-type-imports': [
      'warn',
      {
        prefer: 'type-imports',
        fixStyle: 'inline-type-imports',
      },
    ],
    '@typescript-eslint/no-magic-numbers': 'warn',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
  },
};

module.exports = config;
