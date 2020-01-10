import React, { Component } from 'react';
import { connect } from 'react-redux';
import EditComponent from './EditComponent';
import './Postform.css';

class PostForm extends Component {
handleSubmit = (e) => {
e.preventDefault();
const title = this.getTitle.value;
const data = {
id: new Date(),
title,

editing: false
}
this.props.dispatch({
type: 'ADD_POST',
data
})
this.getTitle.value = '';
}

render() {
return (
<div className="post-container">
<h1 className="post_heading"></h1>
<form className="form" onSubmit={this.handleSubmit} >
<h4>Ask Question</h4>
<input required type="text" ref={(input) => this.getTitle = input }
placeholder="Enter name" /><br /><br />
<h4></h4>
{/* <input id="post" required rows="5" ref={(input) => this.getMessage = input}
cols="28" placeholder="Enter last name" /><br /><br /> */}

<button>Update</button>
</form>
</div>
);
}
}
export default connect()(PostForm);