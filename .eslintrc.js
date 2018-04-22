module.exports = {
  "parser": "babel-eslint",
  "extends": "airbnb",

  "env": {
    "browser": true,
  },

  "settings": {
    "import/resolver": {
      "node": {
        "paths": ["src"]
      }
    },
  },

  "rules": {
    "object-curly-spacing": "off",
    "import/extensions": "off",
    "react/jsx-filename-extension": "off",
    "react/jsx-tag-spacing": "off",
  },
};
