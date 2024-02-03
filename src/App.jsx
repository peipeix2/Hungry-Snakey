import { TOTAL_BOARD_SIZE } from './utils'

function renderBoard(totalBoardSize) {
  const boardArray = []
  for (let row = 0; row < totalBoardSize; row++) {
    for (let col = 0; col < totalBoardSize; col++) {
      const cell = (
        <div
          className="h-6 w-6 border border-black bg-slate-800"
          key={`${row}-${col}`}
        />
      )
      boardArray.push(cell)
    }
  }
  return boardArray
}

function App() {
  return (
    <div className="container flex h-screen w-screen max-w-full flex-col items-center justify-center bg-black">
      <div className="score flex gap-2 text-white">
        <p>Score</p>
        <p>30</p>
      </div>
      <div className="board grid-cols-20 grid-rows-20 grid">
        {renderBoard(TOTAL_BOARD_SIZE)}
      </div>
    </div>
  )
}

export default App
