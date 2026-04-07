import { initTRPC, TRPCError } from '@trpc/server'

import { auth } from '@/lib/auth'

export const createContext = async (req: Request) => {
  const session = await auth.api.getSession({ headers: req.headers })
  return { session }
}

type Context = Awaited<ReturnType<typeof createContext>>

const t = initTRPC.context<Context>().create()

export const router = t.router

// 認証不要のプロシージャ
export const publicProcedure = t.procedure

// 認証必須のプロシージャ（未ログインなら UNAUTHORIZED エラー）
export const protectedProcedure = t.procedure.use(({ ctx, next }) => {
  if (!ctx.session) {
    throw new TRPCError({ code: 'UNAUTHORIZED' })
  }

  return next({ ctx: { ...ctx, session: ctx.session } })
})
