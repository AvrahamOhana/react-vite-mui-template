import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Create from "./components/Create";
import Navbar from "./components/Navbar";

export default function App() {
  const myWidth = 220;
  return (
    <div className="App">
      <Navbar
        drawerWidth={myWidth}
        content={
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/create" element={<Create />} />
          </Routes>
        }
      />
    </div>
  );
}
