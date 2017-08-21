import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Profile from './Profile.jsx';
import Team from './Team.jsx';
import ContactUs from './ContactUs.jsx';
import AboutUsHome from './AboutUsHome.jsx';


class AboutUsSection extends Component{
  render(){
    return(
      <Switch>
        <Route exact path="/aboutus" component={AboutUsHome}/>
        <Route exact path="/aboutus/profile" component={Profile}/>
        <Route exact path="/aboutus/team" component={Team}/>
        <Route exact path="/aboutus/contactus" component={ContactUs}/>
      </Switch>
    )
  }
}

export default AboutUsSection;
