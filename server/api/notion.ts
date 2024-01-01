import type { Wish } from "~/types/wish";
import { extractText } from "../utils/extractor";
import { getWishResults } from "../utils/notion-sdk";

export default defineEventHandler<Promise<Wish[]>>(async () => {
  const wishResults = await getWishResults();
  return wishResults.map((wish) => ({
    title: extractText(wish.properties.Title),
    from: extractText(wish.properties.From),
    content: extractText(wish.properties.Wish),
  }));
});

// TODO
// error handle
// page icon
// skeleton loading?
