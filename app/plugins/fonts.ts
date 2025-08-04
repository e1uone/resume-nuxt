export default defineNuxtPlugin({
  name: "js-pdf-fonts-plugin",
  enforce: "pre",
  async setup() {
    import("~/assets/fonts/TimesNewRoman-normal.js");
    import("~/assets/fonts/TimesNewRoman-bold.js");
    import("~/assets/fonts/TimesNewRoman-bolditalic.js");
    import("~/assets/fonts/TimesNewRoman-italic.js");
  },
  env: {
    islands: false,
  },
});
