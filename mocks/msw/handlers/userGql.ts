import { graphql } from "msw";

export const handlers = [
  // Query に `FormDataCheck` といったオペレーション名がついてればこのハンドラが動きます
  // コールバックに指定された req, res の引数はよく見るものになっています
  graphql.mutation("FormDataCheck", async (req, res, ctx) => {
    // variables はクエリのパラメータ、req オブジェクトにはよく見るような
    // headers, cookies なども取得できるようになっています
    // console.log('req.variables: ', req.variables)
    // console.log('res: ', res)
    if (req.variables?.mail === "xxx409@gmail.com") {
      return res(
        ctx.data({
          error: {
            message: "conflict",
            item: {mail: "登録済みのアドレスです"},
          },},),
      )
    }

    return res(ctx.status(200), ctx.data({error: null}));
  })
];