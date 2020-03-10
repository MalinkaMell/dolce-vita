import React from 'react';
import AboutUs from '../components/about/About';
import Awards from '../components/common/Awards';
import Gelatoblocks from '../components/gelato/Gelatoblocks';

const About = () => {
  return (
    <React.Fragment>
      <AboutUs />
      <Awards />
      <Gelatoblocks />
    </React.Fragment>
  )
}

export default About;