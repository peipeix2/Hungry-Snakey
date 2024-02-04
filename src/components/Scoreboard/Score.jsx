import { SiCookiecutter } from 'react-icons/si'

function Score({ score }) {
  return (
    <div className="score flex items-center gap-2 font-medium text-[#F28123]">
      <SiCookiecutter />
      <p>{score}</p>
    </div>
  )
}

export default Score
