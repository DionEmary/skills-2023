module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/no-unused-vars': 'off',
    'no-unused-vars': 'off',
    'vue/no-use-v-if-with-v-for': 'off',
    'vue/no-parsing-error': 'off',
    'no-cond-assign': 'off',
    'no-constant-condition': 'off',
    'no-undef': 'off',
  }
}
