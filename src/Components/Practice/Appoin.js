import React, { Component } from 'react';
import {Form} from 'react-bootstrap';
// import './CSS/Appointment.css';
import axios from 'axios';
// import Navbar from './Navbar';
// import Footer from './Footer';
// import DatePicker from "react-datepicker";
// import browserHistory from '../Utils/BrowserHistory';
// import "react-datepicker/dist/react-datepicker.css";
import api from '../../Api/index';

class Appoin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
      
    }
  }
  handleChangeg=(e)=>{
      this.setState({[e.target.name]:e.target.value});
  }
  onChangeName=(e)=> {
      this.setState({
      text: e.target.value
    });
  }
  onSubmit=(e)=> {
      e.preventDefault();
      const obj = {
      text: this.state.text,
      
    };
  axios.post('http://localhost:4000/appt', obj)
    .then(res => console.log(res.data));
      this.setState({
      text: ''
      
    })
    // browserHistory.push('./Ask');
  }

  render() {
    const { text} = this.state 
    return (
      <div>
   
            <div className="row1">
                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
                <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 appth">
                  <div className='apptname'><i>Appointment</i></div>
                  <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
                </div>
            </div>
            <div style={{ marginTop: 10 }}>
              <label className="formg">Get in Touch</label>
                <form onSubmit={this.onSubmit} className="apptform">
                  <div>
                    <label>Name</label>
                      <input 
                        type="text" 
                        className="width" 
                        value={this.state.name}
                        onChange={this.onChangeName}
                    />
                  </div>
                 
                <div className="form-group">
                    <button type="submit" value="send" className="sendbta" >Send</button>
                    <button type="submit" className="resetbta">Reset</button> 
              </div>
                </form>
      </div>

      </div>
    )
  }
}

export default Appoin;