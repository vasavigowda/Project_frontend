// import React, { Component } from 'react';
// import axios from 'axios';
// import BrowserHistory from '../Utils/BrowserHistory'
// import Modal from 'react-modal';

// class Forgetpassword extends Component {
//     // constructor(props) {
//     //     super(props);
//     //     this.state = {
       
//     //        }
//     //     }
//     // changepassw = () => {
//     //     axios.put(`http://localhost:4090/signin/id${this.props.obj.id}`)
//     //       .then(console.log('update'))
//     //       .catch(err => console.log(err))
//     //     window.location.reload();
//     //   }
//     constructor(props) {
//         super(props);
//         this.state = {
//           isExpanded: false,
//           modalIsOpen: false,
//          password:'',
//           _id:''
    
//         };
//         // this.delete = this.delete.bind(this);

//       }
//       handleChangeg = (e) => {
//         this.setState({ [e.target.name]: e.target.value });
//       }
    
//       onChangeEmployee_Id = (e) => {
//         this.setState({
//             password: e.target.value
//         });
//       }
    
 
//       // delete() {
//       //   axios.delete(`http://localhost:4090/reset/${this.props.obj._id}`)
//       //     .then(console.log('Deleted'))
//       //     .catch(err => console.log(err))
//       //   window.location.reload();
//       // }
//       openModal = () => {
//         console.log(this.props.obj._id)
//         this.setState({ password: this.props.obj.password })
        
    
//         this.setState({ modalIsOpen: true });
//         console.log("hi", this.state)
//       }
    
//       closeModal = () => {
//         this.setState({ modalIsOpen: false });
//       }
    
    
//       // componentDidMount() {
//       //   const LoginDetails = (localStorage.getItem('LOGINDETAILS'));
//       //   const LogDet = JSON.parse(LoginDetails);
//       //   this.props.GetUserDetailsById(LogDet.userId);
//       // }
    
//       handleChangeg = (e) => {
//         this.setState({ [e.target.name]: e.target.value });
//       }
    
//       onSubmit = (e) => {
//         e.preventDefault();
//         console.log("hi",this.state._id)
//         const payload = {
//           _id: this.state._id,
//           password: this.state.password
         
//         };
//     console.log(payload);
//         this.props.updateHandle(payload);
//         // BrowserHistory.push('./desktopform');
//       }
//       // onHandleClicksCancel() {
//         // BrowserHistory.push('/desktopform');
//       // }
    

//     render() {
//         const { UserDetails } = this.props;
//         return (
//             // <div>
//             //     <label>New Password</label>
//             //     <input type="text" placeholder="enter new password"></input>
       
//             // <button onClick={this.changepassw} className="btn btn-danger">change password</button>
     
//             // </div>
//             <tr>
//         <td>
//           {this.props.obj.password}
//         </td>
//         <td>
//           {UserDetails.IsAdmin ? <button onClick={this.openModal} className="btn btn-primary">Edit</button> : ""}
//           <Modal className="modelbody"
//             isOpen={this.state.modalIsOpen}
//             onRequestClose={this.closeModal}
//             contentLabel="Register Modal"
//           >
//             <form onSubmit={this.onSubmit} className="deskform">
//               <div>
//                 <label className="name">password:</label>
//                 <input
//                   type="text"
//                   className="width"
//                   defaultValue={this.props.obj.password}
//                   onChange={this.onChangeEmployee_Id}
//                 />
//               </div>
//               <div className="form-group">
//                 <button type="submit" value="send" className="sendbta" onClick={this.onSubmit}>Update</button>
//                 <button onClick={this.onHandleClicksCancel} type="button" className="resetbta">Cancel</button>
//               </div>
//             </form>

//           </Modal>
//         </td>
//         <td>
//           {UserDetails.IsAdmin ? <button onClick={this.delete} className="btn btn-danger">Delete</button> : ""}
//         </td>
//       </tr>
//         );
//     }
// }

// export default Forgetpassword;
