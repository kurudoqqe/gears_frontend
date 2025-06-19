import { globalIgnores, defineConfig } from "eslint/config";
import perfectionist from "eslint-plugin-perfectionist";
import pluginVue from "eslint-plugin-vue";
import globals from "globals";
import js from "@eslint/js";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,jsx,vue}"],
    name: "app/files-to-lint",
  },

  globalIgnores(["**/dist/**", "**/dist-ssr/**", "**/coverage/**"]),

  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },

  js.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  perfectionist.configs["recommended-line-length"],
]);
