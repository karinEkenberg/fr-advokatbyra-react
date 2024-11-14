import React from 'react'

const Tjanster = () => {
  return (
    <ul className="absolute left-0 mt-2 w-40 bg-primary bg-opacity-85 text-white rounded shadow-lg">
    <li className="px-4 py-2 hover:bg-primary">
      <a href="#privat">Privatperson</a>
    </li>
    <li className="px-4 py-2 hover:bg-primary">
      <a href="#hyresvard">Hyresvärd</a>
    </li>
    <li className="px-4 py-2 hover:bg-primary">
      <a href="#foretag">Företag</a>
    </li>
  </ul>
  )
}

export default Tjanster