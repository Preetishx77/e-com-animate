import './App.css';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
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
import { motion} from 'framer-motion';

function App() {

  const [img,setImg] = useState(female);

 

  
  return (
    <>
    <motion.div 
>
    <div style={{margin:'0',padding:'0'}}>

   
<Navbar collapseOnSelect expand="lg" bg="light" variant="light">


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
<Container>
<Row>
 <Col>
 <Row className='mt-5'>
<Col lg={10}>
<h1 style={{fontWeight:'bold',fontSize:'3.5rem'}}>TIED GREEN  V NECK SHIRT </h1>
</Col>
<Col>
<img src={arrow} alt="arrow" style={{width:'74px',transform: 'rotate(-180deg)'}} />
</Col>

 </Row>
 <Row className='mt-2'>
<h1 style={{fontWeight:'normal'}}>$67 </h1>
 </Row>
 <Row className='mt-2'>
   <Col lg={10}>
   <p style={{fontSize:'larger'}}> V neck shirt with lapel collar. Long sleeves with cuffs. Front tie at hem. Front button at closure </p>
   </Col>
   <Col lg={2}>
   <div class="circle2">ADD</div>
     </Col>

 </Row>
 <Row className='mt-2'>
   <h6 style={{fontWeight:'bold'}}>SELECT SIZE</h6>
 </Row>
 <Row className='mt-2'>
   <Col lg={1}>
   <div class="circle"><p style={{fontSize:'60%'}}>S</p></div>
   </Col>
   <Col lg={1}>
   <div class="circle"><p style={{fontSize:'60%'}}>M</p></div>
   </Col>
   <Col lg={1}>
   <div class="circle"><p style={{fontSize:'60%'}}>L</p></div>
   </Col>
   <Col lg={2}>
   <h6 style={{fontWeight:'bold'}} className='text-center py-2 '>SIZE GUIDE</h6>
   </Col>
 </Row>
 <Row className='mt-4'>
   <Row>
   <Col>
   <img src={female} alt="female" onClick={() => setImg(female)} className='show'  style={{width:'150px'}} />
   </Col>
   <Col>
   <img src={photo2} alt="female" onClick={() => setImg(photo2)} className='show' style={{width:'150px'}} />
   </Col>
   <Col>
   <img src={photo3} alt="female" onClick={() => setImg(photo3)} className='show' style={{width:'150px'}} />
   </Col>
   <Col>
   </Col>
   </Row>


 </Row>
 
 </Col>
 <Col>
 <Player
       autoplay
       loop
       src={lottie}
       style={{position:'absolute',height:'105vh'}}
    
       className="resultConfetti"
     />
     <img src={bg} alt='bg' style={{position:'absolute',height:'90vh',zIndex:'-1',marginLeft:'7vw',opacity:'30%'}} />

 <img src={`${img}`} alt="female" style={{float:'right',marginTop:'5vh',height:'90%',transition: ''}} className='slide'  />


    

 <img src={arrow_2} alt="arrow" style={{width:'182px',position:'absolute',marginLeft:'36vw',marginTop:'77vh'}} />

 </Col>

</Row>
</Container>
   
     

</div>
</motion.div>
    </>
  );
}

export default App;
