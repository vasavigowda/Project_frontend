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
             <div >
              < p style={{width:"250px",color:"red"}}>{name.firstname}<br/>{name.email}</p>
                
            </div>
                  
            )
         }
       )}

            </div>
        );
    }
}
export default Usersview;