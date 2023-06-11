import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home1 from "pages/Home1/index";
import Menu from "pages/Login/index";
import OurTeam from "pages/Menu/index";
import Signup from "pages/Signup/index";
import Login from "pages/Login/index";

const Home = () => {
  return (
    <Router>
        <Routes>
        <Route path="/" element={<Home1 />} />
        <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home1" element={<Home1 />} />
          <Route path="/ourteam" element={<OurTeam />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
    </Router>
  );
};
export default Home;
