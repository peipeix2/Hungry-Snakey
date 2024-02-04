function Button({ word, onClick }) {
  return (
    <button
      className="start-button xs:text-base cursor-pointer rounded-3xl border-2 border-white px-6 py-1 text-sm text-white hover:bg-white hover:text-black"
      onClick={onClick}
    >
      {word}
    </button>
  )
}

export default Button
