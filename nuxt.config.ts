// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  runtimeConfig: {
    notionSecret: process.env.NOTION_API_SECRET,
    notionDatabaseId: process.env.NOTION_DATABASE_ID,
    notionWishTitleId: process.env.NOTION_WISH_TITLE_ID,
    notionWishFromId: process.env.NOTION_WISH_FROM_ID,
    notionWishContentId: process.env.NOTION_WISH_CONTENT_ID,
    notionWishTagsId: process.env.NOTION_WISH_TAGS_ID,
  },
  typescript: {
    strict: true,
  },
  app: {
    head: {
      link: [{ rel: "icon", type: "image/png", href: "./poop.webp" }],
    },
  },
});
