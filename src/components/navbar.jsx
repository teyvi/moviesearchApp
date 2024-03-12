import React from 'react'

const Navbar = () => {
  return (
    <div>
      <ul className='flex'>
        <li className='p-2'>
          POPULAR
        </li>
        <li className='p-2'>BY RATING</li>
        <li className='p-2'>
          SINGLE MOVIES
        </li>
      </ul>
    </div>
  )
}

export default Navbar;