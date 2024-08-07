import { type Loader, useAsync } from '@/hooks/useAsync'
import { type LazyLoadData, useLazy } from '@/hooks/useLazy'
import { models } from '@/models'
import type { MatchModel } from '@/models/matches/Match'
import type { UserData } from '@/models/users/User'
import { createContext, useContext } from 'react'
import { Outlet, useParams } from 'react-router-dom'

interface UserPageContextData {
  lazyMatchLoader: LazyLoadData<MatchModel[]>
  lazyStandingsLoader: LazyLoadData<UserData[]>
  userLoader: Loader<UserData>
}

const UserPageContext = createContext<UserPageContextData>(
  {} as UserPageContextData
)

export default function UserPageLayout() {
  const { uid } = useParams() as { uid: string }

  const [user, loadingUser] = useAsync(async () => {
    return await models.users.getById(uid)
  }, [uid])

  const lazyMatchLoader = useLazy(async () => {
    if (user) {
      return await models.matches.listByPlayerId(user._id)
    }
    return []
  }, [user])

  const lazyStandingsLoader = useLazy(async () => {
    return await models.users.getStandings()
  }, [])

  if (!user) {
    return null
  }

  return (
    <UserPageContext.Provider
      value={{
        lazyMatchLoader,
        lazyStandingsLoader,
        userLoader: [user, loadingUser],
      }}
    >
      <Outlet />
    </UserPageContext.Provider>
  )
}

export const useUserPageContext = () => useContext(UserPageContext)
