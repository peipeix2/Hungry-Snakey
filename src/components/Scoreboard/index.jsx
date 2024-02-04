import UserName from './UserName'
import Score from './Score'

function Scoreboard({ score }) {
  return (
    <div className="info-container text-md xs:w-[480px] mb-4 flex w-[320px] items-center justify-between">
      <img src="src/assets/logo.png" className="w-1/2" />
      <div className="flex items-center gap-4">
        <UserName />
        <Score score={score} />
      </div>
    </div>
  )
}

export default Scoreboard
