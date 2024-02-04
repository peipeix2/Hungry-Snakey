export const TOTAL_BOARD_SIZE = 20
export const INITIAL_SNAKE_POSITION = [
  { x: 0, y: 1 },
  { x: 0, y: 0 },
]
export function throttle(fn, delay = 500) {
  let timer = null

  return (...args) => {
    if (timer) return
    timer = setTimeout(() => {
      fn(...args)
      timer = null
    }, delay)
  }
}
