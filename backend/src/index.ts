import { inferAsyncReturnType, initTRPC } from '@trpc/server';
import * as trpcExpress from '@trpc/server/adapters/express';
import express from 'express';
import cors from "cors"
import { z } from "zod"

// created for each request
const createContext = ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => ({}); // no context
type Context = inferAsyncReturnType<typeof createContext>;
 
const t = initTRPC.context<Context>().create();

export const router = t.router;
export const publicProcedure = t.procedure;

const appRouter = router({
  getHello: publicProcedure
    .query(async () => {
      return { msg: "Hello" }
    }),
  postHello: publicProcedure
    .input(z.object({ content: z.string() }))
    .mutation((req) => {
      console.log(req.input.content)
      return "done"
    })
});

app.post("/api/hello", (req, res) => {
  res.json("hello")
})

const app = express();
app.use(cors())
app.use(
  '/',
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  }),
);
app.listen(3000);

export type AppRouter = typeof appRouter;