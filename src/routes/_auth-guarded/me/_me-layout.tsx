import { useGuardedAuth } from '@/contexts/guarded-auth.context'
import {
  matchesQueryOptions,
  standingsQueryOptions,
} from '@/utils/query-options'
import { useQuery } from '@tanstack/react-query'
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth-guarded/me/_me-layout')({
  component: Layout,
})

function Layout() {
  const { user } = useGuardedAuth()

  useQuery({
    ...matchesQueryOptions(user._id),
    enabled: false,
  })

  useQuery({
    ...standingsQueryOptions(),
    enabled: false,
  })

  return <Outlet />
}
