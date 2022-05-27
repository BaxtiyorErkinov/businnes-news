import React, { useState } from "react";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Detail from "./pages/Detail/";
import Category from "./pages/Category/";
import Tag from "./pages/Tag/";
import Home from "./pages/Home";
import Search from "./pages/Search";

import "./App.scss";

function App() {
  const [dataLoad, setDataLoad] = useState(false);
    return (
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home dataLoad={dataLoad} setDataLoad={setDataLoad} />} />
        <Route path="/detail/:id/" element={<Detail />} />
        <Route path="/category/:id/:title" element={<Category dataLoad={dataLoad} setDataLoad={setDataLoad} />} />
        <Route path="/hashtag=:tag" element={<Tag />} />
        <Route path="/search=:query" element={<Search />} />
      </Routes>
    </BrowserRouter>
    );
}

export default App;
