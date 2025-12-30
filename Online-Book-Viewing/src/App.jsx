import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home.jsx";
import About from "./Pages/About/About.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import BookDetails from "./components/BookDetails/BookDetails.jsx";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/book/:bookId" element={<BookDetails/>} />
      </Routes>
    </div>
  );
}

export default App;
