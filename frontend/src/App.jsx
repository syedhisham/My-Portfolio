import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./index.css";
import Layout from "./components/Layout";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
