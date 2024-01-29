import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import KNewYearBus from "./pages/KNewYearBus/KNewYearBus";
import KNewYearBusDetail from "./pages/KNewYearBus/KNewYearBusDetail";
import { Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/error";
import HSSCMap from "./pages/hsscmap/hsscmap";
import NSCMap from "./pages/nscmap/nscmap";

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
      <Route path="map">
        <Route path="hssc" element={<HSSCMap />} />
        <Route path="nsc" element={<NSCMap />} />
      </Route>
      <Route path="bus">
        <Route path="newyear" element={<KNewYearBus />} />
        <Route path="newyear/detail" element={<KNewYearBusDetail />} />
      </Route>
    </Routes>
  );
}

export default App;
