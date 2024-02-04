import {
  IoMdArrowDropupCircle,
  IoMdArrowDropdownCircle,
  IoMdArrowDropleftCircle,
  IoMdArrowDroprightCircle,
} from 'react-icons/io'

function ArrowButtons({ direction, onClick }) {
  const directionObject = {
    UP: (
      <IoMdArrowDropupCircle
        className=" text-white hover:text-gray-500"
        size="40"
        onClick={onClick}
      />
    ),
    DOWN: (
      <IoMdArrowDropdownCircle
        className=" text-white hover:text-gray-500"
        size="40"
        onClick={onClick}
      />
    ),
    LEFT: (
      <IoMdArrowDropleftCircle
        className=" text-white hover:text-gray-500"
        size="40"
        onClick={onClick}
      />
    ),
    RIGHT: (
      <IoMdArrowDroprightCircle
        className=" text-white hover:text-gray-500"
        size="40"
        onClick={onClick}
      />
    ),
  }

  return <>{directionObject[direction]}</>
}

export default ArrowButtons
