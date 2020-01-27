import React, { Component } from 'react';
import axios from 'axios';
import './TableRow.css';

class TableRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: '',
      postusers: [],
      question_id: '',
      question: '',
      answer:[]
       }
    }
  delete = () => {
    axios.delete(`http://localhost:4090/question/${this.props.obj._id}`)
      .then(console.log('Deleted'))
      .catch(err => console.log(err))
    window.location.reload();
  }
  componentDidMount(){
    axios.get('http://localhost:4090/getanswer')
    .then(response => {
    this.setState({ answer: response.data });
    console.log(this.state.answer)
    })
    .catch(function (error) {
    console.log(error);
  
    })
    }

  handlechange = (event) => {
    console.log(event.target.value)
    this.setState({ [event.target.name]: event.target.value });
  }
  PostAnswer (id) {
    console.log(id)
    axios.post(`http://localhost:4090/postanswer`, {question_id:id,
    post: this.state.post   })
      .then(response => {
        window.location.reload();
      })
      .catch(function (error) {
        console.log(error);
      })
  }
  render() {
    return (
      <div className="conttable">
      <table className="cont">
        <div className="container2">
        <div className="question">
        <b style={{color:'red'}}>{this.props.abc+1})</b><span> </span><b>{this.props.obj.text}</b><br/> 
        </div>
        <div>
        <div className="Answer">
          {this.state.answer.map(answers => {
          if (answers.question_id === this.props.obj._id) {
          return(
          <div className="answerline">
           => {answers.post}
         </div>)}
         }
       )}
       </div>
          <td>
            <button onClick={this.delete} className="btn btn-danger">Delete</button>
          </td>
          <h5 className="pstanswheading">Write your answer here</h5>
      <div className="input">

         <input type="text" className="inputfield" name="post" onChange={this.handlechange}></input>     
      <span className="button3"> 
           <button className="postbtn" onClick={this.PostAnswer.bind(this,this.props.obj._id)}>PostAnswer</button>
        </span>
        </div>
        </div>
        </div>
          </table>
          </div>
    );
  }
}
export default TableRow;