import React from "react";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Detail from "./pages/Detail/";
import Home from "./pages/Home/Home";

import "./App.scss";

function App() {
    return (
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
    );
}

export default App;
