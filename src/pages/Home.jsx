import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home1 from "pages/Home1/index";
const Home = () => {
  return (
    <Router>
        <Routes>
        <Route path="/" element={<Home1 />} />
        </Routes>
    </Router>
  );
};
export default Home;
