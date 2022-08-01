import { rest } from "msw";

export const handlers = [
  rest.post<{ mail: string }>(
    "https://api-server.com/user",
    async (req, res, ctx) => {
      const data = await req.json()
      if (data.mail === "xxx409@gmail.com") {
        return res(
          ctx.status(409),
          ctx.json({
            err: {
              message: "conflict",
              item: {mail: ".ᐟ 登録済みのアドレスです"},
            },
          })
        );
      }
      return res(ctx.status(201), ctx.json(data));
    }
  ),
];
