import React, { Component } from 'react';
import { connect } from 'react-redux';


class EditComponent extends Component {
handleEdit = (e) => {
e.preventDefault();
const newTitle = this.getTitle.value;
const data = {
newTitle
}
this.props.dispatch({ type: 'UPDATE', id: this.props.post.id, data: data })
}
render() {
return (
<div key={this.props.post.id} className="post">
<form className="form" onSubmit={this.handleEdit}>
<input required type="text" ref={(input) => this.getTitle = input} 
defaultValue={this.props.post.title} placeholder="Ask question" /><br /><br />
{/* <input required rows="5" ref={(input) => this.getMessage = input}
defaultValue={this.props.post.message} cols="28" placeholder="Enter name" /><br /><br /> */}
<button>Update</button>
</form>
</div>
);
}
}
export default connect()(EditComponent);
