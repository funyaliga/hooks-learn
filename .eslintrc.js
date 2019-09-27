module.exports = {
  root: true, 
  extends: 'airbnb',
  parser: 'babel-eslint',
  plugins: [
    "react-hooks",
    "html",
  ],
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true
    }
  },
  env: {
    browser: true,
  },
  settings: {
    "import/resolver": {
      webpack: {
        config: 'config/webpack.dev.js'
      }
    }
  },
  rules: {
    "indent": ["error", 2],
    "react/jsx-filename-extension": [1, { "extensions": [".js"] }],
    "react/jsx-one-expression-per-line": [0],
    "react/jsx-props-no-spreading": [0],
    "import/no-extraneous-dependencies": ["error", { "devDependencies": true }],
    "react/button-has-type": 'off',
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "jsx-a11y/click-events-have-key-events": [0],
    "jsx-a11y/no-static-element-interactions": [0],
    "jsx-a11y/no-noninteractive-element-interactions": [0],
  }
}