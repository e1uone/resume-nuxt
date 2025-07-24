// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  srcDir: "src/",
  ssr: false,
  modules: [
    "shadcn-nuxt",
    "@nuxt/eslint",
    "@formkit/auto-animate/nuxt",
    "@nuxtjs/color-mode",
  ],
  css: ["~/assets/css/tailwind.css", "~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        html2canvas: resolve(__dirname, "node_modules/html2canvas-pro"),
      },
    },
  },
  colorMode: {
    classSuffix: "",
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./src/components/ui",
  },
  components: [
    { path: "~/components", pathPrefix: false },

    { path: "~/components/icons", prefix: "Icon" },
  ],

  // App configuration
  app: {
    baseURL: "/", // Base URL for the application
    buildAssetsDir: "/_nuxt/", // Directory for built assets
    head: {
      title: 'Анекта кандидата — ООО "КАРТАС"',
      htmlAttrs: {
        lang: "ru",
      },
      link: [
        // { rel: "manifest", href: "/manifest.json" },
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png",
        },
      ],
    },
  },
});
