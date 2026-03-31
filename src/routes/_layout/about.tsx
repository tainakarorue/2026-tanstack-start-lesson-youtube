import { createFileRoute } from '@tanstack/react-router'
import { useNavigate } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/about')({
  component: RouteComponent,
})

function RouteComponent() {
  const navigate = useNavigate()

  const onClick = () => {
    navigate({ to: '/' })
  }

  return (
    <div>
      <button onClick={onClick}>To Top</button>
    </div>
  )
}
