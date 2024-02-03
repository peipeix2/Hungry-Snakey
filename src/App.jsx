import { useEffect, useState } from 'react'
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
  const [direction, setDirection] = useState('UP')

  useEffect(() => {
    const interval = setInterval(() => updatePosition(direction), 500)
    return () => clearInterval(interval)
  }, [snake])

  useEffect(() => {
    window.addEventListener('keydown', updateDirection)
    return () => window.removeEventListener('keydown', updateDirection)
  }, [direction])

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

  function updatePosition(direction) {
    const newSnakePosition = [...snake]
    switch (direction) {
      case 'UP':
        newSnakePosition.unshift({
          x: newSnakePosition[0].x - 1,
          y: newSnakePosition[0].y,
        })
        break
      case 'DOWN':
        newSnakePosition.unshift({
          x: newSnakePosition[0].x + 1,
          y: newSnakePosition[0].y,
        })
        break
      case 'LEFT':
        newSnakePosition.unshift({
          x: newSnakePosition[0].x,
          y: newSnakePosition[0].y - 1,
        })
        break
      case 'RIGHT':
        newSnakePosition.unshift({
          x: newSnakePosition[0].x,
          y: newSnakePosition[0].y + 1,
        })
        break
    }

    const isFoodEaten =
      newSnakePosition[0].x === food.x && newSnakePosition[0].y === food.y
    if (isFoodEaten) {
      renderFood()
      setScore((prev) => prev + 10)
    } else {
      newSnakePosition.pop()
    }
    setSnake(newSnakePosition)
  }

  function updateDirection(e) {
    if (e.key === 'ArrowUp' && direction !== 'DOWN') {
      setDirection('UP')
    }
    if (e.key === 'ArrowDown' && direction !== 'UP') {
      setDirection('DOWN')
    }
    if (e.key === 'ArrowLeft' && direction !== 'RIGHT') {
      setDirection('LEFT')
    }
    if (e.key === 'ArrowRight' && direction !== 'LEFT') {
      setDirection('RIGHT')
    }
  }

  function renderFood() {
    const xPosition = Math.floor(Math.random() * TOTAL_BOARD_SIZE)
    const yPosition = Math.floor(Math.random() * TOTAL_BOARD_SIZE)
    setFood({ x: xPosition, y: yPosition })
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
