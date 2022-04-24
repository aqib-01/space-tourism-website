import React from "react";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/destinations"
          element={<Destination />}
        />
        <Route path="/crew" element={<Crew />} />
        <Route
          path="/technology"
          element={<Technology />}
        />
      </Routes>
    </Router>
  );
};

export default App;
