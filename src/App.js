import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Components/Login/Login';
import Index from './Components/Index/Index';
import Nav from './Components/Nav/Nav';
import Reg from './Components/Reg';
import Signup from './Components/Signup/Signup';
import Signin from './Components/Signin/Signin';
import Register from './Components/Register/Register';
import Dashboard from './Components/Dashboard/Dashboard';
import Userquestion from './Components/Userquestion/Userquestion';
import AllPost from './Components/Userquestion/AllPost';
import PostForm from './Components/Userquestion/PostForm';



function App() {
  return (
    <div className="App">
      <Router>
        <switch>
        {/* <Route exact path='/login' component={Login}></Route>  */}
        <Route exact path='/' component={Index}></Route> 
        {/* <Route exact path='/nav' component={Nav}></Route>  */}
        <Route exact path='/signin' component={Signin}></Route> 
        <Route exact path='/reg' component={Register}></Route> 
        <Route exact path='/signup' component={Signup}></Route>
        <Route exact path='/dashboard' component={Dashboard}></Route>
        <Route exact path='/Userquestion' component={Userquestion}></Route>
        <Route exact path='/Allpost' component={AllPost}></Route>
        <Route exact path='/Allpost' component={PostForm}></Route>
        </switch>
      </Router>
     
    </div>
  );
}

export default App;
