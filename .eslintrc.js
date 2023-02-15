module.exports = {
  parser: "@typescript-eslint/parser",
  env: {
    es2021: true,
    node: true
  },

  plugins: ["@typescript-eslint"],
  extends: [
    "standard-with-typescript",
    "standard",
    "prettier",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: "latest"
  },
  rules: {
  }
};
