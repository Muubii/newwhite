import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../App';
import '../css/navbar.css';

function Navbar() {
  const { cart } = useContext(CartContext);

  return (
    <nav className="navbar">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <h1>NewWhite</h1>
      </Link>
      <div className="nav-links">
        <Link to="/clothes">Clothes</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart">
          Cart {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;