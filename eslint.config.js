export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        console: 'readonly',
        process: 'readonly',
        __dirname: 'readonly',
        module: 'readonly',
      },
    },
    rules: {
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      indent: ['error', 2],
      'no-multiple-empty-lines': ['error', { max: 1 }],
      'comma-dangle': ['error', 'always-multiline'],
      'object-curly-spacing': ['error', 'always'],

      'no-unused-vars': ['warn'],
      'no-console': 'off',
      'no-undef': 'error',
      'prefer-const': 'error',
    },
  },
];
