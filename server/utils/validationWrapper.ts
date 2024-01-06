import type { EventHandler, EventHandlerRequest } from "h3";
import { z } from "zod";

export const defineWrappedValidationHandler = <
  T extends EventHandlerRequest,
  D,
  Z extends z.ZodRawShape
>(
  schema: z.ZodObject<Z>,
  handler: CallableFunction
): EventHandler<T, D> =>
  defineEventHandler<T>(async (event) => {
    const validated = await readValidatedBody(event, (body) =>
      schema.safeParse(body)
    );
    if (!validated.success) {
      const issue = validated.error.issues[0];
      throw createError({
        statusCode: 400,
        statusMessage: `${
          issue.path[0]
        } field is ${issue.message.toLowerCase()}`,
      });
    }
    return handler(validated.data);
  });
