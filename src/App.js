import React from 'react';
import './App.css';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import { BrowserRouter as Router,Redirect, Route } from 'react-router-dom';
import Login from './Components/Login/Login';
import Index from './Components/Index/Index';
import Register from './Components/Register/Register';
import Dashboard from './Components/Dashboard/Dashboard';
import Userquestion from './Components/Userquestion/Userquestion';
import AllPost from './Components/Userquestion/AllPost';
import PostForm from './Components/Userquestion/PostForm';
import Questionpage from './Components/Dashboard/Questionpage';
import Forgetpassword from './Components/Login/Forgetpassword';
import Usersview from './Components/Dashboard/Usersview';
import Confirmemail from './Components/Login/Confirmemail';

const PrivateRoute = ({ component: IncomingComponent, ...rest }) => (
  <Route
  {...rest}
  render={props => ( 
  (sessionStorage.getItem('authentication')) ? (<IncomingComponent {...props} />) : (
  <Redirect to={{pathname: '/', state: { from: props.location }, }}/>)
  )}
  />
  );
function App() {
  return (
    <div className="App">
      <Router>
        <switch>
        <Route exact path='/' component={Index}></Route> 
        <Route exact path='/reg' component={Register}></Route> 
        <Route exact path='/login' component={Login}></Route> 
        <PrivateRoute exact path='/dashboard' component={Dashboard}></PrivateRoute>
        <PrivateRoute exact path='/Userquestion' component={Userquestion}></PrivateRoute>
        <PrivateRoute exact path='/Allpost' component={AllPost}></PrivateRoute>
        <PrivateRoute exact path='/Allpost' component={PostForm}></PrivateRoute>
        <PrivateRoute exact path='/quest' component={Questionpage}></PrivateRoute>
        <Route exact path='/forgetpasswordpage' component={Forgetpassword}></Route>
        <Route exact path='/confirmmail' component={Confirmemail}></Route>
        <Route exact path='/userview' component={Usersview}></Route>
        </switch>
      </Router>
     
    </div>
  );
}

export default App;
