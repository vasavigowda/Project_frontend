import React, { Component } from 'react';
import './Login.css';
import { SocialIcon } from 'react-social-icons';

class Login extends Component {
    render() {
        return (
            <div>
                
                  <button className="socialicon"> <SocialIcon url="http://google.com/jaketrent" />Login in with google</button><br/><br/>
                  <button className="socialicon"><SocialIcon url="http://facebook.com/jaketrent" />Login in with facebook</button><br/><br/>
                  <form>
                  <label>Email</label><br/>
                  <input type="text"></input><br/>
                  <label>Password</label><br/>
                  <input type="text"></input>
                 
                </form>
            </div>
        );
    }
}

export default Login;