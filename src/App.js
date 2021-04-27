import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from 'react';
import React from 'react';
import {Route, Switch, Link, BrowserRouter as Router} from 'react-router-dom'
import CreateUser from './components/Login/create-user.component';
import Login from './components/Login/Login';
import Stategov  from './components/State/Stategov';
import central  from "./components/Central/central";
import contractor  from "./components/Contractor/contractor"
import tp from './components/Central/tp'
import ModalTest from './components/Test/ModalTest';
import Lower from './components/Login/Lower';

class App extends Component{
  render(){
  return (
    <div className='Father'>
    <Router>
      {/* <Stategov/> */}
      

      <Switch>
    .. <Route exact path="/stategov/Home" component={Stategov} />
      <Route exact path="/central/Home" component={central} />
      <Route path='/contractor/Home' component={contractor}/>
      </Switch>
      <div className="container">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={CreateUser} />
        <Route  exact path="/form" component={Lower}/>
      </Switch>
      </div>
      
    </Router>
    </div>
  
  );
 
}
}
export default App;
