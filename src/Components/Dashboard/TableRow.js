import React, { Component } from 'react';
import axios from 'axios';

class TableRow extends Component {
  constructor(props) {
    super(props); 
    this.state={
      post:'',
      postusers:[],
      question_id:'',
      question:''
    }
}


delete=()=> {
  debugger
      axios.delete(`http://localhost:4090/question/${this.props.obj._id}`)
          .then(console.log('Deleted'))
          .catch(err => console.log(err))
          window.location.reload();
  }
  edit=()=> {
    axios.post(`http://localhost:4090/question/${this.props.obj._id}`)
        .then(console.log('edited'))
        .catch(err => console.log(err))
        window.location.reload();
}

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
post=(id)=>{
 
  const payload = {
    question_id:id,
    post:this.state.question_id
  }
// this.setState({post1:this.state.post})
debugger

axios.post(`http://localhost:4090/postanswer`,{question_id:id,
post:this.state.question_id})
  .then(response => {
    console.log("hiiii")
  // this.setState({question:this.state.question_id});
  })
  .catch(function (error) {
  console.log(error);
  })
}
// componentWillMount =()=>{
//   axios.get('http://localhost:4090/getanswer')
//         .then(response => {
//         this.setState({ postusers: response.data });
//         })
//         .catch(function (error) {
//         console.log(error);
//         })
// }
  render() {
    return (
      <table>
        <tr>
          <td>
            {this.props.obj.text}<br></br>
            {this.props.obj.answer}
            {this.props.obj._id}<br></br>

          </td>
          <td>
            <button onClick={this.delete} className="btn btn-danger">Delete</button>
          </td>
          <tr>
            <label>Post the answers</label>
           <td>
            <input type="text" name="question_id" onChange={this.handlechange}></input>
          </td>
          </tr>
          
        </tr>
        <tr>

        <button onClick={this.post(this.props.obj._id)}>PostAnswer</button>
        {/* <td>
        {this.state.post1} 
        </td> */}

        </tr>
        
          
          {this.state.postusers.map((resp, key) => (
               <tr>
              <td>{resp.post}</td> 
              </tr> 
          ))}  

      
{/* <td>
            <button onClick={this.edit} className="btn btn-danger">Edit</button>
            <input type="text" name="edit" onChange={this.handlechange}></input>
          </td> */}
        
          {/* </td> */} 
        
        </table>
    );
  }
}

export default TableRow;