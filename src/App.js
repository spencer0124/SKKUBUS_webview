import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import Hello from "./pages/KNewYearBus";
import { Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/error";

function App() {
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  });

  return (
    <Routes>
      <Route path="/" element={<ErrorPage />} />
      <Route path="bus">
        <Route path="newyear" element={<Hello />} />
      </Route>
    </Routes>
  );
}

export default App;
