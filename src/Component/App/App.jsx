import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/About";
import { Suspense } from "react";

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Suspense>
  );
};

export default App;
