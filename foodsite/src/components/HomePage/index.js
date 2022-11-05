import React from 'react';
import Style from "./style.module.css";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
function HomePage() {
  return (
    <>
      <div className={Style.HomeSection}>
        <Row className={Style.HomeMain}>
          <Col xs={6} >
            <h1>Order Healthy And Fresh Food Any Time</h1>
            <p>Italian food makes people think of big family dinners. So you may want to position your restaurant as a place to bring the whole family.</p>
            <div className={Style.homeSearch}>
              <Row>
                <Col xs={9} >
                <h3>Search Keywords</h3>
                <input type="text" value="Recipe Name Here!"/>
                </Col>
                <Col  xs={2}>
                <Button variant="warning">Warning</Button>
                </Col>
              </Row>
            </div>
          </Col>
          <Col xs={5} ></Col>
        </Row>
      </div>
    </>
  )
}

export default HomePage;