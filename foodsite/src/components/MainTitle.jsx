import React from 'react'
import Style from './style.module.css'

export default function MainTitle({Title, Text}) {
  return (
    <div className={Style.MainContainer}>
        <p>{Title}</p>
        <h1>{Text}</h1>
        <br />
        <div className={Style.line}>
      
        </div>
        <br />
    </div>
  )
}
