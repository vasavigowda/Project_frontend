import React, { Component } from 'react';
import { connect } from 'react-redux';
import BrowserHistory from '../Utils/BrowserHistory'
import {questionHandle} from '../../Action/qusetionpageAction';

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
        // signup(reqst).then(res => {
        // if (res.data === "User Created Succesfully") {
        // alert("UserCreated Successfully")
        // BrowserHistory.push('/login')
        // }
        
        // })
        
        if (this.state.text.length === 0 ) {
        this.setState({
        texterror: "text is required"
       
        })
        }
        else if (this.state.text.length === 0) {
        this.setState({ texterror: "text is required" })
        }
        else if (!this.state.text.match(/^[A-Za-z]{5,15}$/)) {
        this.setState({ texterror: "enter the text here" })
        }
        else {
        BrowserHistory.push('/dashboard')
        }
        this.props.questionHandle(payload);
        
        
        }
        
    render() {
        return (
            <div  >
                 <label className="text"><b>Ask question here</b></label>
          <input type="text" name= "text" placeholder="enter text here" className=" text1" onChange={this.onHandleChange} /><br />
          <p  className="errorMsg " >{this.state.texterror}</p>
          <button onClick={this.onHandleClick} className="button"><b>Enter</b></button>
                
            </div>
          
        );
    }
}

const mapStateToProps=(state)=>{
    const {text}=state.questionpageReducer
    return {text}
    }
    export default connect(mapStateToProps,{questionHandle}) (Questionpage);
    