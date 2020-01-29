// import React, { Component } from 'react';
// import axios from 'axios'
// import Nav from '../Nav/Nav';
// import './Userview.css';


// class Usersview extends Component {
//   constructor(props) {
//     super(props);
//       this.state = { 
//       usersview: [],
//       search:''
//       };
//      }
 
//    componentDidMount(){
//    axios.get('http://localhost:4090/Signin')
//    .then(response => {
//    this.setState({usersview: response.data });
//     })
//     .catch(function (error) {
//      console.log(error);
//        })
//      }  
     
//      handleChange=(e)=>{
//       this.setState({search:e.target.value})
//       }

  
//     render() {
//       var searchString=this.state.search.trim().toLowerCase(), library=this.state.data;
//       if(searchString.length>0){
//       library=library.filter(function(i){
//       return i.firstname.toLowerCase().match(searchString)
//       });
//       }
//         return (
//             <div className="usersviewpage"> 
//               <Nav/>
//                {this.state.usersview.map(name => {
//           return( 
//             <input type="text" value={this.state.search} onChange={this.handleChange}></input>
//              <div className="row" >
//                  <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
//                   <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
//               <p style={{width:"250px",color:"red"}}><p>{name.firstname}</p>
//               {name.email}</p><br/>  
//               </div>
//               <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
//             </div>      
//             )
//          }
//        )}
    
//             </div>
//         );
//     }
// }
// export default Usersview;