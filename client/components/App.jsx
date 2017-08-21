import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Login from '../containers/Login.jsx';
import AboutUs from './AboutUs.jsx';
import '../assets/app.css';

class App extends Component{
  render(){
    return(
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route path="/aboutus" component={AboutUs}/>
      </Switch>
    )
  }
}

export default App;
