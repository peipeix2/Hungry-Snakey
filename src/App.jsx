import SnakeGame from './page/SnakeGame'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <div className="container flex h-screen w-screen max-w-full flex-col items-center justify-center bg-black">
      <SnakeGame />
      <Toaster />
    </div>
  )
}

export default App
