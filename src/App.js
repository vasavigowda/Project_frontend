import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Login from './Components/Login/Login';
import Index from './Components/Index/Index';

function App() {
  return (
    <div className="App">
      <Router>
        <switch>
        <Route exact path='/login' component={Login}></Route> 
        <Route exact path='/' component={Index}></Route> 
        </switch>
      </Router>
     
    </div>
  );
}

export default App;
