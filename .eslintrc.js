module.exports = {
  extends: 'airbnb',
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'class-methods-use-this': [0, { exceptMethods: '' }],
    'no-console': ['error', { allow: ['warn', 'error', 'log'] }],
    'import/prefer-default-export': 'off',
    'no-underscore-dangle': 'off',
    'no-unused-expressions': [0, { allowShortCircuit: true, allowTernary: true }],
    'no-plusplus': [0],
    'react/forbid-prop-types': [
      0,
      { forbid: [''], checkContextTypes: false, checkChildContextTypes: false },
    ],
  },
};
