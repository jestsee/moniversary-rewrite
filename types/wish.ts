import { z } from "zod";
import type {
  DatabaseItemResult,
  ExtractedRichTextPropertyValue,
} from "./notion";

export type WishResponse = {
  properties: {
    Wish: ExtractedRichTextPropertyValue<"rich_text">;
    From: ExtractedRichTextPropertyValue<"rich_text">;
    Title: ExtractedRichTextPropertyValue<"title">;
  };
} & DatabaseItemResult;

export const wishSchema = z.object({
  title: z.string().min(10),
  from: z.string().min(1),
  content: z.string().min(1),
});

export type Wish = z.infer<typeof wishSchema>
