import {
  IoMdArrowDropupCircle,
  IoMdArrowDropdownCircle,
  IoMdArrowDropleftCircle,
  IoMdArrowDroprightCircle,
} from 'react-icons/io'

function ArrowButtons({ direction, onClick }) {
  const directionObject = {
    UP: <IoMdArrowDropupCircle color="white" size="40" onClick={onClick} />,
    DOWN: <IoMdArrowDropdownCircle color="white" size="40" onClick={onClick} />,
    LEFT: <IoMdArrowDropleftCircle color="white" size="40" onClick={onClick} />,
    RIGHT: (
      <IoMdArrowDroprightCircle color="white" size="40" onClick={onClick} />
    ),
  }

  return <>{directionObject[direction]}</>
}

export default ArrowButtons
