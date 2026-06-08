import { Link } from 'react-router-dom';
import '../css/home.css';
import Navbar from '../Components/navbar';
import Footer from '../Components/footer';
import vid from '../source/vid.mp4';

function Home() {
  return (
    <div className="container">
      <Navbar />
      <div className="containerOne">
        <video className="bg-video" autoPlay muted loop playsInline>
          <source src={vid} type="video/mp4" />
        </video>
        <div className="containerOne__content">
          <h1>NewWhite</h1>
          <p>Discover timeless clothing crafted for everyday elegance...</p>
          <Link to="/shop"><button>Go to store</button></Link>
        </div>
      </div>
      {/* rest of your Home content stays the same */}
      <Footer />
    </div>
  );
}

export default Home;