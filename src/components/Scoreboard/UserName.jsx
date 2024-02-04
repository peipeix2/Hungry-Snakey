import { FaUser } from 'react-icons/fa'
import useUserStore from '../../store/userStore'

function UserName() {
  const userName = useUserStore((state) => state.userName)
  return (
    <div className="user flex items-center gap-2 font-medium text-[#898980]">
      {userName && <FaUser />}
      <span>{userName ? userName : ''}</span>
    </div>
  )
}

export default UserName
