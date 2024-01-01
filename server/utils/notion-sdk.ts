import { Client } from "@notionhq/client";
import type { WishResponse } from "~/types/wish";

const runtimeConfig = useRuntimeConfig();
const notion = new Client({ auth: runtimeConfig.notionSecret });

export const getWishResults = async () => {
  const database = await notion.databases.query({
    database_id: runtimeConfig.notionDatabaseId,
  });

  return database.results.map((result) => result as WishResponse);
};
