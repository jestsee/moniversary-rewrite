// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  runtimeConfig: {
    notionSecret: process.env.NOTION_API_SECRET,
    notionDatabaseId: process.env.NOTION_DATABASE_ID,
  },
  typescript: {
    strict: true,
  },
});
