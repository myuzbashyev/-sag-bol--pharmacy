export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    "@/assets/css/main.css",
    "primevue/resources/themes/viva-light/theme.css",
  ],
  modules: ["@nuxtjs/tailwindcss", "nuxt-primevue"],
  tailwindcss: {
    configPath: "~/tailwind.config.js",
    cssPath: "@/assets/css/tailwind.css",
  },
  primevue: {
    cssLayerOrder: "tailwind-base, primevue, tailwind-utilities",
  },
});
