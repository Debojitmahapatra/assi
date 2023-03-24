// import React from 'react'
import "./Nav.css"
// function Nav() {
//   return (
//     <div>
//       <ul className='nav-list'>
//         <li className='nav-ele'>LOG IN</li>
//         <li className='nav-ele'>RESERVATION</li>
//         <li className='nav-ele'>PRIVATE PARTIES</li>
//         <li className='nav-ele1'>EVENTS</li>
//         <li className='nav-ele1'>CONTACT US</li>
//         <li className='nav-ele1'>ABOUT US</li>
//       </ul>
//     </div>
//   )
// }

// export default Nav
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function ColorSchemesExample() {
  return (
    <>
    
      <Navbar bg="primary" variant="dark">
        <Container>
         
          <Nav className="me-auto">
            <Nav.Link href="/logIn" className='navLeft'>LOG IN</Nav.Link>
            <Nav.Link href="#reservation" className='navLeft'>RESERVATION</Nav.Link>
            <Nav.Link href="#parties" className='navLeft'>PRIVATE PARTIES</Nav.Link>
            <Nav.Link href="#parties" className='navLeft'>EVENTS</Nav.Link>
            <Nav.Link href="#parties"  className='navLeft'>CONTACT US</Nav.Link>
            <Nav.Link href="#parties"  className='navLeft'>ABOUT US</Nav.Link>

          </Nav>
        </Container>
      </Navbar>

     
    </>
  );
}

export default ColorSchemesExample;