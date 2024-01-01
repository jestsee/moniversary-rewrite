import type { DatabaseItemResult, ExtractedPropertyValue } from "./notion";

export type WishResponse = {
  properties: {
    Wish: ExtractedPropertyValue<"rich_text">;
    From: ExtractedPropertyValue<"rich_text">;
    Title: ExtractedPropertyValue<"title">;
  };
} & DatabaseItemResult;
