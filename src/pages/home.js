import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/home.css';
import Navbar from '../Components/navbar';
import Footer from '../Components/footer';
import vid from '../source/vid.mp4';
import items from '../data/items';

function Home() {
  const featuredIds = [1, 3, 4, 2];
  const featuredItems = featuredIds.map(id => items.find(item => item.id === id));

  const slideImages = featuredItems.map(item => ({
    src: item.image,
    alt: item.name,
  }));

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
            alt="Stylish person wearing minimalist fashion"
          />
        </div>
      </div>

      {/* ── BANNER STRIP ── */}
      <div className="banner-strip">
        {['Free shipping over €75', 'New arrivals every week', 'Sustainable materials', 'Easy 30-day returns'].map((t, i) => (
          <span key={i} className="banner-strip-item">{t}</span>
        ))}
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
              {featuredItems.map((item, i) => (
                <Link
                  to={`/clothes?item=${item.id}`}
                  key={item.id}
                  className="col-item"
                  style={{ textDecoration: 'none' }}
                >
                  <div className="col-item-img">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="col-item-info">
                    <div className="col-item-top">
                      <span className="col-item-name">{item.name}</span>
                      {i === 0 && <span className="col-item-tag">Bestseller</span>}
                      {i === 1 && <span className="col-item-tag">New</span>}
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

      <Footer />
    </div>
  );
}

export default Home;