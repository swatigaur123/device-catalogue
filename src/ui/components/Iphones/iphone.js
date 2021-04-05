import React, { Component }  from 'react';
import Heading from '@tds/core-heading';
import PriceLockup from '@tds/core-price-lockup'
import FlexGrid from '@tds/core-flex-grid'
import Card from '@tds/core-card'
import Box from '@tds/core-box'
import Text from '@tds/core-text'
import HairlineDivider from '@tds/core-hairline-divider'
import { FootnoteLink } from '@tds/core-terms-and-conditions'
import Strong from '@tds/core-strong'
import Paragraph from '@tds/core-paragraph'
import Spinner from '@tds/core-spinner'
import DimpleDivider from '@tds/core-dimple-divider'
import Image from '@tds/core-image'


export default class Iphones extends Component {
    constructor(props) {
        super(props);
        this.state = {
            iphoneData: '',
            loading: true,
        
        }
    }

   async receivedData() {
        try {
            const apiUrl = "http://localhost:8081/iphones";
            const response= await fetch(apiUrl);
            const result= await response.json();
            console.log("result",result.data);
            let mainContent = result.data.map((item) => (     
                 <FlexGrid.Col>
                    <div className="iphone-card">
                    <Box inset={3}> 
                    <Card fullHeight variant="defaultWithBorder">
                    <Box between={3}>
                    <Image
                        src='../../../../public/images/iphone.jpg'
                        width={200}
                        height={200}
                       alt="Resoure not found"></Image>
                        <FlexGrid >
                            <FlexGrid.Row >
                                <FlexGrid.Col >
                                    <Paragraph>
                                        <Text size="medium"> <Strong>{item.brand}</Strong> </Text>
                                    </Paragraph>
                                    <Box between={3}>
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
                                    </Box>                
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
                 </Box>  
                 </div> 
            </FlexGrid.Col>    
            ));
            this.setState(
            {
                iphoneData: mainContent,
                loading: false
            });
        }
        catch (err) {
            console.log(err);  
         
            this.setState(
                {
                    iphoneData: "500 Internal server error "+err,
                    loading: false
                });
        } 
    }
    componentDidMount() { 
        this.receivedData();
        console.log("iphoneData",this.state.iphoneData);
    }
       
    
    render() {
        return (<div> <DimpleDivider /> { this.state.loading  || !this.state.iphoneData 
             ? (<div> Fetching the data from the server.loading.. </div>)
             : (<div className="iphone-list"> 
                    <React.Fragment>
                         <FlexGrid>
                               <FlexGrid.Row >
                                  {this.state.iphoneData }
                                </FlexGrid.Row>
                            </FlexGrid> 
                     </React.Fragment>
                </div>)}
                </div>);         
      
    }
}
