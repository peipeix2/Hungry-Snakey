import { useState } from 'react'
import { TOTAL_BOARD_SIZE } from './utils'
import Score from './components/Score'

function App() {
  const initialSnakePosition = [
    { x: TOTAL_BOARD_SIZE / 2, y: TOTAL_BOARD_SIZE / 2 },
    { x: TOTAL_BOARD_SIZE / 2 + 1, y: TOTAL_BOARD_SIZE / 2 },
  ]
  const [snake, setSnake] = useState(initialSnakePosition)
  const [food, setFood] = useState({ x: 0, y: 0 })

  function renderBoard(totalBoardSize) {
    const boardArray = []
    for (let row = 0; row < totalBoardSize; row++) {
      for (let col = 0; col < totalBoardSize; col++) {
        const isSnake = snake.some((item) => item.x === row && item.y === col)
        const isFood = food.x === row && food.y === col

        let cellStyle = 'h-6 w-6 border border-black bg-slate-800'
        if (isSnake) {
          cellStyle = 'h-6 w-6 border border-black bg-white'
        }
        if (isFood) {
          cellStyle = 'h-6 w-6 border border-black bg-red-800'
        }

        const cell = <div className={cellStyle} key={`${row}-${col}`} />
        boardArray.push(cell)
      }
    }
    return boardArray
  }

  return (
    <div className="container flex h-screen w-screen max-w-full flex-col items-center justify-center bg-black">
      <Score />
      <div className="board grid-cols-20 grid-rows-20 grid">
        {renderBoard(TOTAL_BOARD_SIZE)}
      </div>
    </div>
  )
}

export default App
