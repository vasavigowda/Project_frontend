import React, { Component } from 'react';
import {Form} from 'react-bootstrap';
// import './CSS/Appointment.css';
import axios from 'axios';
// import Navbar from './Navbar';
// import Footer from './Footer';
import DatePicker from "react-datepicker";
import browserHistory from '../Utils/browserHistory';
import "react-datepicker/dist/react-datepicker.css";
import api from '../../Api/index';

class Appoin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      date: new Date(),
      time:new Date()
    }
  }
  handleDate=(date)=> {
      this.setState({
      date: date
    });
  }
  handleChangeg=(e)=>{
      this.setState({[e.target.name]:e.target.value});
  }
  onChangeName=(e)=> {
      this.setState({
      name: e.target.value
    });
  }
  onChangeEmail=(e)=> {
      this.setState({
      email: e.target.value
    })  
  }
  onSubmit=(e)=> {
      e.preventDefault();
      const obj = {
      name: this.state.name,
      email: this.state.email,
      date: this.state.date,
      time: this.state.time,
    };
  axios.post('http://localhost:8000/appt', obj)
    .then(res => console.log(res.data));
      this.setState({
      name: '',
      email: '',
      date:'',
      time:''
    })
    browserHistory.push('./sch');
  }

  render() {
    const { email, name} = this.state 
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
                  <div>
                    <label>Email </label>
                      <input type="text" 
                        className="width"
                        value={this.state.email}
                        onChange={this.onChangeEmail}
                      />
                  </div>
                  <div>
                    <label>Date </label>
                      <DatePicker
                        selected={this.state.date}
                        onChange={this.handleDate}
                        className="widthd"
                      />
                  </div>
                  <div>
                    <label>Time</label>
                      <DatePicker
                        selected={this.state.date}
                        onChange={this.handleDate}
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={15} cf
                        dateFormat="h:mm aa"
                        timeCaption="Time"
                        className="widthd"
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