import { useGame } from '@/contexts/game.context.tsx'
import { GamePage } from './game'
import { Lobby } from '../../../components/templates/lobby/lobby'

export function Home() {
  const { isActive } = useGame()

  return isActive ? <GamePage /> : <Lobby />
}
