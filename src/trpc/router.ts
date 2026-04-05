import { router, publicProcedure } from './init'

export const appRouter = router({
  hello: publicProcedure.query(() => {
    return { message: 'Hello tRPC' }
  }),
})

export type AppRouter = typeof appRouter
