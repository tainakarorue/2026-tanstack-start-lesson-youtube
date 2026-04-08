import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/_protected/posts/$postId')({
  component: RouteComponent,
})

function RouteComponent() {
  const { postId } = Route.useParams()

  return <div>Post ID: {postId}</div>
}
