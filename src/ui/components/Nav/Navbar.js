import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Heading from '@tds/core-heading';
import {Link} from 'react-router-dom';
import './NavBar.css';

const Navs = () => {
    return (
    <Navbar className="nav-bar" bg="primary" variant="dark">
    <Heading level="h2">Device Catalogue</Heading>
    <Heading level="h2"><Link to='/'>Home</Link></Heading>
    {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
    </Nav>
    </Navbar.Collapse> */}
</Navbar>
    //   <nav className="navbar">
    //     <h1>Device Catalogue</h1>
    //     <div className="links">
    //       <a href="/">Home</a>
    //     </div>
    //   </nav>
    );
  }

//   <style lang ="css">
//       .navBar {
//           background-color: red;
//       }
//   </style>
  export default Navs;