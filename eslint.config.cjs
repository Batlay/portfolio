const globals = require('globals');
const react = require('eslint-plugin-react');
const js = require('@eslint/js');
const ts = require('@typescript-eslint/eslint-plugin');
const tsParser = require('@typescript-eslint/parser');

module.exports = [
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
    ignores: ['public', 'dist', 'node_modules'],
    languageOptions: {
      parser: tsParser,
      globals: {
        ...globals.browser,
        React: true,
      },
    },
    plugins: {
      '@typescript-eslint': ts,
      react: react,
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        typescript: true,
      },
    },
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
    },
  },
];
