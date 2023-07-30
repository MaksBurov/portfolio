// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["@/assets/styles/main.scss"],
  modules: [
    "@nuxtjs/color-mode",
    "@nuxtjs/i18n",
    "nuxt-icon",
    "@nuxtjs/google-fonts",
    "@nuxt/image-edge",
  ],
  colorMode: {
    preference: "system", // default value of $colorMode.preference
    fallback: "light", // fallback value if not system preference found
    hid: "nuxt-color-mode-script",
    globalName: "__NUXT_COLOR_MODE__",
    componentName: "ColorScheme",
    classPrefix: "",
    classSuffix: "-mode",
    storageKey: "nuxt-color-mode",
  },

  i18n: {
    locales: [
      {
        code: "ru",
        name: "Russian",
        iso: "ru-RU",
        file: "ru.json",
      },
      {
        code: "en",
        name: "English",
        iso: "en-U",
        file: "en.json",
      },
    ],
    defaultLocale: "ru",
    langDir: "locales/",
  },

  googleFonts: {
    families: {
      Roboto: {
        wght: [400, 700],
      },
    },
  },

  image: {
    dir: "assets/images",
  },
});
