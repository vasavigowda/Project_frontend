import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from '../Images/image2.jpeg';
import Modal from 'react-modal';
import './Navbar.css';
// import { BurgerIcon } from './'
import styled from "styled-components";
import BrowerHistory from '../Utils/BrowserHistory';
import Login from "../Login/Login";


const Navigation = styled.header`
  width: 100%;
  height:60px;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #535056; 
  font-color:white;
  position:fixed;
  top:0; 

  .logo a {
    padding-top: 33px;
    display: flex;
    flex-direction: column;
    clear: both;
    padding-bottom: 30px;
    text-decoration: none;

    p {
      width: 500px;
      display: block;
    }
    em {
      font-size: 0.5em;
      float: left;
      display: block;
      img {
        display: inline-block;
        margin-top: 5px;
        width: 15px;
        float: left;
      }
      .letterhead {
        display: inline-block;
        line-height: 260%;
        float: left;
      }
    }
  }
  .gray {
    color: #ccc;
  }
  a {
    color: #222;
    
    color: #222;
    font-size: 1em;
  }
  a:hover {
    opacity: 1;
  }
  .fa-bars {
    display: none;
    color: white;
    font-size: 2rem;
  }
  nav {
    ul {
      display: flex;
      justify-content: space-between;
      margin-top:3px;
    }
    li {
      margin: 0 15px;
      justify-content: space-between;
      font-size: 1em;
    }
    a {
      font-size: 1em;
      text-decoration: none;
      .active {
        color: tomato;
      }
    }
    a.active {
      color: white;
    }
  }
  a{
    color:white;
  }

  @media only screen and (max-width: 800px) {
    padding: 0px;
    width:100%;
    .logo {
      padding-left: 35px;
      padding-top: 0px !important;
    }
  }
  @media only screen and (max-width: 600px) {
    height: auto;
    min-height: 50px;
    display: block;
    position: relative;
    .logo {
      width: 11% !important;
      height: 50%;
      display: block;
      padding-top: 20px;
      margin: 0px;
      margin-left: -5px;
      .search{
        width:50%;
        margin-right: 203px;
        margin-top: 10px;
      }
      a {
        padding: 20px 0px;
      }
    }
    .fa-bars {
      display: inline-block;
      position: absolute;
      top: 10px;
     
      cursor: pointer;
    }
    ul.collapsed {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex-wrap: wrap;

      overflow: hidden;
      max-height: 0;
      -moz-transition-duration: 0.4s;
      -webkit-transition-duration: 0.4s;
      -o-transition-duration: 0.4s;
      transition-duration: 0.4s;
      -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
      -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
      -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
      transition-timing-function: cubic-bezier(0, 1, 0.5, 1);

      &.is-expanded {
        overflow: hidden;
        max-height: 500px; /* approximate max height */
        -moz-transition-duration: 0.4s;
        -webkit-transition-duration: 0.4s;
        -o-transition-duration: 0.4s;
        transition-duration: 0.4s;
        -moz-transition-timing-function: ease-in;
        -webkit-transition-timing-function: ease-in;
        -o-transition-timing-function: ease-in;
        transition-timing-function: ease-in;
      }
      li {
        padding: 15px 10px;
        margin: 0px 0px;
        width: 100%;
      }
    }
  }
`;

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false,
      modalIsOpen: false

    };
  }
  handleToggle(e) {
    e.preventDefault();
    this.setState({
      isExpanded: !this.state.isExpanded
    });
  }
  openModal = () => {
    this.setState({ modalIsOpen: true });
  }
  closeModal = () => {
    this.setState({ modalIsOpen: false });
  }
  onClick() {

    sessionStorage.removeItem('authentication');
    BrowerHistory.push('/');
  }
  onHandleClick() {
    BrowerHistory.push('/reg');
  }

  render() {
    const { isExpanded } = this.state;

    return (
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <Navigation>

            <nav className="nav navbar-header">
              <i className="fa fa-bars" aria-hidden="true"
                onClick={e => this.handleToggle(e)} />
              <ul className={`collapsed ${isExpanded ? "is-expanded" : ""}`}>
                <span><img src={logo} className="logo"></img></span>
                <span className="about"> <a href="/#About" >Aboutus</a></span>
                <span className="customer"><a href="/#customer">Customer</a></span>
                <span className="product1"><a href="/#" > Product</a></span>
                <span className="users"> <a href="/search">Users</a></span>
                <input className="search" type="text" placeholder="search" ></input>
                <span className="loginbttn"> <button onClick={this.onClick} className="loginbutton">Logout</button>
                </span>
              </ul>
            </nav>
          </Navigation>
        </div>
      </div>
    );
  }
}

export default Navbar;
