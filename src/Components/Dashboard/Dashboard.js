import React, { Component } from 'react';
import TableRow from './TableRow';
import axios from 'axios'
import Nav from '../Nav/Nav';
import './Dashboard.css';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
        Users: [],
        };
        }
        componentDidMount(){
        axios.get('http://localhost:4090/question')
        .then(response => {
        this.setState({ Users: response.data });
        })
        .catch(function (error) {
        console.log(error);
        })
        }
        tabRow(){
        return this.state.Users.map(function(object, i){
        return <TableRow obj={object} key={i} />;
        });
        }

    render() {
        return (
            <div className="containerdash">
                <Nav/>
                 <div className="row">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6"> <h1>All questions</h1></div>
                <div className= "col-xs-6 col-sm-6 col-md-6 col-lg-6"><button className="questioninp"><a href="/quest">Ask Question</a></button></div>
                </div>  
                <table className="table table-striped" style={{ marginTop: 20 }}>
                <tbody>
                { this.tabRow() }
                </tbody>

                </table>
            </div>
        );
    }
}

export default Dashboard;