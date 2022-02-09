import "./App.css";
import Home from "./routes/Home";
import "antd/dist/antd.css";
import Skills from "routes/Skills";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "routes/About";
import Contact from "routes/Contact";
import Experiences from "routes/Experiences";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/experiences" element={<Experiences />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
