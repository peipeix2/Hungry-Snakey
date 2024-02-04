import { useEffect, useState, useCallback, useMemo } from 'react'
import { TOTAL_BOARD_SIZE, INITIAL_SNAKE_POSITION, throttle } from '../utils'
import Scoreboard from '../components/Scoreboard'
import VirtualKeyboard from '../components/VirtualKeyboard'
import StatusMap from '../components/StatusMap'
import UserInfo from '../components/UserInfo'
import useGameStore from '../store/gameStore'

function generateCellStyle(isSnake, isFood) {
  let cellStyle = 'xs:h-6 xs:w-6 w-4 h-4 border border-black '
  if (isSnake) return (cellStyle += 'bg-white')
  if (isFood) return (cellStyle += 'bg-red-600 rounded-full')
  return (cellStyle += 'bg-slate-800')
}

function renderFood() {
  const xPosition = Math.floor(Math.random() * TOTAL_BOARD_SIZE)
  const yPosition = Math.floor(Math.random() * TOTAL_BOARD_SIZE)
  return { x: xPosition, y: yPosition }
}

function getOppositeDirection(currentDirection) {
  const opposite = {
    UP: 'DOWN',
    DOWN: 'UP',
    LEFT: 'RIGHT',
    RIGHT: 'LEFT',
  }
  return opposite[currentDirection]
}

function SnakeGame() {
  const [snake, setSnake] = useState(INITIAL_SNAKE_POSITION)
  const [food, setFood] = useState(() => renderFood())
  const [direction, setDirection] = useState('RIGHT')
  const [isGameStart, setIsGameStart] = useState(false)
  const [isGameOver, setIsGameOver] = useState(false)
  const { addScore, resetScore } = useGameStore()

  useEffect(() => {
    if (!isGameStart) return

    const interval = setInterval(() => {
      const newState = calculateNewState(direction, snake, food)

      if (!newState) return

      setSnake(newState.newSnake)

      if (newState.isFoodEaten) {
        setFood(renderFood())
        addScore()
      }

      if (newState.isGameOver) {
        setIsGameOver(true)
        setIsGameStart(false)
        resetGame()
      }
    }, 250)

    return () => clearInterval(interval)
  }, [isGameStart, direction, snake, food])

  const renderBoard = useMemo(() => {
    const boardArray = []
    for (let row = 0; row < TOTAL_BOARD_SIZE; row++) {
      for (let col = 0; col < TOTAL_BOARD_SIZE; col++) {
        const isSnake = snake.some((item) => item.x === row && item.y === col)
        const isFood = food.x === row && food.y === col

        const cellStyle = generateCellStyle(isSnake, isFood)

        const cell = isFood ? (
          <div className="relative" key={`${row}-${col}`}>
            <div className="animate-duration-[3000ms] absolute h-full w-full animate-ping rounded-full bg-red-800"></div>
            <div className={cellStyle} />
          </div>
        ) : (
          <div className={cellStyle} key={`${row}-${col}`} />
        )
        boardArray.push(cell)
      }
    }
    return boardArray
  }, [food, snake])

  function calculateNewState(direction, snake, food) {
    const head = snake[0]
    let newHead

    switch (direction) {
      case 'UP':
        newHead = { x: head.x - 1, y: head.y }
        break
      case 'DOWN':
        newHead = { x: head.x + 1, y: head.y }
        break
      case 'LEFT':
        newHead = { x: head.x, y: head.y - 1 }
        break
      case 'RIGHT':
        newHead = { x: head.x, y: head.y + 1 }
        break
    }

    const isFoodEaten = newHead.x === food.x && newHead.y === food.y
    const newSnake = isFoodEaten
      ? [newHead, ...snake]
      : [newHead, ...snake.slice(0, -1)]
    const isGameOverCondition =
      newHead.x < 0 ||
      newHead.x >= TOTAL_BOARD_SIZE ||
      newHead.y < 0 ||
      newHead.y >= TOTAL_BOARD_SIZE ||
      newSnake
        .slice(1)
        .some((item) => item.x === newHead.x && item.y === newHead.y)

    return {
      newSnake,
      isFoodEaten,
      isGameOver: isGameOverCondition,
    }
  }

  const updateDirection = useCallback(
    throttle((input) => {
      const directionKey = {
        ArrowUp: 'UP',
        ArrowDown: 'DOWN',
        ArrowLeft: 'LEFT',
        ArrowRight: 'RIGHT',
      }
      const newDirection =
        typeof input === 'object'
          ? directionKey[input.key]
          : directionKey[input]

      if (newDirection && newDirection !== getOppositeDirection(direction)) {
        setDirection(newDirection)
      }
    }, 250),
    [direction]
  )

  function resetGame() {
    setSnake(INITIAL_SNAKE_POSITION)
    resetScore()
    setFood(renderFood())
    setDirection('RIGHT')
  }

  function startGame() {
    setIsGameStart(true)
    setIsGameOver(false)
  }

  useEffect(() => {
    window.addEventListener('keydown', updateDirection)
    return () => window.removeEventListener('keydown', updateDirection)
  }, [updateDirection])

  return (
    <>
      <Scoreboard />
      <div className="board grid-cols-20 grid-rows-20 xs:max-w-max relative grid max-w-xs">
        {renderBoard}
        <StatusMap
          isGameStart={isGameStart}
          isGameOver={isGameOver}
          startGame={startGame}
        />
        <UserInfo isGameStart={isGameStart} />
      </div>

      <VirtualKeyboard updateDirection={updateDirection} />
    </>
  )
}

export default SnakeGame
