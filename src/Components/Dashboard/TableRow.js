import React, { Component } from 'react';
import axios from 'axios';

class TableRow extends Component {
  constructor(props) {
    super(props); 
    this.state={
      post:'',
      post1:'',
      postusers:[]
    }
}
delete=()=> {
      axios.delete(`http://localhost:4090/question/${this.props.obj._id}`)
          .then(console.log('Deleted'))
          .catch(err => console.log(err))
          window.location.reload();
  }
//   edit=()=> {
//     axios.put(`http://localhost:4090/question/${this.props.obj._id}`)
//         .then(console.log('edited'))
//         .catch(err => console.log(err))
//         window.location.reload();
// }

// componentDidMount(){
//   axios.get('http://localhost:4090/answer')
//   .then(response => {
//   this.setState({ postusers: response.data });
//   })
//   .catch(function (error) {
//   console.log(error);
//   })
//   }

handlechange=(event)=>{
  this.setState({ [event.target.name]: event.target.value });
}
post=()=>{
// this.setState({post1:this.state.post})
axios.put('http://localhost:4090/answer/id')
  .then(response => {
  this.setState({ postusers: response.data });
  })
  .catch(function (error) {
  console.log(error);
  })
}
  render() {
    return (
      <table>
        <tr>
          <td>
            {this.props.obj.text}<br></br>
          </td>
          <td>
            <button onClick={this.delete} className="btn btn-danger">Delete</button>
          </td>
          {/* <td>
            <button onClick={this.edit} className="btn btn-danger">Edit</button>
          </td> */}
        </tr>
        <tr>
        <td>
        {/* {this.state.post1}  */}
        </td>

        </tr>
        <tr>
           <td>
            <input type="text" name="post" onChange={this.handlechange}></input>
          </td>
          <td>
          
          {/* {this.state.postusers.map((resp, key) => (
             <tr>
             <td>{resp.post}</td>
             </tr>
         ))} */}

      
      
          <button onClick={this.post()}>PostAnswer</button>
          </td>
        </tr>
        </table>
    );
  }
}

export default TableRow;