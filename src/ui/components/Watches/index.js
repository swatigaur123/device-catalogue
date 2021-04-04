import React, { Component }  from 'react';
import PriceLockup from '@tds/core-price-lockup'
import FlexGrid from '@tds/core-flex-grid'
import Card from '@tds/core-card'
import Box from '@tds/core-box'
import Text from '@tds/core-text'
import HairlineDivider from '@tds/core-hairline-divider'
import { FootnoteLink } from '@tds/core-terms-and-conditions'
import Strong from '@tds/core-strong'
import Paragraph from '@tds/core-paragraph'

export default class Watches extends Component {
  constructor(props) {
      super(props);
      this.state = {
          watchData: ''
      }
  }

  async receivedData() {
    try {
        const apiUrl = "http://localhost:8081/watches";
        const response= await fetch(apiUrl);
        const result= await response.json();
        console.log("result",result.data);
        let mainContent = result.data.map((item) => (        
             <FlexGrid.Col xs={12} md={3}>
                <Card fullHeight variant="defaultWithBorder"
                fullBleedImage={{
                    src: '../../../../public/images/watch.jpg',
                    alt: 'Img is not getting displayed',
                    position: 'top',
                }}>
                <Box between={3}>   
                    <FlexGrid >
                        <FlexGrid.Row >
                            <FlexGrid.Col >
                                <Paragraph>
                                    <Text size="medium"> <Strong>{item.brand}</Strong> </Text>
                                </Paragraph>
                                <Paragraph>
                                    <Text size="medium"> {item.name} </Text>
                                </Paragraph>
                                <Paragraph>
                                     <PriceLockup
                                        size="medium"
                                        price= {item.price}
                                        signDirection="left"
                                        />
                                </Paragraph>
                                <HairlineDivider />
                                <Paragraph> 
                                    <Text size="medium">TELUS Easy Payment and Bring-It-Back applied. 
                                        <FootnoteLink number={[3]} onClick={(number, ref) => {}} copy="en" />
                                        </Text>
                                </Paragraph>                 
                                <Paragraph>
                                    <Text size="medium">Taxes due upfront. </Text>
                                </Paragraph>
                                <Paragraph>
                                    <Text size="medium">Retail price: $1130 </Text>
                                </Paragraph>
                            </FlexGrid.Col>
                         </FlexGrid.Row>
                     </FlexGrid>             
                 </Box>
             </Card>
        </FlexGrid.Col>       
        ));
        this.setState(
        {
            watchData: mainContent,
            loading: false
        });
    }
    catch (err) {
        console.log(err);
    } 
}
componentDidMount() { 
    this.receivedData();
    console.log("watchData",this.state.watchData);
}
   

render() {
    return (<div> { this.state.loading  || !this.state.watchData 
         ? (<div> loading.. </div>)
         : (<div className="watch-list"> 
                <React.Fragment>
                     <FlexGrid>
                           <FlexGrid.Row>
                              {this.state.watchData }
                            </FlexGrid.Row>
                        </FlexGrid> 
                 </React.Fragment>
            </div>)}
            </div>);         
  
  }
}
