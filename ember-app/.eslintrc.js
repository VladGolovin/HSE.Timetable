// .eslintrc.js
module.exports = {
  plugins: [
    'ember'
  ],
  extends: [
    'eslint:recommended',
    'plugin:ember/recommended' // or 'plugin:ember/base'
  ],
  rules: {
    // override rules' settings here
    'ember/avoid-leaking-state-in-components': 'off',
    'ember/avoid-leaking-state-in-ember-objects': 'off'
  },
}