import useScrollReveal from '../hooks/useScrollReveal';
import '../css/pages.css';
import '../css/about.css';
import Navbar from '../Components/navbar';
import Footer from '../Components/footer';

function About() {
    useScrollReveal();
  return (
    <div className="container">
      <Navbar />

      <div className="about-hero">
        <div className="about-hero-text">
          <p className="about-label">Our Story</p>
          <h1>Clothing that doesn't complicate things.</h1>
          <p className="about-sub">
            NewWhite was built around one belief — that great style should be effortless.
            No logos, no noise. Just clean pieces made to last.
          </p>
        </div>
        <div className="about-hero-img">
          <img
            src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800&auto=format&fit=crop"
            alt="NewWhite collection"
          />
        </div>
      </div>

      <div className="about-values">
        <h2>What we stand for</h2>
        <div className="about-values-grid">
          <div className="about-value-card">
            <span className="about-value-icon">✦</span>
            <h3>Simplicity</h3>
            <p>Every piece is designed to be versatile, timeless, and free of unnecessary detail.</p>
          </div>
          <div className="about-value-card">
            <span className="about-value-icon">✦</span>
            <h3>Quality</h3>
            <p>We use durable, breathable fabrics that hold their shape wash after wash.</p>
          </div>
          <div className="about-value-card">
            <span className="about-value-icon">✦</span>
            <h3>Longevity</h3>
            <p>We don't follow trends. We make essentials you'll reach for year after year.</p>
          </div>
        </div>
      </div>

      <div className="about-split">
        <div className="about-split-img">
          <img
            src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&auto=format&fit=crop"
            alt="Clothing rack"
          />
        </div>
        <div className="about-split-text">
          <p className="about-label">Who we are</p>
          <h2>A brand built on restraint.</h2>
          <p>
            NewWhite was founded with a simple idea — a wardrobe doesn't need to be complicated.
            We design minimalist essentials for people who value quality over quantity.
          </p>
          <p>
            Each collection is small, intentional, and made to integrate seamlessly
            into your everyday life — from early mornings to late evenings.
          </p>
        </div>
      </div>

      <div className="about-stats">
        <div className="about-stat">
          <h3>8+</h3>
          <p>Core pieces per collection</p>
        </div>
        <div className="about-stat">
          <h3>100%</h3>
          <p>Natural & quality fabrics</p>
        </div>
        <div className="about-stat">
          <h3>Free</h3>
          <p>Shipping on all orders</p>
        </div>
        <div className="about-stat">
          <h3>Easy</h3>
          <p>30-day returns</p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default About;