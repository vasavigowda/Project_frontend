import React, { Component } from 'react';
import axios from 'axios';

class TableRow extends Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
}
delete() {
  debugger;
    axios.delete(`http://localhost:8000/delete/${this.props.obj._id}`)
        .then(console.log('Deleted'))
        .catch(err => console.log(err))
        window.location.reload();
}
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.name}
          </td>
          <td>
            {this.props.obj.email}
          </td>
          <td>
            {this.props.obj.date}
          </td>
          <td>
            {this.props.obj.time}
          </td>
          <td>
            <button className="btn btn-primary">Edit</button>
          </td>
          <td>
            <button onClick={this.delete} className="btn btn-danger">Delete</button>
          </td>
        </tr>
    );
  }
}

export default TableRow;