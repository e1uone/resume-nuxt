// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  srcDir: "src/",
  modules: ["shadcn-nuxt", "@nuxt/eslint", "@formkit/auto-animate/nuxt"],
  css: ["~/assets/css/tailwind.css", "~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
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
});
