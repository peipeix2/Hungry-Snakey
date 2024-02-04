import UserName from './UserName'
import Score from './Score'
import logoURL from '../../assets/logo.png'

function Scoreboard() {
  return (
    <div className="info-container text-md xs:w-[480px] mb-4 flex w-[320px] items-center justify-between">
      <img src={logoURL} className="w-1/2" />
      <div className="flex items-center gap-4">
        <UserName />
        <Score />
      </div>
    </div>
  )
}

export default Scoreboard
