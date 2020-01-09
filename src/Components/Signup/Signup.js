import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Signup.css';
import BrowserHistory from '../Utils/BrowserHistory'
// import { handle } from '../Action/Registeraction'
// import { success } from '../'
import { signup } from '../UserFunction';
import axios from 'axios'


class Signup extends Component {
constructor(props) {
super(props);
this.state = {
Firstname: '',
email: '',
password: '',
ferr: '',
uerr: '',
perr: ''
};
}
onHandleChange = (event) => {
this.setState({ [event.target.name]: event.target.value });
}
onHandleClicks = (e) => {
BrowserHistory.push('/login'); 
}
onHandleClicksCancel = (e) => {
BrowserHistory.push('/'); 
}
onHandleClick = (e) => {
e.preventDefault();
const reqst = {
Firstname: this.state.Firstname,
email: this.state.email,
password: this.state.password
}
const url = "http://localhost:4000/"

axios.post(`http://localhost:4000/`, { reqst })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })

debugger
// if (this.state.Firstname.length === 0  && this.state.email.length === 0 && this.state.password.length === 0 ) {
// this.setState({
// ferr: "Firstname is required", 
// uerr: "Email is required",
// perr: "Password is required"
// })
// }
// else if (this.state.Firstname.length === 0) {
// this.setState({ ferr: "Firstname is required" })
// }
// else if (this.state.email.length === 0) {
// this.setState({ uerr: "Username is required" })
// }
// else if (this.state.password.length === 0) {
// this.setState({ perr: "Password is required" })
// }
// else if (!this.state.Firstname.match(/^[A-Za-z]{5,15}$/)) {
// this.setState({ ferr: "Please enter the valid fname" })
// }
// else if (!this.state.email.match(/^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]$/)) {
// this.setState({ uerr: "Please enter the valid email" })
// }
// else if (!this.state.password.match(/^[@#][A-Za-z0-9]{9,11}$/)) {
// this.setState({ perr: "Please enter the valid password" })
// }
// else {
// BrowserHistory.push('/login')
// // this.Loginaction.props.success("Register Successfully")
// }
debugger
}


render() {
return (
  <div id="main-registration-container"> 
    
    <div class="row">
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
         <h1 className="regcontainer"> Attract the world’s best tech talent</h1>
         <p>Get unstuck — ask a question Unlock new privileges like <br/>voting and 
             commentingSave your favorite tags,<br/> filters, and jobsEarn reputation and badges</p>
      </div>
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div id="register">
          <button className="googleicon"><a href="https://www.google.co.in/" class="fa fa-google"></a>Login in with google</button><br/><br/>
          <button className="socialicon"><a href="http://facebook.com/jaketrent" class="fa fa-facebook"></a>Login in with facebook</button><br/><br/>
          <label className="frstname"><b>Display Name</b></label>
          <input type="text" placeholder="display name" className="errorMsg frstnameinput" onChange={this.onHandleChange} /><br />
          <p >{this.state.ferr}</p>
          <label className="email"><b>Email</b></label>
          <input type="text" placeholder="Email" className="errorMsg emailinput" onChange={this.onHandleChange} /><br />
          <p >{this.state.uerr}</p>
          <label className="password"><b>Password</b></label>
          <input type="password" placeholder="Password" className="errorMsg passwordinput" onChange={this.onHandleChange} /><br /><br />
          <p >{this.state.perr}</p>
          <a href="" onClick={this.onHandleClicks}>you have already account</a>
          <p >{this.state.phnerr}</p>
          <button onClick={this.onHandleClick} className="button"><b>Register</b></button><a href="" onClick={this.onHandleClicksCancel}>Cancel</a>
        </div>
      </div>
    </div>
  </div>

);
}
}
// const mapStoreToProps = (state) => {
// const { message } = state.Registerreducer;


// return { message };

export default Signup;