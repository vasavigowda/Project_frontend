import React, { Component } from 'react';
import './Signin.css';
import BrowserHistory from "../Utils/BrowserHistory";

const initialState = {
  name: "",
  password: "",
  nameError: "",
  passwordError: ""
};
export default class Signin extends React.Component {
  state = initialState;

  handleChange = event => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value
    });
  };

  validate = () => {
    let nameError = "";
    let passwordError = "";
    if (this.state.name.length === 0  &&  this.state.password.length === 0 ) {
      this.setState({
        nameError: "Firstname is required", 
        passwordError: "Password is required"
      })
      }
      else if (this.state.name.length === 0) {
      this.setState({ nameError: "Firstname is required" })
      }
      
      else if (this.state.password.length === 0) {
      this.setState({ passwordError: "Password is required" })
      }
      else if (!this.state.name.match(/^[A-Za-z]{5,15}$/)) {
      this.setState({ nameError: "Please enter the valid fname" })
      }
      else if (!this.state.password.match(/^[@#][A-Za-z0-9]{9,11}$/)) {
      this.setState({  passwordError: "Please enter the valid password" })
      }

      else{ BrowserHistory.push("/signup");
       return true;
    }
  };
 

  handleSubmit = event => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
    this.setState(initialState);
    }
  };
  onHandleClick(){
    BrowserHistory.push("/Register");
    }
    
  render() {
    return (
      <div>
       <h1>Login </h1>
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>UserName</label>
          <input name="name" placeholder="name" value={this.state.name} onChange={this.handleChange} id="user"/>
          <div className="error" > {this.state.nameError}</div><br></br>
        </div>
        <div>
        <label>Password</label>
          <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.handleChange} id="password"/>
          <div className="error">{this.state.passwordError}</div><br></br>
        </div>
       <div><button type="submit" id="btn" onClick={this.validate}>Login</button></div> 
      </form>
      <div ><button onClick={this.onHandleClick} id="button">Register</button></div>
      </div>
    );
  }
}