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
      globals: {
        window: 'readonly',
        document: 'readonly',
        navigator: 'readonly',
        fetch: 'readonly',
        console: 'readonly',
      },
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
      'css/no-invalid-properties': 'error',
    },
  },
];
