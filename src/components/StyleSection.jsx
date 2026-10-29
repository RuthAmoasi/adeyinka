import "../styles/StyleSection.css";

const styles = [
  {
    id: "style-a",
    name: "The Classic",
    description: "Effortless elegance for every day.",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=85",
    number: "01",
  },
  {
    id: "style-b",
    name: "The Statement",
    description: "Distinctive silhouettes that stand out.",
    image:
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=85",
    number: "02",
  },
  {
    id: "style-c",
    name: "The Occasion",
    description: "Something special for memorable moments.",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=85",
    number: "03",
  },
];

function StyleSection() {
  return (
    <section className="style-section">
      <div className="style-section__header">
        <div>
          <p className="style-section__eyebrow">FIND YOUR STYLE</p>
          <h2 className="style-section__title">
            Made for <span>your moments.</span>
          </h2>
        </div>

        <p className="style-section__intro">
          Explore our collections and discover a style that feels uniquely
          yours.
        </p>
      </div>

      <div className="style-section__grid">
        {styles.map((style) => (
          <a
            href={`/shop?style=${style.id}`}
            className="style-card"
            key={style.id}
          >
            <div className="style-card__image-wrap">
              <img
                className="style-card__image"
                src={style.image}
                alt={`${style.name} fashion collection`}
                loading="lazy"
              />

              <span className="style-card__number">{style.number}</span>

              <span className="style-card__arrow" aria-hidden="true">
                ↗
              </span>
            </div>

            <div className="style-card__details">
              <div>
                <h3 className="style-card__name">{style.name}</h3>
                <p className="style-card__description">{style.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default StyleSection;
