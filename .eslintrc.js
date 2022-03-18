module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: { semi: [2, "never"] },
};
