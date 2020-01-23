import React, { Component } from 'react';
import { connect } from 'react-redux';
import {registerHandle} from '../../Action/Confirmaction';

class Confirmemail extends Component {
  constructor(props) {
   super(props);
      this.state = {
        email: '',
        uerr: '',
        usersview: []
        };
   }

   onHandleChange = (event) => {

    this.setState({ [event.target.name]: event.target.value });
    
    }

   onHandleClick = (e) => {
    e.preventDefault();
    const payload = {
    email: this.state.email
    }
    if (this.state.email.length === 0  ) {
    this.setState({
    uerr: "Email is required"
    })
    }
    else if (this.state.email.length === 0) {
    this.setState({ uerr: "mail is required" })
    }
    else if (!this.state.email.match(/^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]$/)) {
    this.setState({ uerr: "Please enter the valid email" })
    }
    this.props.registerHandle(payload);
    }
   
 render() {
  const email = this.props.email
      return (
        <div>  
        <label ><b className="emailinp">Email</b></label><br />
        <input type="text" defaultValue={email} className="one" onChange={this.onHandleChange} /><br />
        <div className="errorMsg"> {this.state.uerr}</div>
        <button onClick={this.onHandleClick} className="button11"><b>Confirm</b></button>
              
        </div>
        );
    }
}

const mapStateToProps=(state)=>{
  const {email}=state.Confirmreducer
  return {email}
  }
  export default connect(mapStateToProps,{registerHandle}) (Confirmemail);