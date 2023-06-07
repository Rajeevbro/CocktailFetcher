import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import Error from "./Pages/Error";
import Home from "./Pages/Home";
import SingleCocktail from "./Pages/SingleCocktail";
import React from "react";
import Authentication from "./Components/Authentication";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route></Route>
        <Route
          path="/"
          element={
            <Authentication>
              <Home />
            </Authentication>
          }
        ></Route>
        <Route
          path="singleProducts/:id"
          element={
            <Authentication>
              <SingleCocktail />
            </Authentication>
          }
        ></Route>
        <Route path="*" element={<Error />} />

        <Route path="about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
