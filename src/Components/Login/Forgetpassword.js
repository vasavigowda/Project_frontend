import React, { Component } from 'react';
import axios from 'axios';
import './Forgetpassword.css';
import BrowserHistory from '../Utils/BrowserHistory';

class Forgetpassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
          _id:'',
          password:''
           }
        }

        handlechange=(e)=>{
          debugger
          this.setState({password:e.target.value})
        }
    changepassw = () => {
      debugger
      const payload = {
        email: sessionStorage.getItem('change'),
        password: this.state.password
        }
        console.log(payload)
      
        axios.put(`http://localhost:4090/reset`,payload)
          .then(console.log('update'))
          .catch(err => console.log(err))
        window.location.reload();
        BrowserHistory.push('/forgetmsg')
      }
     
    
    render() {

        return (
            <div className="frgtpassw">
                <h6 className="passw">Enter new Password</h6><br/>
                <input type="text" onChange={this.handlechange} placeholder="enter new password"></input><br/><br/>
            <button onClick={this.changepassw} name="password" className="chngbtn">change password</button>
            </div>
        )
    }
  }
export default Forgetpassword;


