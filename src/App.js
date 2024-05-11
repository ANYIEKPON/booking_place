import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/Pages/home/Home";
import "./App.css";
import Hotel from "./Pages/hotel/Hotel";
import List from "./Pages/list/List";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotels" element={<List />} />
          <Route path="/hotels/:id" element={<Hotel />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
