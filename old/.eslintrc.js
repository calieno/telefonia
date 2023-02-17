module.exports = {
  parser: "@typescript-eslint/parser",
  env: {
    es6: true,
    node: true,
    brownser: true,
  },

  plugins: ["@typescript-eslint"],
  extends: [
    "standard-with-typescript",
    "standard",
    "prettier",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: module,
    project: ["./tsconfig.json"],
  },
  rules: {
    // ident:[
    //   "error",
    //   "tab"
    // ],
    // quotes: [
    //   "error",
    //   "double"
    // ],
    // semi:[
    //   "error",
    //   "never"
    // ]
  },
};
