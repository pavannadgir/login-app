import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class AboutUsMain extends Component{
  render(){
    return(
      <ul className="list-group">
        <li className={"list-group-item "+(location.pathname === '/aboutus/profile'?'active':'')}><Link to='/aboutus/profile'>Profile</Link></li>
        <li className={"list-group-item "+(location.pathname === '/aboutus/team'?'active':'')}><Link to='/aboutus/team'>Team</Link></li>
        <li className={"list-group-item "+(location.pathname === '/aboutus/contactus'?'active':'')}><Link to='/aboutus/contactus'>Contact Us</Link></li>
      </ul>
    )
  }
}

export default AboutUsMain;
