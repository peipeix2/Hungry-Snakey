import { SiCookiecutter } from 'react-icons/si'
import useGameStore from '../../store/gameStore'

function Score() {
  const score = useGameStore((state) => state.score)

  return (
    <div className="score flex items-center gap-2 font-medium text-[#F28123]">
      <SiCookiecutter />
      <p>{score}</p>
    </div>
  )
}

export default Score
