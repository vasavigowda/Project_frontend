import React, { Component } from 'react';
import axios from 'axios'
import Nav from '../Nav/Nav';


class Usersview extends Component {

  constructor(props) {
    super(props);
    this.initialText = 'hjlijnilj';
      this.state = { 
      usersview: [],
      text: this. initialText,
      inputValue: "",
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

     changeInput = (e) => {
       debugger
      let value = e.target.value;
      let txt = document.getElementById("myText").innerText;
      let idx = txt.indexOf(value);
     
      if(idx >= 0) {
        let newText = [txt.substring(0, idx), <strong>{txt.substring(idx, idx + value.length)}</strong>, txt.substring(idx + value.length)];
        this.setState({inputValue: value, text: newText});
      } else {
        debugger
        this.setState({inputValue: value });
      }    
    }
    
  //  NumberList(props) {  
  //     const numbers = props.numbers;  
  //     const listItems = numbers.map((number) =>  
  //       <ListItem key={number.toString()}  
  //                 value={number} />  
  //     );      

    render() {
        return (
            <div className="usersviewpage"> 
              <Nav/>
               {this.state.usersview.map(name => {
          return( 
             <div >
              < p   style={{width:"250px",color:"red"}}><p>{name.firstname}</p>{name.email}</p>  
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