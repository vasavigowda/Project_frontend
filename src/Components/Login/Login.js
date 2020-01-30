import React, { Component } from 'react';
import { connect } from 'react-redux';
import BrowserHistory from '../Utils/BrowserHistory'
import { registerHandle } from '../../Action/LoginAction';
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
  onCancel = () => {
    BrowserHistory.push('/');
  }
  confirmmail = (e) => {
    sessionStorage.setItem('change', this.state.email)
    BrowserHistory.push('/forgetpasswordpage');
  }

  onHandleClick = (e) => {
    e.preventDefault();
    const payload = {
      email: this.state.email,
      password: this.state.password
    }
    if (this.state.email.length === 0 && this.state.password.length === 0) {
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
    this.props.registerHandle(payload);
  }

  render() {
    return (
      <div id="login">
        <div id="register1" className="login">
          <button className="googleicon"><a href="https://www.google.co.in/" class="fa fa-google"></a>Login  with google</button><br /><br />
          <button className="socialicon"><a href="http://facebook.com/jaketrent" class="fa fa-facebook"></a>Login  with facebook</button><br /><br />
          <form >
            <label ><b className="emailinp">Email</b></label>
            <input type="text" name="email" className="one" onChange={this.onHandleChange} /><br />
            <div className="errorMsg"> {this.state.uerr}</div>
            <label ><b className="emailinp">Password</b></label>
            <div> <input type="password" name="password" className="one" onChange={this.onHandleChange} />
            </div>
            <div className="forget">
              <a onClick={this.confirmmail} className="forgetpassword">Forget Password?</a></div>
            <div className="errorMsg"> {this.state.perr}</div>
            <p >{this.state.phnerr}</p>
            <button onClick={this.onHandleClick} className="button11"><b>Login</b></button>
            <button className="cancel" onClick={this.onCancel}>Cancel</button>
          </form>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  const { firstname, email, password } = state.Loginreducer
  return { firstname, email, password }
}
export default connect(mapStateToProps, { registerHandle })(Login);
