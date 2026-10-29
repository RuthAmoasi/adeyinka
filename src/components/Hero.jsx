import "../styles/Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <p className="hero__eyebrow">TIMELESS AFRICAN ELEGANCE</p>

        <h1 className="hero__title">
          Elegance that
          <br />
          feels like <span>you.</span>
        </h1>

        <p className="hero__description">
          Discover beautiful boubou styles designed to make every moment feel
          special. Find the style that speaks to you.
        </p>

        <a href="/shop" className="hero__button">
          SHOP THE COLLECTION
          <span aria-hidden="true">→</span>
        </a>

        <p className="hero__note">EFFORTLESS STYLE. TIMELESS BEAUTY.</p>
      </div>

      <div className="hero__visual">
        <img
          className="hero__image"
          src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1200&q=85"
          alt="Fashion model showcasing an elegant outfit"
        />

        <div className="hero__image-caption">
          <span>THE ADEYINKA EDIT</span>
          <span>01 / TIMELESS</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
