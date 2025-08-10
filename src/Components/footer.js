import '../css/footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="container-footer">
        
        <div className="footer-top">
          <div className="footer-left">
            <div className="footer-logo"></div>
            <div className="footer-links-vertical">
              <a href="/About">About us</a>
              <a href="/About">About us</a>
              <a href="/About">About us</a>
            </div>
          </div>

          <div className="footer-middle">
            <a href="/About">About us</a>
            <a href="/About">About us</a>
            <a href="/About">About us</a>
            <a href="/About">About us</a>
            <a href="/About">About us</a>
            <a href="/Contact" className="contact-btn">Contact</a>
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
