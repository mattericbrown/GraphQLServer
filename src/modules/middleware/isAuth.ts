import { MiddlewareFn } from "type-graphql/dist/interfaces/Middleware";
import { MyContext } from "../../types/MyContext";

export const isAuth: MiddlewareFn<MyContext> = async ({ context }, next) => {
  if (!context.req.session!.userId) {
    throw new Error("not authenticated");
  }
  return next();
}