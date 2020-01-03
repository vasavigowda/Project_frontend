import React, { Component } from 'react';
import './Navbar.css';
import logo from './image2.jpeg';
import BrowserHistory from '../Utils/BrowserHistory';

class Navbar extends Component {
  onHandleClick(){
    BrowserHistory.push("/Login");
    }

    render() {
        return (
           
              <div className="row navbar">
                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 bar" >
                  {/* <div className="bar1"></div>
                  <div className="bar2"></div>
                  <div className="bar3"></div> */}
                  <i class="fa fa-bars"></i>
                  
                </div>
                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
                <img src={logo} className="logo"></img>
                </div>
                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 logoname" >IQ overflow</div>
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 data" >
                <a  className="nav1" href='/#Product'>Aboutus</a>
                <a  className="nav1" href='/#Product'>Product</a>
                <a className="nav1" href='/#Customers'>Customers</a>
                <a className="nav1" href='/#Usecases'>Usecases</a>
                </div>
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3" className="search" >
                  <input type="text" placeholder="search" className="search"></input>
                </div>
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                <button  className="lognbtn" onClick={this.onHandleClick}>Login</button>
                <button href='/Login' className="signbtn">Signup</button>
                </div> 
              </div>
          


        );
    }
}

export default Navbar;