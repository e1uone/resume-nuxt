// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

// Get the base config from Nuxt
const config = withNuxt([
  {
    ignores: ["**/components/ui"],
  },
  {
    rules: {
      "vue/html-self-closing": "off",
      curly: "error",
    },
  },
]);

export default config;
