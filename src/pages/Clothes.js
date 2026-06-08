import { useState, useContext } from 'react';
import { CartContext } from '../App';
import '../css/pages.css';
import '../css/clothes.css';
import Navbar from '../Components/navbar';
import Footer from '../Components/footer';

const clothes = [
  {
    id: 1,
    name: 'Essential Tee',
    category: 'Tops',
    price: '€24.99',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Soft, breathable cotton in neutral tones. A wardrobe staple for every occasion.',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Classic Overshirt',
    category: 'Tops',
    price: '€49.99',
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'A versatile layer that works from morning coffee to an evening out.',
    image: 'https://images.unsplash.com/photo-1589310243389-96a5483213a8?w=600&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Slim Chinos',
    category: 'Bottoms',
    price: '€39.99',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Tailored fit with stretch fabric. Dress them up or down effortlessly.',
    image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Linen Shirt',
    category: 'Tops',
    price: '€34.99',
    sizes: ['XS', 'S', 'M', 'L'],
    description: 'Lightweight and relaxed, made for warm days and easy styling.',
    image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=600&auto=format&fit=crop',
  },
  {
    id: 5,
    name: 'Relaxed Hoodie',
    category: 'Tops',
    price: '€44.99',
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Cozy heavyweight cotton. The kind of hoodie you reach for every day.',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=600&auto=format&fit=crop',
  },
  {
    id: 6,
    name: 'Everyday Denim',
    category: 'Bottoms',
    price: '€54.99',
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Classic straight-leg denim with a clean, minimal finish.',
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&auto=format&fit=crop',
  },
  {
    id: 7,
    name: 'Tailored Jacket',
    category: 'Outerwear',
    price: '€89.99',
    sizes: ['S', 'M', 'L'],
    description: 'A clean silhouette jacket that elevates any outfit instantly.',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&auto=format&fit=crop',
  },
  {
    id: 8,
    name: 'Basic Sweatshirt',
    category: 'Tops',
    price: '€32.99',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    description: 'A clean, unbranded sweatshirt in earthy tones. Simple done right.',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&auto=format&fit=crop',
  },
];

function Clothes() {
  // ← GET addToCart FROM CONTEXT
  const { addToCart } = useContext(CartContext);

  const [selected, setSelected] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [added, setAdded] = useState(false);

  const openDetail = (item) => {
    setSelected(item);
    setSelectedSize(null);
    setAdded(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closeDetail = () => {
    setSelected(null);
    setSelectedSize(null);
    setAdded(false);
  };

  const handleAddToCart = () => {
    if (!selectedSize) return;
    // ← THIS NOW ADDS TO GLOBAL CART
    addToCart({ ...selected, size: selectedSize });
    setAdded(true);
  };

  return (
    <div className="container">
      <Navbar />
      <div className="page">
        {selected ? (
          <div className="detail-view">
            <button className="back-btn" onClick={closeDetail}>← Back to all clothes</button>
            <div className="detail-inner">
              <img src={selected.image} alt={selected.name} className="detail-img" />
              <div className="detail-info">
                <span className="detail-category">{selected.category}</span>
                <h1>{selected.name}</h1>
                <p className="detail-price">{selected.price}</p>
                <p className="detail-desc">{selected.description}</p>
                <div className="size-picker">
                  <p>Select size:</p>
                  <div className="sizes">
                    {selected.sizes.map((s) => (
                      <button
                        key={s}
                        className={`size-btn ${selectedSize === s ? 'active' : ''}`}
                        onClick={() => setSelectedSize(s)}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
                <button
                  className={`add-cart-btn ${!selectedSize ? 'disabled' : ''} ${added ? 'added' : ''}`}
                  onClick={handleAddToCart}
                  disabled={!selectedSize || added}
                >
                  {added ? '✓ Added to cart' : 'Add to cart'}
                </button>
                {!selectedSize && (
                  <p className="size-warning">Please select a size first</p>
                )}
              </div>
            </div>
          </div>
        ) : (
          <>
            <h1>All Clothes</h1>
            <p>Click any item to see details.</p>
            <div className="clothes-grid">
              {clothes.map((item) => (
                <div className="clothes-card" key={item.id} onClick={() => openDetail(item)}>
                  <img src={item.image} alt={item.name} />
                  <div className="clothes-card-info">
                    <span className="clothes-tag">{item.category}</span>
                    <h3>{item.name}</h3>
                    <p>{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Clothes;