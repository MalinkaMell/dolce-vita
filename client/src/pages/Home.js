import React from 'react';
import Jumbo from '../components/home/Jumbotron';
import Story from '../components/home/Story';
import Gelato from '../components/home/Gelato';
import Awards from '../components/common/Awards';
import Dishes from '../components/home/Dishes';
import TestimonialsHome from '../components/home/Testimonials';
import Cite from '../components/home/Cite';

const Home = () => {
  return (
    <React.Fragment>
      <Jumbo />
      <Story />
      <Cite />
      <Gelato />
      <Awards />
      <Dishes />
      <TestimonialsHome />
    </React.Fragment>
  )
}

export default Home;