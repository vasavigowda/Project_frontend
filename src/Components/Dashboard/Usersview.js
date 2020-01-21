import React, { Component } from 'react';
import axios from 'axios'
import Nav from '../Nav/Nav';

class Usersview extends Component {
  constructor(props) {
    super(props);
      this.state = {
      usersview: []
      };
     }
   componentDidMount(){
   axios.get('http://localhost:4090/Signin')
   .then(response => {
   this.setState({ usersview: response.data });
    })
    .catch(function (error) {
     console.log(error);
       })
     }   
    render() {
        return (
            <div> 
              <Nav/>
               {this.state.usersview.map(name => {
          return( 
             <table border="5" >
                <tr>
              <td  style={{width:"250px",color:"red"}}>{name.firstname}<br/>{name.email}</td>
                
                </tr>
               
                 </table>
                  
            )
         }
       )}

            </div>
        );
    }
}





{/* <div  className="card_border">
             <img className="product_images" src={tomato}/>
        {this.state.data.map(name => {
        if (name.productName === "tomato") {
          return(
                <div>
                    <div className="product_fontclr">
                         <div ><td>PRODUCT NAME:{name.productName}</td></div>
                        <div><td>PRODUCT WEIGHT:{name.productWeight}</td></div>
                        <div ><td>AMOUNT:{name.Amount}</td></div>
                        <button className="Buying_button">Buy</button><hr></hr>
                    </div>
                 </div>

            )}
         }
       )}
       </div> */}






export default Usersview;