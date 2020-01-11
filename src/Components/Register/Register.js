import React, { Component } from 'react';
import { connect } from 'react-redux';
import BrowserHistory from '../Utils/BrowserHistory'
import {registerHandle} from '../../Action/RegisterAction';


class Register extends Component {
constructor(props) {
super(props);
this.state = {
firstname: '',
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
onHandleClicksCancel = (e) => {
BrowserHistory.push('/'); 
}


onHandleClick = (e) => {
e.preventDefault();
const payload = {
firstname: this.state.firstname,
email: this.state.email,
password: this.state.password
}
// signup(reqst).then(res => {
// if (res.data === "User Created Succesfully") {
// alert("UserCreated Successfully")
// BrowserHistory.push('/login')
// }

// })

if (this.state.firstname.length === 0 && this.state.email.length === 0 && this.state.password.length === 0 ) {
this.setState({
ferr: "Firstname is required", 
uerr: "Email is required",
perr: "Password is required"

})
}
else if (this.state.firstname.length === 0) {
this.setState({ ferr: "Firstname is required" })
}
else if (this.state.email.length === 0) {
this.setState({ uerr: "Username is required" })
}
else if (this.state.password.length === 0) {
this.setState({ perr: "Password is required" })
}
else if (!this.state.firstname.match(/^[A-Za-z]{5,15}$/)) {
this.setState({ ferr: "Please enter the valid fname" })
}
else if (!this.state.email.match(/^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]$/)) {
this.setState({ uerr: "Please enter the valid email" })
}
else if (!this.state.password.match(/^[@#][A-Za-z0-9]{9,11}$/)) {
this.setState({ perr: "Please enter the valid password" })
}
else {
BrowserHistory.push('/login')
}
this.props.registerHandle(payload);


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
          <button className="googleicon1"><a href="https://www.google.co.in/" class="fa fa-google"></a>Login in with google</button><br/><br/>
          <button className="socialicon1"><a href="http://facebook.com/jaketrent" class="fa fa-facebook"></a>Login in with facebook</button><br/><br/>
          <label className="frstname"><b>Display Name</b></label>
          <input type="text" name= "firstname" placeholder="display name" className=" frstnameinput" onChange={this.onHandleChange} /><br />
          <p  className="errorMsg " >{this.state.ferr}</p>
          <label className="email"><b>Email</b></label>
          <input type="text" placeholder="Email" name = "email" className="emailinput" onChange={this.onHandleChange} /><br />
          <p className="errorMsg " >{this.state.uerr}</p>
          <label className="password"><b>Password</b></label>
          <input type="password" placeholder="Password" name="password" className=" passwordinput" onChange={this.onHandleChange} /><br /><br />
          <p  className="errorMsg " >{this.state.perr}</p>
          <a href="" onClick={this.onHandleClicks}>you have already account</a>
          <p   className="errorMsg ">{this.state.phnerr}</p>
          <button onClick={this.onHandleClick} className="button"><b>Register</b></button>
          <button onClick={this.onHandleClicksCancel} className="buttoncancel">Cancel</button>
        </div>
      </div>
    </div>
    
  </div>




















/* <div className="register">
<div class="container">
<div class="row">
<div class="col-sm-4 col-lg-4 col-md-4 col-xs-4"></div>
<div class="col-sm-4 col-lg-4 col-md-4 col-xs-4 frm">
<h1>Signup</h1>
<div className="regcont">
<div><label ><b>First Name</b></label><br /></div>
<div><input type="text" name="firstname" className="one" onChange={this.onHandleChange} /><br /></div>
<div><p >{this.state.ferr}</p></div>
<div><label ><b>Email</b></label><br /></div>
<div> <input type="text" name="email" className="one" onChange={this.onHandleChange} /><br /></div>
<div> <p >{this.state.uerr}</p></div>
<div><label ><b>Password</b></label><br /></div>
<div> <input type="password" name="password" className="one" onChange={this.onHandleChange} /><br /><br /></div>
<div> <p >{this.state.perr}</p></div>
</div>
<a href="" onClick={this.onHandleClicks}>you have already account</a>
<p >{this.state.phnerr}</p>
<button onClick={this.onHandleClick} className="btn1"><b>Register</b></button><a href="" onClick={this.onHandleClicksCancel}>Cancel</a>
</div>
<div class="col-sm-4 col-lg-4 col-md-4 col-xs-4">
</div>
</div>
</div>
</div> */
);
}
}
const mapStateToProps=(state)=>{
const {firstname,email,password}=state.RegisterReducer
return {firstname,email,password }
}
export default connect(mapStateToProps,{registerHandle}) (Register);
