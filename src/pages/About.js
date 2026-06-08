import '../css/pages.css';
import Navbar from '../Components/navbar';
import Footer from '../Components/footer';

function About() {
  return (
    <div className="container">
      <Navbar />
      <div className="page">
        <h1>About NewWhite</h1>
        <p>
          NewWhite creates timeless, minimalist clothing for everyday wear.
          We focus on clean design, quality materials, and pieces built to last.
        </p>
        <p>
          Founded with a simple idea — great clothing doesn't have to be complicated.
          We design wardrobe essentials for people who value quality over quantity.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default About;