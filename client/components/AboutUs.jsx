import React, { Component } from 'react';
import AboutUsMain from './AboutUsMain.jsx';
import AboutUsSection from './AboutUsSection.jsx';

class AboutUs extends Component{
  render(){
    return(
      <div className="container">
        <h2>About Us</h2>
        <AboutUsMain />
        <hr />
        <AboutUsSection />
      </div>
    )
  }
}

export default AboutUs;
