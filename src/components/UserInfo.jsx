import { useState } from 'react'
import useUserStore from '../store/userStore'
import toast from 'react-hot-toast'

function UserInfo({ isGameStart }) {
  const [name, setName] = useState('')
  const userName = useUserStore((state) => state.userName)
  const setUserName = useUserStore((state) => state.setUserName)

  function handleSubmit() {
    const valid = name && name.trim().length !== 0
    const isTooLong = name && name.trim().length > 20
    if (isTooLong) {
      toast.error("User name can't exceed 20 words")
    } else if (valid) {
      setUserName(name)
      setName('')
      localStorage.setItem('user', name)
    } else {
      toast.error('Please type in valid name :-)')
    }
  }

  return (
    <>
      {!isGameStart && !userName && (
        <div className="mask animate-fade-up absolute flex h-full w-full flex-col items-center justify-center gap-4 bg-opacity-50">
          <input
            placeholder="Please enter your name"
            className="fold-bold border-b-2 border-b-white bg-transparent pb-1 text-xl text-white outline-none focus:bg-none"
            onChange={(e) => setName(e.target.value)}
          />
          <button
            className="start-button xs:text-base cursor-pointer rounded-3xl border-2 border-white px-6 py-1 text-sm text-white hover:bg-white hover:text-black"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      )}
    </>
  )
}

export default UserInfo
