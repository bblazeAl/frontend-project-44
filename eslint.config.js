import path from 'path';
import { URL } from 'url';
import globals from 'globals';
import pluginJs from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = path.dirname(new URL(import.meta.url).pathname);
const compat = new FlatCompat({
  baseDirectory: __filename,
  recommendedConfig: pluginJs.configs.recommended,
});

export default [
  { languageOptions: { globals: globals.node } },
  ...compat.extends('airbnb-base'),
];
