import React from 'react';
import Heading from '@tds/core-heading';
import UnorderedList from '@tds/core-unordered-list'
import FlexGrid from '@tds/core-flex-grid'
import {Link} from 'react-router-dom'
import HairlineDivider from '@tds/core-hairline-divider'
import './Home.css'


const Home = () => 
<React.Fragment>
 <HairlineDivider />
 <div className="home">
  <FlexGrid  xs={12} md={3}>
  <FlexGrid.Row >
  <div className="home-header"><Heading level="h1">Welcome to Device Catalogue Home Page</Heading></div>
  </FlexGrid.Row>

  <FlexGrid.Row>
    <UnorderedList >
    <div className="iphones">
      <UnorderedList.Item itemStyle="none">
      <Link to='/iphones' className="iphone-link">Iphones</Link>
      </UnorderedList.Item>
      </div>
    <div className="watches">
      <UnorderedList.Item itemStyle="none">
        <Link to='/watches' className='watch-link'>Watches</Link>
        </UnorderedList.Item>
    </div>
    </UnorderedList>
  </FlexGrid.Row>
</FlexGrid>
</div>

</React.Fragment>

export default Home;