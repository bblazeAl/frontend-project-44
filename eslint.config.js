import globals from "globals";
import pluginJs from "@eslint/js";
import airbnbBase from "eslint-config-airbnb-base";

export default [
  {
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      ...airbnbBase.rules,
    },
  },
  pluginJs.configs.recommended,
];