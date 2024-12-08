import React from "react";
// import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./AlphaX/Home";
import About from "./AlphaX/About";

import Design from "./AlphaX/Services/Design";
import Technology from "./AlphaX/Services/Technology";
import Marketing from "./AlphaX/Services/Marketing";
import Content from "./AlphaX/Services/Contact";
import Team from "./AlphaX/Services/Team";
import Career from "./AlphaX/Services/Career";

import Test from "./AlphaX/Services/test";
import Frequency from "./AlphaX/Services/Frequ";
import FetchData from "./AlphaX/Services/FetchData";

function App() {
  return (
    <>
      {/* <Test />
      <Frequency />
      <FetchData /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/contact" element={<Content />} />

        <Route path="/design" element={<Design />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/marketing" element={<Marketing />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/career" element={<Career />} />
      </Routes>
    </>
  );
}

export default App;
