import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className="text-red-500 font-bold text-2xl">Top Page</div>
}
