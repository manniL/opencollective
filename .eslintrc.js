module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    jest: true
  },
  plugins: [
    'jest',
    'vue',
    'ava'
  ],
  extends: ['standard', 'plugin:ava/recommended'],
  rules: {
    // Allow paren-less arrow functions
    'arrow-parens': 0,
    // Allow async-await
    'generator-star-spacing': 0,
    // Allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // Do not allow console.logs etc...
    'no-console': 2
  },
  globals: {
    'jest/globals': true,
    jasmine: true
  }
}
