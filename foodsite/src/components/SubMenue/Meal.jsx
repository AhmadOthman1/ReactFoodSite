import React from 'react'
import Style from './style.module.css'
import URL from '../../images/checkens.png'


export default function Meal({Title, Text}) {
    return (
        <div className={Style.Card}>
            <img src={URL} alt={URL} />
            <h3>{Title}</h3>
            <p>{Text}</p>
        </div>
    )
}
