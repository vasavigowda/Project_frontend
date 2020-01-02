import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import './Index.css';

class Index extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <h1>Companies around the world rely <br/>on Stack Overflow</h1>
                <p>Millions of developers rely on Stack Overflow <br/>to solve their coding problems, share siloed knowledge, and ship better code faster.</p>
                
            </div>
        );
    }
}

export default Index;