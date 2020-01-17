import React, { Component } from 'react';
import axios from 'axios';

class Forgetpassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
         _id: ''
           }
        }

    changepassw = () => {
        axios.put(`http://localhost:4090/signin/id${this.props.obj.id}`)
          .then(console.log('Deleted'))
          .catch(err => console.log(err))
        window.location.reload();
      }

    render() {
        return (
            <div>
                <label>New Password</label>
                <input type="text" placeholder="enter new password"></input>
       
            <button onClick={this.changepassw} className="btn btn-danger">change password</button>
     
            </div>
        );
    }
}

export default Forgetpassword;