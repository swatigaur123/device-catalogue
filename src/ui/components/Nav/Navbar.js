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
    </Navbar>  
    );
  }


  export default Navs;