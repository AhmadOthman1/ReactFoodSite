import React from 'react'
import './style.css'


const AvatarButton = (
    {
      avatar:{d,viewBox}
    }
) => {
  return (
    <div className='avatar'>
      <svg x="0px" y="0px" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox={viewBox}>
        <path fill="currentColor" d={d}/>
      </svg>
    </div>
  )
}

export default AvatarButton;