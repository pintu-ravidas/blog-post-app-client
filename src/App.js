import React from "react";
import Signup from "./auth/signup.js";
import Signin from "./auth/signin.js";
import LandingPage from "./posts/Landing.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/post" element={<LandingPage />}></Route>
      </Routes>
    </Router>
  );

};
export default App;
