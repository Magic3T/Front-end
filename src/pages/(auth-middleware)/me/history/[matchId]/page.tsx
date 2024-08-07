import { MatchTemplate } from '@/components/match-template'
import { useGuardedAuth } from '@/contexts/guarded-auth.context.tsx'
import { models } from '@/models'
import { useCallback, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useMeContext } from '../../layout'

export default function MeMatchPage() {
  const { user } = useGuardedAuth()

  const { matchId } = useParams()

  const navigate = useNavigate()

  const {
    lazyMatchLoader: [matches, loading, load],
  } = useMeContext()

  const searchAndRedirect = useCallback(async () => {
    // Get desperdiçado
    const match = await models.matches.getById(matchId || '')
    if (match) {
      navigate(`/match/${matchId}`)
    }
  }, [matchId])

  useEffect(() => {
    if (!matches && !loading) load()
  }, [matches, load])

  if (loading || !matches) return 'carregando'

  for (const match of matches) {
    if (match._id === matchId) {
      return <MatchTemplate match={match} viewAs={user._id} />
    }
  }

  searchAndRedirect()
  return <>Partida não encontrada.</>
}
