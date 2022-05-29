module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['next/core-web-vitals', 'prettier'],
  globals: {},
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 13,
    sourceType: 'module'
  },
  ignorePatterns: ['node_modules/']
};
