import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/home.css';
import Navbar from '../Components/navbar';
import Footer from '../Components/footer';
import vid from '../source/vid.mp4';

function Home() {

  const slideImages = [
    {
      src: 'https://images.unsplash.com/photo-1589310243389-96a5483213a8?w=800&auto=format&fit=crop',
      alt: 'Classic Overshirt',
    },
    {
      src: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&auto=format&fit=crop',
      alt: 'Essential Tee',
    },
    {
      src: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=800&auto=format&fit=crop',
      alt: 'Linen Shirt',
    },
    {
      src: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800&auto=format&fit=crop',
      alt: 'Slim Chinos',
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slideImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slideImages.length]);

  return (
    <div className="container">
      <Navbar />

      {/* ── HERO ── */}
      <div className="containerOne">
        <video className="bg-video" autoPlay muted loop playsInline>
          <source src={vid} type="video/mp4" />
        </video>
        <div className="containerOne__content">
          <h1>NewWhite</h1>
          <p>Discover timeless clothing crafted for everyday elegance. Clean cuts, quality fabrics, and pieces that last beyond the season.</p>
          <Link to="/clothes"><button>Go to store</button></Link>
        </div>
        <div className="hero-scroll-hint">
          <span>scroll</span>
          <div className="hero-scroll-line" />
        </div>
      </div>

      {/* ── WHO WE ARE ── */}
      <div className="containerTwo">
        <div className="TextTwo">
          <span className="section-label">Our story</span>
          <h4>Who we are</h4>
          <p>NewWhite was born from a simple idea — that everyday clothing should feel just as good as it looks. We design refined, effortless pieces built from quality fabrics that stand the test of time. No fast fashion, no empty trends. Just clothing made with intention, for the life you actually live.</p>
          <Link to="/about" className="text-link">Learn more →</Link>
        </div>
        <div className="ImageTwo">
          <img
            src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800&auto=format&fit=crop"
            alt="NewWhite collection"
          />
        </div>
      </div>

      {/* ── COLLECTION ── */}
      <div className="containerThree">
        <div className="collection-layout">

          {/* Left: slideshow */}
          <div className="collection-feature">
            <div className="collection-feature-img">
              {slideImages.map((img, i) => (
                <img
                  key={i}
                  src={img.src}
                  alt={img.alt}
                  className={`slide-img ${i === activeSlide ? 'slide-img--active' : ''}`}
                />
              ))}
              <div className="collection-feature-overlay">
                <span className="col-label">The Collection</span>
                <h2>Crafted for<br />everyday life</h2>
                <Link to="/clothes" className="col-feature-link">Shop now →</Link>
              </div>
              <div className="slide-dots">
                {slideImages.map((_, i) => (
                  <button
                    key={i}
                    className={`slide-dot ${i === activeSlide ? 'slide-dot--active' : ''}`}
                    onClick={() => setActiveSlide(i)}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right: stacked items */}
          <div className="collection-right">
            <div className="collection-right-header">
              <p className="col-overline">SS 2026</p>
              <h3>Our essentials</h3>
              <p className="col-sub">Four pieces built to last beyond the season.</p>
            </div>

            <div className="col-items">
              {[
                {
                  img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&auto=format&fit=crop',
                  name: 'Essential Tee',
                  price: '€24.99',
                  tag: 'Bestseller',
                },
                {
                  img: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=300&auto=format&fit=crop',
                  name: 'Slim Chinos',
                  price: '€39.99',
                  tag: 'New',
                },
                {
                  img: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=300&auto=format&fit=crop',
                  name: 'Linen Shirt',
                  price: '€34.99',
                  tag: null,
                },
                {
                  img: 'https://images.unsplash.com/photo-1589310243389-96a5483213a8?w=300&auto=format&fit=crop',
                  name: 'Classic Overshirt',
                  price: '€49.99',
                  tag: null,
                },
              ].map((item, i) => (
                <Link
                  to="/clothes"
                  key={i}
                  className="col-item"
                  style={{ textDecoration: 'none' }}
                >
                  <div className="col-item-img">
                    <img src={item.img} alt={item.name} />
                  </div>
                  <div className="col-item-info">
                    <div className="col-item-top">
                      <span className="col-item-name">{item.name}</span>
                      {item.tag && <span className="col-item-tag">{item.tag}</span>}
                    </div>
                    <span className="col-item-price">{item.price}</span>
                  </div>
                  <span className="col-item-arrow">→</span>
                </Link>
              ))}
            </div>

            <Link to="/clothes">
              <button className="collection-btn">View all pieces</button>
            </Link>
          </div>

        </div>
      </div>

      {/* ── BANNER STRIP ── */}
      <div className="banner-strip">
        {['Free shipping over €75', 'New arrivals every week', 'Sustainable materials', 'Easy 30-day returns'].map((t, i) => (
          <span key={i} className="banner-strip-item">{t}</span>
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default Home;