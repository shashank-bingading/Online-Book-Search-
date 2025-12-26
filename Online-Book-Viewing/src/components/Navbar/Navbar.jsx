import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-content">
        {/* App logo / brand */}
        <Link to="/" className="nav-logo">
          📚 BookSearch
        </Link>

        {/* Right side links */}
        <div className="nav-links">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
