import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../App';
import '../css/pages.css';
import '../css/cart.css';
import Navbar from '../Components/navbar';
import Footer from '../Components/footer';

function Cart() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  const [ordered, setOrdered] = useState(false);
  const [orderedItems, setOrderedItems] = useState([]);
  const [orderedForm, setOrderedForm] = useState(null);
  const [form, setForm] = useState({
    name: '', email: '', address: '', city: '', postal: '',
  });

  const total = cart.reduce((sum, item) => sum + parseFloat(item.price.replace('€', '')), 0);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleOrder = () => {
    if (!form.name || !form.email || !form.address || !form.city || !form.postal) {
      alert('Please fill in all fields before placing your order.');
      return;
    }
    setOrderedItems([...cart]);
    setOrderedForm({ ...form });
    setOrdered(true);
    if (clearCart) clearCart();
  };

  const orderTotal = orderedItems.reduce(
    (sum, item) => sum + parseFloat(item.price.replace('€', '')), 0
  );

  const orderNumber = `NW-${Date.now().toString().slice(-6)}`;

  if (ordered) {
    return (
      <div className="container">
        <Navbar />
        <div className="confirm-page">

          {/* Header */}
          <div className="confirm-header">
            <div className="confirm-check">✓</div>
            <h1>Order Confirmed!</h1>
            <p className="confirm-sub">
              Thank you, <strong>{orderedForm.name}</strong>. A confirmation will be sent to{' '}
              <strong>{orderedForm.email}</strong>.
            </p>
            <span className="confirm-order-number">Order #{orderNumber}</span>
          </div>

          <div className="confirm-body">

            {/* Items */}
            <div className="confirm-items-block">
              <h2>Items ordered</h2>
              <div className="confirm-items">
                {orderedItems.map((item, index) => (
                  <div className="confirm-item-row" key={index}>
                    <img src={item.image} alt={item.name} className="confirm-item-img" />
                    <div className="confirm-item-info">
                      <h3>{item.name}</h3>
                      <p>Size: <span>{item.size}</span></p>
                      <p>Category: <span>{item.category}</span></p>
                    </div>
                    <p className="confirm-item-price">{item.price}</p>
                  </div>
                ))}
              </div>

              {/* Order total */}
              <div className="confirm-totals">
                <div className="confirm-total-row">
                  <span>Subtotal</span>
                  <span>€{orderTotal.toFixed(2)}</span>
                </div>
                <div className="confirm-total-row">
                  <span>Shipping</span>
                  <span className="free-shipping">Free</span>
                </div>
                <div className="confirm-total-row confirm-grand-total">
                  <span>Total paid</span>
                  <span>€{orderTotal.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Delivery details */}
            <div className="confirm-details-block">
              <h2>Delivery details</h2>
              <div className="confirm-detail-card">
                <p className="confirm-detail-label">Full name</p>
                <p className="confirm-detail-value">{orderedForm.name}</p>

                <p className="confirm-detail-label">Email</p>
                <p className="confirm-detail-value">{orderedForm.email}</p>

                <p className="confirm-detail-label">Shipping address</p>
                <p className="confirm-detail-value">
                  {orderedForm.address}<br />
                  {orderedForm.postal} {orderedForm.city}
                </p>

                <p className="confirm-detail-label">Estimated delivery</p>
                <p className="confirm-detail-value">3–5 business days</p>
              </div>

              <div className="confirm-trust">
                <span>🔒 Payment secured</span>
                <span>🚚 Free shipping</span>
                <span>↩️ Easy returns</span>
              </div>

              <Link to="/clothes">
                <button className="cart-btn-primary full-width" style={{ marginTop: '24px' }}>
                  Continue Shopping
                </button>
              </Link>
            </div>

          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="container">
      <Navbar />
      <div className="cart-page">

        {cart.length === 0 ? (
          <div className="cart-empty">
            <div className="empty-bag-icon">🛍️</div>
            <h2>Your cart is empty</h2>
            <p>Looks like you haven't added anything yet.</p>
            <Link to="/clothes"><button className="cart-btn-primary">Browse Clothes</button></Link>
          </div>
        ) : (
          <div className="cart-layout">

            {/* LEFT: items */}
            <div className="cart-left">
              <h2 className="cart-section-title">
                Your Cart <span className="cart-badge">{cart.length}</span>
              </h2>

              <div className="cart-items">
                {cart.map((item, index) => (
                  <div className="cart-row" key={index}>
                    <img src={item.image} alt={item.name} className="cart-row-img" />
                    <div className="cart-row-info">
                      <h3>{item.name}</h3>
                      <p className="cart-row-meta">Size: <span>{item.size}</span></p>
                      <p className="cart-row-meta">Category: <span>{item.category}</span></p>
                    </div>
                    <div className="cart-row-right">
                      <p className="cart-row-price">{item.price}</p>
                      <button className="cart-remove" onClick={() => removeFromCart(index)} title="Remove">✕</button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="cart-summary">
                <div className="cart-summary-row">
                  <span>Subtotal</span>
                  <span>€{total.toFixed(2)}</span>
                </div>
                <div className="cart-summary-row">
                  <span>Shipping</span>
                  <span className="free-shipping">Free</span>
                </div>
                <div className="cart-summary-row cart-total-row">
                  <span>Total</span>
                  <span>€{total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* RIGHT: checkout */}
            <div className="cart-right">
              <h2 className="cart-section-title">Checkout</h2>

              <div className="checkout-fields">
                <label>Full name
                  <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} />
                </label>
                <label>Email address
                  <input type="email" name="email" placeholder="Example@outlook.com" value={form.email} onChange={handleChange} />
                </label>
                <label>Shipping address
                  <input type="text" name="address" placeholder="Street" value={form.address} onChange={handleChange} />
                </label>
                <div className="checkout-row">
                  <label>City
                    <input type="text" name="city" placeholder="City" value={form.city} onChange={handleChange} />
                  </label>
                  <label>Postal code
                    <input type="text" name="postal" placeholder="0000 AA" value={form.postal} onChange={handleChange} />
                  </label>
                </div>
              </div>

              <div className="checkout-divider" />

              <div className="checkout-trust">
                <span>🔒 Secure checkout</span>
                <span>🚚 Free shipping</span>
                <span>↩️ Easy returns</span>
              </div>

              <button className="cart-btn-primary full-width" onClick={handleOrder}>
                Place Order — €{total.toFixed(2)}
              </button>
            </div>

          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Cart;