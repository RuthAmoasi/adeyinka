import "../styles/AboutSection.css";

function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-section__visual">
        <img
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85"
          alt="Fashion portrait representing the Adeyinka brand"
          className="about-section__image"
          loading="lazy"
        />

        <div className="about-section__image-note">
          ADEYINKA — SURROUNDED BY ROYALTY
        </div>
      </div>

      <div className="about-section__content">
        <p className="about-section__eyebrow">THE HEART OF ADEYINKA</p>

        <h2 className="about-section__title">
          Style is personal.
          <br />
          <span>Elegance is timeless.</span>
        </h2>

        <p className="about-section__description">
          At Adeyinka, we believe what you wear should help you feel confident,
          comfortable, and beautifully yourself. Our collection celebrates
          expressive style through thoughtfully chosen designs.
        </p>

        <p className="about-section__description">
          From everyday moments to special occasions, discover pieces that make
          getting dressed feel special.
        </p>

        <a href="/about" className="about-section__link">
          DISCOVER OUR STORY <span aria-hidden="true">→</span>
        </a>

        <p className="about-section__signature">SURROUNDED BY ROYALTY</p>
      </div>
    </section>
  );
}

export default AboutSection;
