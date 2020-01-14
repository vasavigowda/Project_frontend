import React, { Component } from 'react';
import { connect } from 'react-redux';
import BrowserHistory from '../Utils/BrowserHistory'
import {registerHandle} from '../../Action/LoginAction';
import './Login.css';


class Login extends Component {
constructor(props) {
super(props);
this.state = {
email: '',
password: '',
uerr: '',
perr: ''
};
}
onHandleChange = (event) => {

this.setState({ [event.target.name]: event.target.value });

}
onHandleClicks = (e) => {

BrowserHistory.push('/reg'); 

}
onHandleClicksCancel = (e) => {

BrowserHistory.push('/LoginForm'); 

}


onHandleClick = (e) => {
e.preventDefault();
const payload = {
email: this.state.email,
password: this.state.password
}
if (this.state.email.length === 0 && this.state.password.length === 0 ) {
this.setState({
uerr: "Email is required",
perr: "Password is required"
})
}
else if (this.state.email.length === 0) {
this.setState({ uerr: "Username is required" })
}
else if (this.state.password.length === 0) {
this.setState({ perr: "Password is required" })
}
else if (!this.state.email.match(/^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]$/)) {
this.setState({ uerr: "Please enter the valid email" })
}
else if (!this.state.password.match(/^[@#][A-Za-z0-9]{9,11}$/)) {
this.setState({ perr: "Please enter the valid password" })
}
else {
    BrowserHistory.push('/dashboard')
    }
this.props.registerHandle(payload);
}


render() {
return (

 <div id="login">
<div id="register1" className="login">
<button className="googleicon"><a href="https://www.google.co.in/" class="fa fa-google"></a>Login in with google</button><br/><br/>
 <button className="socialicon"><a href="http://facebook.com/jaketrent" class="fa fa-facebook"></a>Login in with facebook</button><br/><br/>
<form method="post">
<label ><b className="emailinp">Email</b></label><br />
 <input type="text" name="email" className="one" onChange={this.onHandleChange} /><br />
<div className="errorMsg"> {this.state.uerr}</div>
<label ><b className="emailinp">Password</b></label><br />
<div> <input type="password" name="password" className="one" onChange={this.onHandleChange} /><br /><br /></div>
<div className="errorMsg"> {this.state.perr}</div>

<a onClick={this.onHandleClicks} className="text">you have already account</a>
<p >{this.state.phnerr}</p>
<button onClick={this.onHandleClick} className="button11"><b>Login</b></button><a href="" onClick={this.onHandleClicksCancel}>Cancel</a>
</form>
</div>
</div>
);
}
}
const mapStateToProps=(state)=>{
const {firstname,email,password}=state.Loginreducer
return {firstname,email,password}
}
export default connect(mapStateToProps,{registerHandle}) (Login);
