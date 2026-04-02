import { createFileRoute, Outlet, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main>
      <Link to="/">To Top</Link> <br />
      <Link to="/about">To About</Link> <br />
      <Link to="/posts/$postId" params={{ postId: '123' }}>
        To Post
      </Link>
      <Outlet />
    </main>
  )
}
