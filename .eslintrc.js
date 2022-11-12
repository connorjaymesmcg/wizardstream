module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'eslint:recommended',
    'plugin:prettier/recommended'
  ],
  parser: 'babel-eslint',

  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  'prettier/prettier': [
    'error',
    {
      endOfLine: 'auto'
    }
  ],
  plugins: ['react'],
  rules: {
    'react/jsx-wrap-multilines': [
      'error',
      {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
        condition: 'parens-new-line',
        logical: 'parens-new-line',
        prop: 'parens-new-line'
      }
    ],
    'max-len': 0,
    'no-param-reassign': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'react/function-component-definition': 0,
    'react/react-in-jsx-scope': 'off',
    'import/extensions': 0,
    'react/prop-types': 0,
    'linebreak-style': 0,
    'react/state-in-constructor': 0,
    'import/prefer-default-export': 0,
    'no-underscore-dangle': [
      'error',
      {
        allow: ['_d', '_dh', '_h', '_id', '_m', '_n', '_t', '_text']
      }
    ],
    'object-curly-newline': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-one-expression-per-line': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/alt-text': 0,
    'jsx-a11y/no-autofocus': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'react/no-array-index-key': 0,
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to', 'hrefLeft', 'hrefRight'],
        aspects: ['noHref', 'invalidHref', 'preferButton']
      }
    ]
  }
};
