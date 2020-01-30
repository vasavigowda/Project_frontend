import React, { Component } from 'react';
import axios from 'axios';
import Nav from '../Nav/Nav';
import './Search.css';
import Footer from '../Footer/Footer';

var libraries;
class Search extends Component {
  state = {
    data: [],
    search: ''
  }
  componentDidMount = () => {
    axios.get('http://localhost:4090/Signin')
      .then(res => {
        this.setState({ data: res.data });
      });
  }
  handleChange = (e) => {
    this.setState({ search: e.target.value })
  }
  render() {
    var searchString = this.state.search.trim().toLowerCase(), library = this.state.data;
    if (searchString.length > 0) {
      library = library.filter(function (i) {
        return i.firstname.toLowerCase().match(searchString)
      });
    }
    return (
      <div className="searchpage">
  
        <input type="text" className="inputfieldsearch" value={this.state.search} onChange={this.handleChange}></input>
        <table border="2" className="logintable">
          <tr className="tableheading">
            <th>Name</th>
            <th>Email</th>
          </tr>
          {library.map(function (i) {
            return <tr className="tabledata">
              <td>{i.firstname}</td>
              <td>{i.email}</td>
            </tr>
          })
          }
        </table>
        <Nav />
        <Footer/>
 
      </div>
    );
  }
}
export default Search;