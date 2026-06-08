import { Link } from 'react-router-dom';
import '../css/footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="container-footer">
        <div className="footer-top">
          <div className="footer-left">
            <div className="footer-logo"></div>
            <div className="footer-links-vertical">
              <Link to="/clothes">Clothes</Link>
              <Link to="/about">About us</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>
          <div className="footer-middle">
            <Link to="/clothes">New arrivals</Link>
            <Link to="/clothes">Tops</Link>
            <Link to="/clothes">Bottoms</Link>
            <Link to="/clothes">Outerwear</Link>
            <Link to="/contact" className="contact-btn">Contact</Link>
          </div>
        </div>
        <div className="footer-under-text">
          <h1><em>NewWhite</em></h1>
        </div>
      </div>
    </div>
  );
}

export default Footer;