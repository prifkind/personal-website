import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Nav from "./Nav";

const AppRouter = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/about"></Route>
    </Routes>
  );
};

export default AppRouter;
