import React from 'react';
import Style from "./style.module.css";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import searchIcon from '../../images/search.png'
import SubMenu from '../SubMenue/index'

function HomePage() {
  return (
    <>
      <div className={Style.HomeSection}>
        <Row className={Style.HomeMain}>
          <Col xs={6} >
            <h1>Order Healthy And Fresh Food Any Time</h1>
            <p>Italian food makes people think of big family dinners. So you may want to position your restaurant as a place to bring the whole family.</p>
            <div className={Style.homeSearch}>
              <Row className={Style.searchRow}>
                <Col xs={9} >
                <h5>Search Keywords</h5>
                <input type="text" placeholder="Recipe Name Here!"/>
                </Col>
                <Col  xs={2}>
                <Button className={Style.searchButton} variant="warning"><img src={searchIcon}/></Button>
                </Col>
              </Row>
            </div>
            <h3>Popular Restaurant</h3>
          </Col>
          <Col xs={5} ></Col>
        </Row>
      </div>

      <hr />

      <br />

      <SubMenu />
    </>
  )
}

export default HomePage;