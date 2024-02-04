import ArrowButtons from './ArrowButtons'

function VirtualKeyboard({ updateDirection }) {
  return (
    <div className="container mt-10 flex flex-col items-center justify-center md:hidden">
      <ArrowButtons direction="UP" onClick={() => updateDirection('ArrowUp')} />
      <div className="left-right-container flex flex-row gap-12">
        <ArrowButtons
          direction="LEFT"
          onClick={() => updateDirection('ArrowLeft')}
        />
        <ArrowButtons
          direction="RIGHT"
          onClick={() => updateDirection('ArrowRight')}
        />
      </div>
      <ArrowButtons
        direction="DOWN"
        onClick={() => updateDirection('ArrowDown')}
      />
    </div>
  )
}

export default VirtualKeyboard
