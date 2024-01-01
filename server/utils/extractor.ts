import type { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";
import type { RichTextPropertyValue } from "~/types/notion";

export const extractText = (item: RichTextPropertyValue) => {
  const type = item.type as keyof RichTextPropertyValue;
  return (item[type] as unknown as RichTextItemResponse[])[0].plain_text;
};
