module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',

  env: {
    browser: true,
  },

  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },

  rules: {
    'max-len': ['error', {code: 120, comments: 500}],
    'object-curly-spacing': ['error', 'never'],
    'no-mixed-operators': [
      'error',
      {
        groups: [
          // ['+', '-', '*', '/', '%', '**'],
          ['&', '|', '^', '~', '<<', '>>', '>>>'],
          ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
          ['&&', '||'],
          ['in', 'instanceof'],
        ],
        allowSamePrecedence: false,
      },
    ],
    'object-curly-newline': 'off',
    'import/first': 'off',
    'no-undef': 'off',
    'no-use-before-define': 'off',
    'function-paren-newline': 'off',
    'no-multi-assign': 'off',
    'spaced-comment': 'off',
    'no-unused-vars': 'off',
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'import/extensions': 'off',
    'react/sort-comp': 'off',
    'react/forbid-prop-types': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-tag-spacing': 'off',
  },
};
