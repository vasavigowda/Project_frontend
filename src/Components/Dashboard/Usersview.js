import React, { Component } from 'react';
import axios from 'axios'
import Nav from '../Nav/Nav';
import './Userview.css';


class Usersview extends Component {
  constructor(props) {
    super(props);
    // this.initialText ='hellogoodmorning';
      this.state = { 
      usersview: [],
      search:[]
      // text: this.initialText,
      // inputValue: "",
      };
     }
 
   componentDidMount(){
   axios.get('http://localhost:4090/Signin')
   .then(response => {
   this.setState({usersview: response.data });
    })
    .catch(function (error) {
     console.log(error);
       })
     }  
     
     onHandleChange = () => {
       debugger
      this.setState({search:this.state.usersview });
      }

     changeInput = (e) => {
       debugger
      let value = e.target.value;
      let usersview = document.getElementById("myText").innerText;
      let idx = usersview.indexOf(value);
     
      if(idx >= 0) {
        let newText = [usersview.substring(0, idx), <strong>{usersview.substring(idx, idx + value.length)}</strong>, usersview.substring(idx + value.length)];
        this.setState({inputValue: value, text: newText});
      } else {
        debugger
        this.setState({inputValue: value });
      }    
    }

    render() {
        return (
            <div className="usersviewpage"> 
              <Nav/>
               {this.state.usersview.map(name => {
          return( 
             <div className="row" >
                 <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
                  <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
              <p style={{width:"250px",color:"red"}}><p>{name.firstname}</p>
              {name.email}</p><br/>  
              </div>
              <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
            </div>      
            )
         }
       )}
        <p id="myText">{this.state.text}</p>
        <input onChange={this.changeInput} value={this.state.inputValue} />
            </div>
        );
    }
}
export default Usersview;