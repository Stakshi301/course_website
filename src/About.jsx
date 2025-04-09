import React from 'react';
import Common from './Common'
import web2 from "./assets/dev4.png"


const About=()=>(
  <>
    <Common title="Welcome To About Us "
    bname="DevelTops"
    desc="Heigh-End project using new technologies"
    link="/contact"
    btn="Contact us"
    imgsrc={web2} />
  </>
);

export default About;