import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';


 class Askquestion extends Component {

  constructor(props) {
      super(props);
      this.state = {Users: []};
    }
    componentDidMount(){
      axios.get('http://localhost:8000/appt')
        .then(response => {
          this.setState({ Users: response.data });
        })
        .catch(function (error) {
          console.log(error);
        })
    }
    tabRow(){
      return this.state.Users.map(function(object, i){
          return <TableRow obj={object} key={i} />;
      });
    }

    render() {
      return (
        <div>
            <div className="row1">
                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
                <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 schp">
                <div className='schname'><i>Schedule</i></div>
                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
                </div>
            </div>
          <p className="schl">Schedule List</p>
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Time</th>
                <th>Date</th>
                <th colSpan="2">Action</th>
              </tr>
            </thead>
            <tbody>
              { this.tabRow() }
            </tbody>
          </table>
        </div>
      );
    }
  }
  export default Askquestion;