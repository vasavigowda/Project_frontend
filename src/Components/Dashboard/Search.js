// import React, { Component } from 'react';
// import axios from 'axios'
// class Search extends Component {

//   state = {
//     query: "",
//     data: [],
//     filteredData: []
//   };

//   handleInputChange = event => {
//     const query = event.target.value;

//     this.setState(prevState => {
//       const filteredData = prevState.data.filter(element => {
//         return 
//         // element.name.toLowerCase().includes(query.toLowerCase());
//       });

//       return {
//         query,
//         filteredData
//       };
//     });
//   };

//   getData = () => {
//    axios. get(`http://localhost:4090/Signin`)
//       // .then(response => response.json())
//       // .then(data => {
//       //   const { query } = this.state;
//       //   const filteredData = data.filter(element => {
//       //     return
//       //     //  element.name.toLowerCase().includes(query.toLowerCase());
//       //   });
//         .then(response => {
//           this.setState({usersview: response.data });
//            })
//            .catch(function (error) {
//             console.log(error);
//               })
//             }  
            

//         // this.setState({
//         //   data,
//         //   filteredData
//         // });
//   //     });
//   // };

//   componentWillMount() {
//     this.getData();
//   }

//   render() {
//     return (
//       <div className="searchForm">
//         <form>
//           <input
//             placeholder="Search for..."
//             value={this.state.query}
//             onChange={this.handleInputChange}
//           />
//         </form>
//         <div>{this.state.filteredData.map(i => <p>{i.name}</p>)}</div>
//       </div>
//     );
//   }
// }

// export default Search;