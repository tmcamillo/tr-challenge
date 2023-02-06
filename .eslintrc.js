module.exports = {
  env: {
    node: true,
    jest: true,
    'cypress/globals': true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'prettier',
    'plugin:cypress/recommended'
  ],
  plugins: ['prettier', '@typescript-eslint', 'cypress'],
  rules: {
    'vue/no-unused-vars': 'error',
    'vue/require-default-prop': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/v-on-event-hyphenation': 'off',
    'no-trailing-spaces': 'error',
    'vue/html-indent': [
      'off',
      2,
      {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: true
      }
    ],
    'jest/expect-expect': 'off'
  }
}
