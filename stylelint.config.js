module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-recess-order'],
  plugins: ['stylelint-less'],
  rules: {
    'no-descending-specificity': null,
    'color-function-notation': null,
    'at-rule-no-unknown': null,
    'property-no-vendor-prefix': null
  },
  ignoreFiles: ['src/example/**']
}
