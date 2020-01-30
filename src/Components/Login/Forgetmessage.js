import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

class Forgetmessage extends Component {
    render() {
        return (
            <div>
                <h5 className="forgetmessage"> your Password changed</h5>
                <Nav/>
               
            </div>
            
        );
    }
}

export default Forgetmessage;