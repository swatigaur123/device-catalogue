// const getPhone= function() {
//   const iphoneUrl = "http://localhost:8081/iphones";
//   fetch(iphoneUrl, {
//       'method' :'GET'
//   })
//   .then(response => response.json())
//   .then(result =>  console.log(result.data))
//   .catch(error => console.log(error));

//   const watchURL = "http://localhost:8081/watches";
//   fetch(watchURL, {
//       'method' :'GET'
//   })
//   .then(response => response.json())
//   .then(result =>  console.log(result.data))
//   .catch(error => console.log(error));
// }

// getPhone();
// console.log("first");
import React from "react";

export default class FetchIphoneData extends React.Component {
    
    state = {
        loading: true,
        iphone: null,
        
    };
    async componentDidMount() {
      const apiUrl = "http://localhost:8081/iphones";
      const response= await fetch(url);
      const result= await response.json();
      this.setState({
          iphone: result.data,
          loading: false
      });
    }
       
    render() {
      return (<div>
          {this.state.loading  || !this.state.iphone ? 
          (<div> loading.. </div>)
          : (<div>
             <div> {this.state.iphone.name} </div>
         </div>
         )}
      </div>
      );
    }
  }

