import type { DatabaseItemResult, ExtractedRichTextPropertyValue } from "./notion";

export type WishResponse = {
  properties: {
    Wish: ExtractedRichTextPropertyValue<"rich_text">;
    From: ExtractedRichTextPropertyValue<"rich_text">;
    Title: ExtractedRichTextPropertyValue<"title">;
  };
} & DatabaseItemResult;

export type Wish = {
  title: string
  from: string
  content: string
}