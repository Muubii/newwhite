import { Link } from 'react-router-dom';
import '../css/navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <h1>NewWhite</h1>
      </Link>
      <div className="nav-links">
        <Link to="/shop">Shop</Link>
        <Link to="/clothes">Clothes</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart">Cart</Link>
      </div>
    </nav>
  );
}

export default Navbar;