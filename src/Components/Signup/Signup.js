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
<div className="register">
<div class="container">
<div class="row">
<div class="col-sm-4 col-lg-4 col-md-4 col-xs-4"></div>
<div class="col-sm-4 col-lg-4 col-md-4 col-xs-4 frm">
<h1>Signup</h1>

<label><b>First Name</b></label><br />
<input type="text" name="Firstname" className="one" onChange={this.onHandleChange} /><br />
<p >{this.state.ferr}</p>


<label ><b>Email</b></label><br />
<input type="text" name="email" className="one" onChange={this.onHandleChange} /><br />
<p >{this.state.uerr}</p>
<label ><b>Password</b></label><br />
<input type="password" name="password" className="one" onChange={this.onHandleChange} /><br /><br />
<p >{this.state.perr}</p>

<a href="" onClick={this.onHandleClicks}>you have already account</a>
<p >{this.state.phnerr}</p>
<button onClick={this.onHandleClick} className="btn1"><b>Register</b></button><a href="" onClick={this.onHandleClicksCancel}>Cancel</a>
</div>
<div class="col-sm-4 col-lg-4 col-md-4 col-xs-4">
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