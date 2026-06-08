import { useState, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './css/animations.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Clothes from './pages/Clothes';
import Cart from './pages/Cart';

export const CartContext = createContext();

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => setCart((prev) => [...prev, item]);

  const removeFromCart = (index) => setCart((prev) => prev.filter((_, i) => i !== index));

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clothes" element={<Clothes />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </CartContext.Provider>
  );
}

export default App;