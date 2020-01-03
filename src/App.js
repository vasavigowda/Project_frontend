import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Navbar from './Navbar';
import Login from './Components/Login/Login';
import Index from './Components/Index/Index';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <switch>
        {/* <Route exact path='/navbar' component={Navbar}></Route>  */}
        <Route exact path='/login' component={Login}></Route> 
        <Route exact path='/' component={Index}></Route> 
        {/* <Route exact path='/footer' component={Footer}></Route>  */}
        </switch>
      </Router>
     
    </div>
  );
}

export default App;
