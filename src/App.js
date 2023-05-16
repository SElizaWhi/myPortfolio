import "./App.css";
import Intro from "./pages/intro";
import Header from "./components/header";
import Projects from "./pages/Projects"; // lowercase p
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <div>
        <Header/>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={null} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
