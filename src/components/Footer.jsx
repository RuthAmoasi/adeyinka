import { Link } from "react-router-dom";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="footer__brand">
          <Link to="/" className="footer__logo">
            <img
              src="/images/adeyinka-logo.png"
              alt="Adeyinka — Surrounded by Royalty"
              className="footer__logo-image"
            />
          </Link>

          <p className="footer__description">
            Timeless style, thoughtful details, and pieces that celebrate the
            way you choose to express yourself.
          </p>
        </div>

        <div className="footer__column">
          <h3 className="footer__heading">EXPLORE</h3>
          <Link to="/">Home</Link>
          <Link to="/shop">Shop All</Link>
          <Link to="/#about">Our Story</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        <div className="footer__column">
          <h3 className="footer__heading">CUSTOMER CARE</h3>
          <Link to="/contact">Ordering & Enquiries</Link>
        </div>

        <div className="footer__column footer__contact">
          <h3 className="footer__heading">GET IN TOUCH</h3>
          <p>Have a question or need help finding your style?</p>
          <Link to="/contact" className="footer__contact-link">
            We'd love to hear from you →
          </Link>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} Adeyinka. All rights reserved.</p>

        <p className="footer__bottom-tagline">
          MADE WITH CARE. WORN WITH CONFIDENCE.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
