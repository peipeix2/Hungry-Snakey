import useUserStore from '../store/userStore'
import Button from './Button'

function StatusMap({ isGameStart, isGameOver, startGame }) {
  const userName = useUserStore((state) => state.userName)

  return (
    <>
      {!isGameStart && userName && (
        <div className="mask animate-fade-up absolute flex h-full w-full flex-col items-center justify-center gap-4 bg-opacity-50">
          {isGameOver && (
            <p className="text-2xl font-bold text-white">Game Over</p>
          )}
          {!isGameOver && (
            <img
              src="src/assets/ready_logo.png"
              className="xs:h-32 xs:w-32 animate-infinite h-20 w-20 animate-bounce"
            />
          )}
          <Button
            onClick={startGame}
            word={isGameOver ? 'Play again' : 'Start'}
          />
        </div>
      )}
    </>
  )
}

export default StatusMap
