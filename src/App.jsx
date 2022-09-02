import Home from "./pages/home";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Restaurant from "./pages/restaurant";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/selection" element={<Restaurant />} />
    </Routes>
  );
}

export default App;
