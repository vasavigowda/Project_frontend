import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Components/Login/Login';
import Index from './Components/Index/Index';
import Nav from './Components/Nav/Nav';
import Signup from './Components/Signup/Signup';
import Signin from './Components/Signin/Signin';
import Register from './Components/Register/Register';
import Dashboard from './Components/Dashboard/Dashboard';
import Userquestion from './Components/Userquestion/Userquestion';
import AllPost from './Components/Userquestion/AllPost';
import PostForm from './Components/Userquestion/PostForm';
import Askquestion from './Components/Practice/Askquestion';
import Appoin from './Components/Practice/Appoin';




function App() {
  return (
    <div className="App">
      <Router>
        <switch>
        <Route exact path='/' component={Index}></Route> 
        <Route exact path='/reg' component={Register}></Route> 
        <Route exact path='/login' component={Login}></Route> 
        <Route exact path='/dashboard' component={Dashboard}></Route>
        <Route exact path='/Userquestion' component={Userquestion}></Route>
        <Route exact path='/Allpost' component={AllPost}></Route>
        <Route exact path='/Allpost' component={PostForm}></Route>
        <Route exact path='/Ask' component={Askquestion}></Route>
        <Route exact path='/Appoin' component={Appoin}></Route>
        </switch>
      </Router>
     
    </div>
  );
}

export default App;
