import { Client } from "@notionhq/client";
import type { Wish, WishResponse } from "~/types/wish";

const runtimeConfig = useRuntimeConfig();
const notion = new Client({ auth: runtimeConfig.notionSecret });

export const getWishResults = async () => {
  const database = await notion.databases.query({
    database_id: runtimeConfig.notionDatabaseId,
  });

  return database.results.map((result) => result as WishResponse);
};

export const addWish = (wish: Wish) => {
  return notion.pages.create({
    parent: { database_id: runtimeConfig.notionDatabaseId },
    properties: {
      [runtimeConfig.notionWishTitleId]: {
        title: [{ type: "text", text: { content: wish.title } }],
      },
      [runtimeConfig.notionWishContentId]: {
        rich_text: [{ type: "text", text: { content: wish.content } }],
      },
      [runtimeConfig.notionWishFromId]: {
        rich_text: [{ type: "text", text: { content: wish.from } }],
      },
    },
  });
};
