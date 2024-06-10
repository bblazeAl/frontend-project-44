import globals from "globals";
import pluginJs from "@eslint/js";
import airbnbBaseConfig from "eslint-config-airbnb-base";

export default [
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  {
    rules: {
      ...airbnbBaseConfig.rules 
    }
  }
];

