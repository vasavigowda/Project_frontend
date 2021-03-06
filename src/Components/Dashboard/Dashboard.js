import React, { Component } from 'react';
import TableRow from './TableRow';
import axios from 'axios'
import Nav from '../Nav/Nav';
import './Dashboard.css';
import Footer from '../Footer/Footer';
import Navbar from './Navbar';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Users: []
    };
  }
  componentDidMount() {
    axios.get('http://localhost:4090/question')
      .then(response => {
        this.setState({ Users: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })
  }
  tabRow() {
    return this.state.Users.map(function (object, i) {
      return <TableRow obj={object} abc={i} />;
    });
  }

  render() {
    return (
      <div className="containerdash">
        <Navbar />
        <div className="row container">
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <h3 className="questcount">All questions</h3>
            <h3 className="quescount">{this.state.Users.length}</h3>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6"><button className="questioninp">
            <a href="/quest" className="quescolor">Ask Question</a></button></div>
        </div>
        <table style={{ marginTop: 20 }}>
          <tbody>
            {this.tabRow()}
          </tbody>
        </table>
        <Footer />
      </div>
    );
  }
}

export default Dashboard;