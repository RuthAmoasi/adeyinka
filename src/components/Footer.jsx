import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="footer__brand">
          <a href="/" className="footer__logo">
            ADEYINKA
          </a>

          <p className="footer__tagline">SURROUNDED BY ROYALTY</p>

          <p className="footer__description">
            Timeless style, thoughtful details, and pieces that celebrate the
            way you choose to express yourself.
          </p>
        </div>

        <div className="footer__column">
          <h3 className="footer__heading">EXPLORE</h3>
          <a href="/">Home</a>
          <a href="/shop">Shop All</a>
          <a href="/about">Our Story</a>
          <a href="/contact">Contact Us</a>
        </div>

        <div className="footer__column">
          <h3 className="footer__heading">CUSTOMER CARE</h3>
          <a href="/contact">Ordering & Enquiries</a>
          <a href="/contact">Delivery Information</a>
          <a href="/contact">Returns & Exchanges</a>
          <a href="/contact">Frequently Asked Questions</a>
        </div>

        <div className="footer__column footer__contact">
          <h3 className="footer__heading">GET IN TOUCH</h3>
          <p>Have a question or need help finding your style?</p>
          <a href="/contact" className="footer__contact-link">
            We'd love to hear from you →
          </a>
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
