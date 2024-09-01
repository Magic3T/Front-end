import { ProfileTemplate } from '@/components/templates'
import { userQueryOptions } from '@/utils/query-options'
import { useQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/user/$userId/_user-layout/')({
  component: Page,
  shouldReload: false,
})

function Page() {
  const { userId } = Route.useParams()
  const userQuery = useQuery(userQueryOptions(userId))

  if (userQuery.isLoading || !userQuery.data) {
    return <>loading</>
  }

  return (
    <ProfileTemplate
      baseUrl={`/user/${userId}`}
      index="profile"
      user={userQuery.data}
    />
  )
}
