import '../css/pages.css';
import Navbar from '../Components/navbar';
import Footer from '../Components/footer';

const items = [
  { name: 'Essential Tee', price: '€24.99', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&auto=format&fit=crop' },
  { name: 'Classic Overshirt', price: '€49.99', image: 'https://images.unsplash.com/photo-1589310243389-96a5483213a8?w=400&auto=format&fit=crop' },
  { name: 'Slim Chinos', price: '€39.99', image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400&auto=format&fit=crop' },
  { name: 'Linen Shirt', price: '€34.99', image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=400&auto=format&fit=crop' },
];

function Shop() {
  return (
    <div className="container">
      <Navbar />
      <div className="page">
        <h1>Shop</h1>
        <p>Browse all NewWhite essentials.</p>
        <div className="product-grid">
          {items.map((item, index) => (
            <div className="product-card" key={index}>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.price}</p>
              <button>Add to cart</button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Shop;