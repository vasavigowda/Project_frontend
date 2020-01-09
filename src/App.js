import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Components/Login/Login';
import Index from './Components/Index/Index';
import Register from './Components/Register/Register';
import Nav from './Components/Nav/Nav';
import Reg from './Components/Reg';
// import Dashboard from './Components/Dashboard/Dashboard';
import Signup from './Components/Signup/Signup';


function App() {
  return (
    <div className="App">
      <Router>
        <switch>
        {/* <Route exact path='/navbar' component={Navbar}></Route>  */}
        <Route exact path='/login' component={Login}></Route> 
        <Route exact path='/' component={Index}></Route> 
        <Route exact path='/register' component={Register}></Route> 
        <Route exact path='/nav' component={Nav}></Route> 
        <Route exact path='/reg' component={Reg}></Route> 
        {/* <Route exact path='/dashboard' component={Dashboard}></Route>  */}
        <Route exact path='/signup' component={Signup}></Route>
     
        </switch>
      </Router>
     
    </div>
  );
}

export default App;
