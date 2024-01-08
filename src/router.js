import React from "react";
import { React, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<ErrorPage />} />
      <Route path="bus">
        <Route path="newyear" element={<Hello />} />
      </Route>
    </Routes>
  );
};
