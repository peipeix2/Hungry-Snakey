import { useState } from 'react'
import { TOTAL_BOARD_SIZE, INITIAL_SNAKE_POSITION } from './utils'
import Score from './components/Score'

function generateCellStyle(isSnake, isFood) {
  let cellStyle = 'h-6 w-6 border border-black '
  if (isSnake) return (cellStyle += 'bg-white')
  if (isFood) return (cellStyle += 'bg-red-800')
  return (cellStyle += 'bg-slate-800')
}

function App() {
  const [snake, setSnake] = useState(INITIAL_SNAKE_POSITION)
  const [food, setFood] = useState({ x: 0, y: 0 })
  const [score, setScore] = useState(30)

  function renderBoard(totalBoardSize) {
    const boardArray = []
    for (let row = 0; row < totalBoardSize; row++) {
      for (let col = 0; col < totalBoardSize; col++) {
        const isSnake = snake.some((item) => item.x === row && item.y === col)
        const isFood = food.x === row && food.y === col

        const cellStyle = generateCellStyle(isSnake, isFood)

        const cell = <div className={cellStyle} key={`${row}-${col}`} />
        boardArray.push(cell)
      }
    }
    return boardArray
  }

  return (
    <div className="container flex h-screen w-screen max-w-full flex-col items-center justify-center bg-black">
      <Score score={score} />
      <div className="board grid-cols-20 grid-rows-20 grid">
        {renderBoard(TOTAL_BOARD_SIZE)}
      </div>
    </div>
  )
}

export default App
