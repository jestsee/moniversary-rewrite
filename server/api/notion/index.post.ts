import { defineWrappedValidationHandler } from "~/server/utils/validationWrapper";
import { Wish, wishSchema } from "~/types/wish";
import { addWish } from "./notion-sdk";

export default defineWrappedValidationHandler(
  wishSchema,
  (validatedBody: Wish) => addWish(validatedBody)
);
