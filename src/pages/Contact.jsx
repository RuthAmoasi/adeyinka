import { Link } from "react-router-dom";
import "../styles/Contact.css";

function Contact() {
  return (
    <main className="contact-page">
      <section className="contact-hero">
        <p className="contact-hero__eyebrow">WE'RE HERE FOR YOU</p>

        <h1>
          We'd love to <span>hear from you.</span>
        </h1>

        <p className="contact-hero__intro">
          Have a question about our collection, colours, sizing or an order?
          We'd be happy to help you find exactly what you're looking for.
        </p>
      </section>

      <section className="contact-content">
        <div className="contact-card">
          <div className="contact-card__icon">
            <span>01</span>
          </div>

          <h2>Chat with us</h2>

          <p>
            Have questions about our collection, colours, sizing or orders? Send
            us a message on WhatsApp. We'd love to help.
          </p>

          <a
            href="https://wa.me/233502064518"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card__button"
          >
            CHAT ON WHATSAPP ↗
          </a>

          <p className="contact-card__phone">WhatsApp: 050 206 4518</p>

          <a href="tel:+233541357031" className="contact-card__call">
            CALL US: 054 135 7031
          </a>
        </div>

        <div className="contact-card">
          <div className="contact-card__icon">
            <span>02</span>
          </div>

          <h2>Explore our collection</h2>

          <p>
            Discover our collection of thoughtfully designed pieces and find a
            style that speaks to you.
          </p>

          <Link to="/shop" className="contact-card__link">
            EXPLORE COLLECTION →
          </Link>
        </div>
      </section>

      <section className="contact-note">
        <h2>Surrounded by Royalty.</h2>
        <p>Thank you for choosing Adeyinka.</p>
      </section>
    </main>
  );
}

export default Contact;
