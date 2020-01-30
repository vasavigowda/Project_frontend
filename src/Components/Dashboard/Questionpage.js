import React, { Component } from 'react';
import { connect } from 'react-redux';
import BrowserHistory from '../Utils/BrowserHistory'
import {questionHandle} from '../../Action/qusetionpageAction';
import './Questionpage.css'
import Nav from '../Nav/Nav';
import Navbar from './Navbar';

class Questionpage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        text: '',
        texterror: ''
        };
        }
        onHandleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
        }
        onHandleClick = (e) => {
        e.preventDefault();
        const payload = {
            text: this.state.text
        }
        console.log(payload)
        if (this.state.text.length === 0) {
        this.setState({
        texterror: "text is required"
        })
        }
        else if (this.state.text.length === 0 && !this.state.text.match(/^[A-Za-z]{5,15}$/)) {
        this.setState({ texterror: "enter the text here" })
        }
        else {
        BrowserHistory.push('/dashboard')
        this.props.questionHandle(payload);
        }
        } 
    render() {
        return (
            <div className ="container3">
              <div className="contain">
            <h2 className="heading"> Ask question here</h2>
            <input type="text" name= "text" placeholder="Enter a question" className="text1" onChange={this.onHandleChange} /><br />
             <p  className="errorMsg " >{this.state.texterror}</p><br/>
          <button onClick={this.onHandleClick} className="button2"><b>Enter</b></button>
          </div>
       <Navbar/> 
            </div> 
        );
    }
}

const mapStateToProps=(state)=>{
    const {text}=state.questionpageReducer
    return {text}
    }
    export default connect(mapStateToProps,{questionHandle}) (Questionpage);
    
   