import { useState, useContext, useRef, useEffect } from 'react';
import { CartContext } from '../App';
import '../css/pages.css';
import '../css/clothes.css';
import items from '../data/items';
import Navbar from '../Components/navbar';
import Footer from '../Components/footer';

function ShopCard({ item, onOpen }) {
  const [activeImg, setActiveImg] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef(null);

  const startSlideshow = () => {
    if (item.images.length <= 1) return;
    setIsHovered(true);
    intervalRef.current = setInterval(() => {
      setActiveImg((i) => (i === item.images.length - 1 ? 0 : i + 1));
    }, 3000);
  };

  const stopSlideshow = () => {
    setIsHovered(false);
    clearInterval(intervalRef.current);
    setActiveImg(0);
  };

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div
      className="shop-card"
      onClick={() => onOpen(item)}
      onMouseEnter={startSlideshow}
      onMouseLeave={stopSlideshow}
    >
      <div className="shop-card-img-wrap">
        {item.images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={item.name}
            className={`shop-card-slide ${activeImg === i ? 'active' : ''}`}
          />
        ))}
        <span className="shop-card-tag">{item.category}</span>

        {item.images.length > 1 && (
          <div className="card-dots">
            {item.images.map((_, i) => (
              <span
                key={i}
                className={`card-dot ${activeImg === i ? 'active' : ''}`}
                onClick={(e) => { e.stopPropagation(); setActiveImg(i); }}
              />
            ))}
          </div>
        )}
      </div>

      <div className="shop-card-body">
        <h3>{item.name}</h3>
        <p className="shop-card-price">{item.price}</p>
        <p className="shop-card-hint">Click to view details</p>
      </div>
    </div>
  );
}

const CATEGORIES = ['All', 'Tops', 'Bottoms', 'Outerwear', 'Accessories'];

function Clothes() {
  const { addToCart } = useContext(CartContext);
  const [selected, setSelected] = useState(null);
  const [activeImg, setActiveImg] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);
  const [added, setAdded] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All'
    ? items
    : items.filter(item => item.category.toLowerCase() === activeCategory.toLowerCase());

  const openDetail = (item) => {
    setSelected(item);
    setActiveImg(0);
    setSelectedSize(null);
    setAdded(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closeDetail = () => {
    setSelected(null);
    setActiveImg(0);
    setSelectedSize(null);
    setAdded(false);
  };

  const handleAddToCart = () => {
    if (!selectedSize) return;
    addToCart({ ...selected, size: selectedSize });
    setAdded(true);
  };

  const prevImg = () =>
    setActiveImg((prev) => (prev === 0 ? selected.images.length - 1 : prev - 1));

  const nextImg = () =>
    setActiveImg((prev) => (prev === selected.images.length - 1 ? 0 : prev + 1));

  return (
    <div className="container">
      <Navbar />

      {selected ? (
        <div className="shop-body">
          <div className="detail-view">
            <button className="back-btn" onClick={closeDetail}>← Back to all clothes</button>
            <div className="detail-inner">
              <div className="detail-gallery">
                <div className="detail-carousel">
                  <button className="carousel-btn carousel-prev" onClick={prevImg} aria-label="Previous">‹</button>
                  <img src={selected.images[activeImg]} alt={selected.name} className="detail-main-img" />
                  <button className="carousel-btn carousel-next" onClick={nextImg} aria-label="Next">›</button>
                  <div className="carousel-dots">
                    {selected.images.map((_, i) => (
                      <span
                        key={i}
                        className={`carousel-dot ${activeImg === i ? 'active' : ''}`}
                        onClick={() => setActiveImg(i)}
                      />
                    ))}
                  </div>
                </div>
              </div>

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
                  {added ? 'Added to cart' : 'Add to cart'}
                </button>
                {!selectedSize && <p className="size-warning">Please select a size first</p>}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="clothes-banner">
            <div className="clothes-banner-text">
              <p className="clothes-banner-label">New Collection</p>
              <h1>Essentials, refined.</h1>
              <p>Browse our latest arrivals — timeless pieces designed for the way you live.</p>
            </div>
            <div className="clothes-banner-imgs">
              <img
                src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=500&auto=format&fit=crop"
                alt="Collection preview"
              />
              <img
                src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=500&auto=format&fit=crop"
                alt="Collection preview 2"
              />
            </div>
          </div>

          <div className="shop-filter-nav">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="shop-body">
            <div className="shop-grid">
              {filteredItems.map((item) => (
                <ShopCard key={item.id} item={item} onOpen={openDetail} />
              ))}
            </div>
          </div>
        </>
      )}

      <Footer />
    </div>
  );
}

export default Clothes;