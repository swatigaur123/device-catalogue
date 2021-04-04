import React from 'react';
import Heading from '@tds/core-heading';
import UnorderedList from '@tds/core-unordered-list'
import PriceLockup from '@tds/core-price-lockup'
import FlexGrid from '@tds/core-flex-grid'
import Card from '@tds/core-card'
import Box from '@tds/core-box'
import Text from '@tds/core-text'
import Image from '@tds/core-image'
import {Link} from 'react-router-dom'





const Nav = () => 
<nav className="headerNav" style= {navStyle}>
<Heading level="h3">Device Catalogue</Heading>
<UnorderedList>
  <UnorderedList.Item ><Link to='/iphones' className="iphoneLink">Iphones</Link></UnorderedList.Item>
  <UnorderedList.Item ><Link to='/watches' className='watchLink'>Watches</Link></UnorderedList.Item>
</UnorderedList>
</nav>

const navStyle = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  minHeight: "100px",
  background: "#D8D8D8",
  color: "white",

}


export default Nav;