// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt().override('nuxt/typescript', {
  rules: {
    'vue/html-self-closing': 'off'
  }
});

