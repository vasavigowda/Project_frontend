import React, { Component } from 'react';
import logo from '../Images/image2.jpeg';
import './Footer.css';
import { SocialIcon } from 'react-social-icons';

class Footer extends Component {
  render() {
    return (
      <div className="row footer">
        <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
          <img src={logo} className="footerlogo"></img>
        </div>
        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
          <h6>IQ overflow</h6>
          <p>Questions</p>
          <p>Job</p>
          <p>Developer job</p>
          <p>Salary calculator</p>
          Help
     </div>
        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
          <h6>Products</h6>
          <p> Team</p>
          <p>Talent</p>
          <p>Advertising</p>
          <p>Enterprise</p>
        </div>
        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
          <h6>Company</h6>
          <p>About</p>
          <p>work here</p>
          <p>Press </p>
        </div>
        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
          <h6>Stack Exchange</h6>
          <p> Techology</p>
          <p>Life/Arts</p>
          <p>Culture/Recreation</p>
          <p>science</p>
        </div>
        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 " id="footerlogo">
          <a href="https://www.facebook.com" className="ggllogo">Facebook</a>
          <a href="https://www.google.co.in/" className="fblogo">Google</a><br/>

        </div>
      </div>
    );
  }
}

export default Footer;