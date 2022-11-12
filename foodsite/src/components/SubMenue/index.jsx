import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Style from './style.module.css'
import URL from '../../images/checkens.png'
import MainTitle from '../MainTitle'
import Meal from './Meal'

export default function index() {

  const data = [
    {"Title":"Broast", "Text":"4 Restaurants Products"},
    {"Title":"Pizza", "Text":"14 Restaurants Products"},
    {"Title":"Chicken", "Text":"5 Restaurants Products"},
    {"Title":"Burgers", "Text":"19 Restaurants Products"},
    {"Title":"Sandwiches", "Text":"6 Restaurants Products"},
    {"Title":"Shakes", "Text":"22 Restaurants Products"},
    {"Title":"Desserts", "Text":"15 Restaurants Products"},
  ]

  return (
    <div className={Style.MainContainer}>
        <MainTitle Title="TOP FOODS" Text="Our Categories" />
        <br />
            <Row>
                <div className={Style.justify}>
                   {data.map(item => <Meal Title={item.Title} Text={item.Text} />)}
                </div>
            </Row>

    </div>
  )
}
