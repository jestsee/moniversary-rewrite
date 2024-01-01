import type {
  QueryDatabaseResponse,
  RichTextItemResponse,
} from "@notionhq/client/build/src/api-endpoints";

export type DatabaseItemResult = Extract<
  QueryDatabaseResponse["results"][number],
  { properties: Record<string, unknown> }
>;

type PropertyValueMap = DatabaseItemResult["properties"];
type PropertyValue = PropertyValueMap[string];
export type PropertyType = PropertyValue["type"];

type FilterFromEmptyObject<T> = T extends {
  rich_text: { [x: string]: never };
}
  ? never
  : T;

type FilterRichTextItem<T> = T extends Record<"type", infer Type extends string>
  ? T extends Record<Type, RichTextItemResponse[]>
    ? T
    : never
  : never;
  
type RichTextPropertyValue = FilterRichTextItem<PropertyValue>;
export type RichTextProperty = RichTextPropertyValue['type']

export type ExtractedPropertyValue<TType extends PropertyType> =
  FilterFromEmptyObject<Extract<PropertyValue, { type: TType }>>;
