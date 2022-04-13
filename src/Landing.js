import React from 'react'
import { Col, Container, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';
import menu from './assets/menu.png';
import img2 from './assets/man-dancing-.png';
import shoppingcart from './assets/shopping-cart.png';
import user from './assets/user.png';
import like from './assets/like.png';
import female from './assets/female.png'
import { useState } from 'react';
import photo2 from './assets/photo2.png'
import photo3 from './assets/photo3.png'
import arrow from  './assets/newarrow.jpg'
import arrow_2 from './assets/arrow_2.jpg'
import lottie from './assets/lottie.json'
import { Player } from "@lottiefiles/react-lottie-player";
import bg from './assets/bg.jpeg';
import twitter from './assets/twitter.png'
import facebook from './assets/facebook (1).png'
import instagram from './assets/instagram.png'
import bag from './assets/bag.png'
import hm from './assets/H&M.png'
import uparrow from './assets/up-arrow.png'

function Landing() {
  return (
    <>
    <div style={{margin:'0',padding:'0',display:'flex'}}>
        <div style={{margin:'0',padding:'0'}}>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" style={{height:'80px'}}>
  
  
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features" style={{marginLeft:'20px'}}>
      <img src={menu} alt="menu" />
      </Nav.Link
      >
      <Nav.Link href="#pricing"><img src={img2} alt="alt" /></Nav.Link>
      <Nav.Link href="#pricing"><h5>NEW</h5></Nav.Link>
      <Nav.Link href="#pricing"><h5>SALE</h5></Nav.Link>
      <Nav.Link href="#pricing0"><h5>MEN</h5></Nav.Link>

      <Nav.Link href="#pricing"><h5>WOMEN</h5></Nav.Link>
    </Nav>
    <Nav className="me-auto">
      <Nav.Link>
        <img src={like} alt="like" />

      </Nav.Link>
      <Nav.Link>
        <h5>SEARCH</h5>
      </Nav.Link>
    </Nav>
    <Nav className=''>
      <Nav.Link href="#deets"><img src={shoppingcart} alt="shopping-cart" /></Nav.Link>
      <Nav.Link eventKey={2} href="" style={{marginRight:'40px'}}>
        <img src={user} style={{width:'25px',paddingTop:'3px'}} alt="user"/>
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>

</Navbar>
<img src={bg} alt='bg' style={{position:'absolute',height:'90vh',zIndex:'-1',marginLeft:'32vw',opacity:'30%'}} />
<img src={female} alt='bg' style={{position:'absolute',height:'90vh',zIndex:'1',marginLeft:'40vw'}} />
<Container style={{marginTop:'15vh',paddingLeft:'7vw'}}>
<img src={arrow} alt="arrow" style={{width:'74px',transform: 'rotate(-80deg)'}} />
<Row >
    <Col >
  
        
        <h1 style={{fontWeight:'bold',fontSize:'2.5rem'}}>TIED GREEN V-NECK SHIRT </h1>
     
       
      
       
    
    <div class="circle3" style={{marginLeft:'26vw',position:'absolute',marginTop:'-22vh'}}>+</div>
  
    </Col>
    <Col style={{paddingLeft:'45vw',zIndex:'5'}}>
    <Row style={{backgroundColor:'white',borderRadius:'5px',marginBottom:'20px',marginTop:'-20px',backgroundColor:'#fcfffd',width:'250px'}}>
        <Col>
        <Row>
            <p style={{marginTop:'5px',fontWeight:'normal'}}>Half Dome Podover
                </p>
                </Row>
                <Row>
<h6>$87</h6>
                </Row>
                
                </Col>
                <Col>
                <img src={bag} alt="bag" style={{width:'100px'}} />
                </Col>

    </Row>
    <Row style={{backgroundColor:'white',borderRadius:'10px',backgroundColor:'#fcfffd',width:'250px'}}>
        <Col>
        <Row>
        <p style={{marginTop:'5px',fontWeight:'normal'}}>Half Dome Podover
                </p>
                </Row>
                <Row>
<h6>$87</h6>
                </Row>
                
                </Col>
                <Col>
                <img src={bag} alt="bag" style={{width:'100px'}} />
                </Col>

    </Row>
    
    </Col>
</Row>
<Row className='mt-5 pt-5'>
    <Col>
    <Row>
    <Col lg={1}>
    <img src={facebook} alt="facebook" style={{width:'32px'}} />
    </Col>
    <Col lg={1}>
    <img src={twitter} alt="twitter" style={{width:'32px'}} />
    </Col>
    <Col lg={1}>
    <img src={instagram} alt="instagram" style={{width:'32px'}}/>
    </Col>
    </Row>
 
    </Col>
    <Col></Col>
  
</Row>
</Container>
<img src={arrow_2} alt="arrow" style={{width:'182px',position:'absolute',marginLeft:'69vw',marginTop:'-2vh'}} />
        </div>
        <div style={{margin:'0',padding:'0',backgroundColor:'#fbffe0',height:'100vh'}}>
<Navbar>
    <Nav className="me-auto py-2">
    <Nav.Link href="#deets" className='pl-3' style={{marginLeft:'25px',marginRight:'15px'}}><img src={shoppingcart} alt="shopping-cart" /></Nav.Link>
      <Nav.Link eventKey={2} href="" style={{marginRight:'40px'}}>
        <img src={user} style={{width:'25px',paddingTop:'3px'}} alt="user"/>
      </Nav.Link>
    </Nav>
</Navbar>
<div >
  <img src={uparrow} alt="up-arrow" style={{width:'32px',marginTop:'42vh',position:'absolute',transform:'rotate(90deg)',marginLeft:'-1vw',zIndex:'5'}} />
    <img src={hm} alt="hm" className='img-fluid' style={{marginTop:'10vh',width:'255px'}} />
</ div>
        </div>
    </div>
     

</>
  )
}

export default Landing