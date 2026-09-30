import globals from 'globals';
import js from '@eslint/js';
import css from '@eslint/css';
import html from '@html-eslint/eslint-plugin';

export default [
  {
    ignores: ['dist/**', 'build/**', 'node_modules/**'],
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
    },
    rules: {
      ...js.configs.recommended.rules,
      'no-unused-vars': 'warn',
      'no-console': 'off',
      'no-restricted-properties': [
        'error',
        { property: 'innerHTML' },
        { property: 'outerHTML' },
        { property: 'insertAdjacentHTML' },
      ],
      'no-alert': 'error',
    },
  },
  {
    files: ['**/*.html'],
    plugins: {
      html,
    },
    language: 'html/html',
    rules: {
      ...html.configs.recommended.rules,
      'html/indent': ['error', 2],
      'html/no-duplicate-attrs': 'error',
      'html/require-img-alt': 'warn',
      'html/require-closing-tags': ['error', { selfClosing: 'always' }],
      'html/no-extra-spacing-tags': 'off',
      'html/attrs-newline': 'off',
    },
  },
  {
    files: ['**/*.css'],
    plugins: {
      css,
    },
    language: 'css/css',
    rules: {
      'css/no-empty-blocks': 'error',
      'css/no-duplicate-imports': 'error',
      'css/no-invalid-properties': ['error', { allowUnknownVariables: true }],
    },
  },
];
