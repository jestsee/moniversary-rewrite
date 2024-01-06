import type { Wish } from "~/types/wish";
import { extractText } from "../../utils/extractor";
import { getWishResults } from "./notion-sdk";

export default defineEventHandler<Promise<Wish[]>>(async () => {
  const wishResults = await getWishResults();
  return wishResults.map((wish) => ({
    title: extractText(wish.properties.Title),
    from: extractText(wish.properties.From),
    content: extractText(wish.properties.Wish),
  }));
});