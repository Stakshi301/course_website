import React from "react";
import Common from "./Common";
import web from "./assets/dev.png";

const Home = () => (
  <>
    <Common
      title="Grow and build with "
      bname="DevelTops"
      desc="Here is the team of developers"
      link="/service"
      btn="Start With"
      imgsrc={web}
    />
  </>
);

export default Home;
