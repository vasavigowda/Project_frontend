import React, { Component } from 'react';
import './Navbar.css';
import logo from './image2.jpeg';

class Navbar extends Component {
  // myFunction = ()=>{
  //   this.classList("change");
    
  // }

    render() {
        return (
           
              <div className="row">
                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 contianer" >
                  <div className="bar1"></div>
                  <div className="bar2"></div>
                  <div className="bar3"></div>
                  <i class="fa fa-bars"></i>
                </div>
                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1" >
                <img src={logo} className="logo"></img>
                </div>
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2" >IQ overflow</div>
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3" >
                <a  className="nav1" href='/Product'>Product</a>
                <a className="nav1" href='/Customers'>Customers</a>
                <a className="nav1" href='/Usecases'>Usecases</a>
                </div>
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3" >
                  <input type="text" placeholder="search"></input>
                </div>
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                <button href='/Login'>Login</button>
                <button href='/Login'>Signup</button>
                </div> 
              </div>
          


        );
    }
}

export default Navbar;