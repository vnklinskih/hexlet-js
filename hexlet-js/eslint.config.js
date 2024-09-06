import globals from 'globals';

import path from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import pluginJs from '@eslint/js';

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: pluginJs.configs.recommended,
});

export default [
  { languageOptions: { globals: globals.browser } },
  ...compat.extends('airbnb'),
];

module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended', // Добавьте эту строку
  ],
  rules: {
    'prettier/prettier': 'error', // Ошибка при несоответствии форматированию Prettier
  },
};
