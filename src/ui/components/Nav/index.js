import React from 'react';
import Heading from '@tds/core-heading';
import UnorderedList from '@tds/core-unordered-list'
import PriceLockup from '@tds/core-price-lockup'
import FlexGrid from '@tds/core-flex-grid'
import Card from '@tds/core-card'
import Box from '@tds/core-box'
import Text from '@tds/core-text'
import Image from '@tds/core-image'
import iphone from '../../../../public/images/iphone.jpg'




// const Nav = () => 
// <nav style= {navStyle}>
// <h3>Logo</h3>
// <ul style= {navLinks}>
//   <li>Iphones</li>
//   <li>Watches</li>
// </ul>
// </nav>

// const navStyle = {
//   display: "flex",
//   backgroundColor: "red",
//   justifyContent: "space-around",
//   alignItems: "center",
//   minHeight: "100px",
//   background: "grey",
//   color: "white",

// }
// const navLinks = {
  
// }
// export default Nav;

const Nav = () => 
<Nav>
<Heading level="h1">Device Catalogue</Heading>
<FlexGrid>
  <FlexGrid.Row>
    <FlexGrid.Col xs={12} md={9} xl={5}>
      <Card variant="defaultWithBorder"
       fullBleedImage={{
        src: {iphone},
        width: 398,
        height: 147,
        alt: 'salal branch image',
        position: 'bottom',
      }}>
        <Box between={3}>
          <Heading level="h3">Internet 15 - Special Offer</Heading>
          <FlexGrid>
            <FlexGrid.Row verticalAlign="bottom" horizontalAlign="start">
              <FlexGrid.Col xs={12} md={5}>
                <PriceLockup
                  topText="Starting at"
                  size="medium"
                  price="25"
                  signDirection="left"
                  rateText="/month"
                  a11yText="25 dollars per month"
                />
              </FlexGrid.Col>
              <FlexGrid.Col xs={12} md={5}>
                <PriceLockup
                  size="small"
                  strikethrough
                  a11yText="was 50 dollars per month"
                  price="50"
                  signDirection="left"
                  rateText="/month"
                />
              </FlexGrid.Col>
            </FlexGrid.Row>
          </FlexGrid>
          <Text size="medium">Good for basic browsing, and posting to social media.</Text>
          {/* <ChevronLink href="#">Learn more</ChevronLink> */}
        </Box>
      </Card>
    </FlexGrid.Col>
    <FlexGrid.Col xs={12} md={9} xl={5}>
      <Card variant="defaultWithBorder">
        <Box between={3}>
          <Heading level="h3">Internet 15 - Special Offer</Heading>
          <FlexGrid>
            <FlexGrid.Row verticalAlign="bottom" horizontalAlign="start">
              <FlexGrid.Col xs={12} md={5}>
                <PriceLockup
                  topText="Starting at"
                  size="medium"
                  price="25"
                  signDirection="left"
                  rateText="/month"
                  a11yText="25 dollars per month"
                />
              </FlexGrid.Col>
              <FlexGrid.Col xs={12} md={5}>
                <PriceLockup
                  size="small"
                  strikethrough
                  a11yText="was 50 dollars per month"
                  price="50"
                  signDirection="left"
                  rateText="/month"
                />
              </FlexGrid.Col>
            </FlexGrid.Row>
          </FlexGrid>
          <Text size="medium">Good for basic browsing, and posting to social media.</Text>
          {/* <ChevronLink href="#">Learn more</ChevronLink> */}
        </Box>
      </Card>
    </FlexGrid.Col>
    <FlexGrid.Col xs={12} md={9} xl={5}>
      <Card variant="defaultWithBorder">
        <Box between={3}>
          <Heading level="h3">Internet 15 - Special Offer</Heading>
          <FlexGrid>
            <FlexGrid.Row verticalAlign="bottom" horizontalAlign="start">
              <FlexGrid.Col xs={12} md={5}>
                <PriceLockup
                  topText="Starting at"
                  size="medium"
                  price="25"
                  signDirection="left"
                  rateText="/month"
                  a11yText="25 dollars per month"
                />
              </FlexGrid.Col>
              <FlexGrid.Col xs={12} md={5}>
                <PriceLockup
                  size="small"
                  strikethrough
                  a11yText="was 50 dollars per month"
                  price="50"
                  signDirection="left"
                  rateText="/month"
                />
              </FlexGrid.Col>
            </FlexGrid.Row>
          </FlexGrid>
          <Text size="medium">Good for basic browsing, and posting to social media.</Text>
          {/* <ChevronLink href="#">Learn more</ChevronLink> */}
        </Box>
      </Card>
    </FlexGrid.Col>
  </FlexGrid.Row>
</FlexGrid>
</Nav>

export default Nav;