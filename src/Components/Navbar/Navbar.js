import React, { Component } from 'react';
import './Navbar.css';
import logo from '../Images/image2.jpeg';
import BrowserHistory from '../Utils/BrowserHistory';

class Navbar extends Component {
  onHandleClick(){
    BrowserHistory.push("/Login");
    }

    render() {
        return (
              <div className="row navbar">
                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
                <img src={logo} className="logo"></img>
                </div>
                <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5 data" >
                <a  className="nav1" href='/#Aboutus'>Aboutus</a>
                <a  className="nav1" href='/#Product'>Product</a>
                <a className="nav1" href='/#Customers'>Customers</a>
                <a className="nav1" href='/#Usecases'>Usecases</a>
                </div>
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3" className="search" >
                  <input type="text" placeholder="search" className="search"></input>
                </div>
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <button  className="lognbtn" onClick={this.onHandleClick}>Login</button>
                <button href='/Login' className="signbtn">Signup</button>
                </div> 
                </div> 
        );
    }
}

export default Navbar;