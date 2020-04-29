import React from "react";
import AboutUs from "../components/about/About";
import Awards from "../components/common/Awards";
import GelatoBlocks from "../components/gelato/Blocks";

const About = () => {
  return (
    <React.Fragment>
      <AboutUs />
      <Awards />
      <GelatoBlocks />
    </React.Fragment>

  )
}

export default About;