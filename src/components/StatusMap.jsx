function StatusMap({ isGameStart, isGameOver, startGame }) {
  return (
    <>
      {!isGameStart && (
        <div className="mask animate-fade-up absolute flex h-full w-full flex-col items-center justify-center gap-4 bg-opacity-50">
          {isGameOver && (
            <p className="text-2xl font-bold text-white">Game Over</p>
          )}
          <button
            className="start-button xs:text-base cursor-pointer rounded-3xl border-2 border-white px-6 py-1 text-sm text-white hover:bg-white hover:text-black"
            onClick={startGame}
          >
            {isGameOver ? 'Play again' : 'Start'}
          </button>
        </div>
      )}
    </>
  )
}

export default StatusMap
