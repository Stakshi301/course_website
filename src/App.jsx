import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";
import Navbar from "./Navbar";

const App = () => {

  return (
    <>
<Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    </>
  );
};

export default App;
