module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "eslint:recommended"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: "module"
  },
  plugins: [
    "react",
    "@typescript-eslint"
  ],
  rules: {
    indent: "off",
    quotes: 0,
    "import/extensions": 0,
    "comma-dangle": ["warn", "never"],
    "no-underscore-dangle": 0,
    "no-restricted-syntax": 0,
    "max-len": ["error", 130],
    camelcase: 0,
    "import/prefer-default-export": 0,
    "prefer-promise-reject-errors": 0,
    "react/jsx-wrap-multilines": 0,
    "react/prop-types": 0,
    "react/jsx-filename-extension": [1, { extensions: [".tsx", ".jsx"] }],
    "react/jsx-indent": "off",
    "react/jsx-no-undef": ["error", { allowGlobals: true }],
    "react/jsx-indent-props": [1, 4],
    "import/no-unresolved": 0,
    "react/react-in-jsx-scope": 0,
    "react/require-default-props": 0,
    "@typescript-eslint/no-non-null-assertion": 0,
    "react/jsx-props-no-spreading": 0,
    "no-console": ["warn", { allow: ["error"] }],
    "no-use-before-define": "off",
    "object-curly-newline": "off",
    "implicit-arrow-linebreak": "off",
    "react/jsx-curly-newline": "off",
    "operator-linebreak": "off",
    "arrow-body-style": "off",
    "no-trailing-spaces": "off",
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "padded-blocks": "off",
    "no-tabs": "off",
    radix: "warn",
    "linebreak-style": 0,
    "react/jsx-first-prop-new-line": "off",
    "react/jsx-closing-bracket-location": "off",
    "object-curly-spacing": "off",
    "no-unused-vars": ["error", { args: "none" }],
    "no-mixed-spaces-and-tabs": "off",
    "react/jsx-closing-tag-location": "off",
    "jsx-a11y/mouse-events-have-key-events": "off",
    "jsx-a11y/label-has-associated-control": ["error", {
      required: {
        some: ["nesting", "id"]
      }
    }],
    "jsx-a11y/label-has-for": ["error", {
      required: {
        some: ["nesting", "id"]
      }
    }],
    "react/function-component-definition": [0, {
      namedComponents: ["function-declaration", "function-expression", "arrow-function"],
      unnamedComponents: ["function-expression", "arrow-function"]
    }]
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".ts", ".tsx", ".jsx"]
      }
    }
  }
};
