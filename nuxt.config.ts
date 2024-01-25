export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    "@/assets/css/main.css",
    "primevue/resources/themes/viva-light/theme.css",
  ],
  modules: ["@nuxtjs/tailwindcss", "nuxt-primevue", "@pinia/nuxt"],
  alias: {
    pinia: "/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs",
  },
  tailwindcss: {
    configPath: "~/tailwind.config.js",
    cssPath: "@/assets/css/tailwind.css",
  },
  primevue: {
    cssLayerOrder: "tailwind-base, primevue, tailwind-utilities",
  },
});
