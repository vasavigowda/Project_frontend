import React from 'react';
import { SocialIcon } from 'react-social-icons';
import './Login.css';
import Nav from '../Nav/Nav';
import BrowserHistory from '../Utils/BrowserHistory';
import axios from 'axios'


class Login extends React.Component {
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
    BrowserHistory.push('/login'); 
    }
    onHandleClicksCancel = (e) => {
    BrowserHistory.push('/'); 
    }
    login = (e) => {
    e.preventDefault();
    const reqst = {
    email: this.state.email,
    password: this.state.password
    }
    
    
    if ( this.state.email.length === 0 && this.state.password.length === 0 ) {
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
    // BrowserHistory.push('/login')
    // this.Loginaction.props.success("Register Successfully")
    }
    const url = "http://localhost:4000/Signin"
    return axios({
      method: 'POST',
      url,
      data: reqst
    }).then(async (res) => {

      BrowserHistory.push('/'); 
      console.log(res);
    })
    }
  render() {
    return (
    <div id="login">
     
      <div id="register1" className="login">
     
        <button className="googleicon"><a href="https://www.google.co.in/" class="fa fa-google"></a>Login in with google</button><br/><br/>
        <button className="socialicon"><a href="http://facebook.com/jaketrent" class="fa fa-facebook"></a>Login in with facebook</button><br/><br/>
        <form method="post"  name="submituserLoginForm"  onSubmit= {this.submituserLoginForm} >
        <label ><b className="emailinp">Email:</b></label>
        <input type="text" name = "email" value={this.state.email} onChange={this.onHandleChange} />
        <div className="errorMsg">{this.state.uerr} </div>
        <label><b className="emailinp">Password</b></label>
        <input type="password" name="password" value={this.state.password} onChange={this.onHandleChange} />
        <div className="errorMsg">{this.state.perr}</div>
        <input type="submit" className="button1" onClick={this.login} value="Login"/>
        </form>
    </div>
    <Nav/>

</div>
      );
  }
}
export default Login;