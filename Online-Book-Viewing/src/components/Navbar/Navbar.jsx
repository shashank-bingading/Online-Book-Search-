import { Link } from "react-router-dom";
import "./Navbar.css";
import SearchBar from "../SearchBar/SearchBar";

const Navbar = ({ onSearch }) => {
  return (
    <nav className="navbar">
      <div className="nav-content">
        <Link to="/" className="nav-logo">
         <img src="/logo.png" alt="HerSoftLibrary Logo" className="logo-img" />
          HerSoftLibrary
        </Link>
        <div className="nav-links">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
          <SearchBar onSearch={onSearch} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
