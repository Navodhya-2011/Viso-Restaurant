import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Menu = React.lazy(() => import("pages/Menu"));
const OurTeam = React.lazy(() => import("pages/OurTeam"));
const Home1 = React.lazy(() => import("pages/Home1"));
const Signup = React.lazy(() => import("pages/Signup"));
const Login = React.lazy(() => import("pages/Login"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home1 />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home1" element={<Home1 />} />
          <Route path="/ourteam" element={<OurTeam />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
