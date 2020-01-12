import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import './Dashboard.css';

class Dashboard extends Component {
    render() {
        return (
            <div className="dashboardpage">
                      <Nav/> 
                <div className="row containerdash">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6"> <h1>All questions</h1></div>
                <div className= "col-xs-6 col-sm-6 col-md-6 col-lg-6"><button><a href="/quest">Ask Question</a></button></div>
                </div>  
          
                
            </div>
            // <Foot er/>
        );
    }
}

export default Dashboard;