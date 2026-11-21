import { Link } from "react-router-dom";
import "../styles/StyleSection.css";

const styles = [
  {
    id: "tiwa",
    name: "Tiwa Dress",
    description: "One who owns the crown.",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=85",
    number: "01",
  },
  {
    id: "bisi",
    name: "Bisi Dress",
    description: "Crown multiplied.",
    image:
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=85",
    number: "02",
  },
  {
    id: "oge",
    name: "Oge Dress",
    description: "Fashion, style and beauty.",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=85",
    number: "03",
  },
  {
    id: "zola",
    name: "Zola Dress",
    description: "A grounding connection to the earth.",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=85",
    number: "04",
  },
];

function StyleSection() {
  return (
    <section className="style-section">
      <div className="style-section__header">
        <div>
          <p className="style-section__eyebrow">THE ADEYINKA COLLECTION</p>

          <h2 className="style-section__title">
            Introducing <span>Collection 01.</span>
          </h2>
        </div>

        <p className="style-section__intro">
          Four distinctive designs, each with a story of its own. Discover the
          first collection by Adeyinka.
        </p>
      </div>

      <div className="style-section__collection-label">
        <span>COLLECTION 01</span>
        <span>FOUR SIGNATURE DESIGNS</span>
      </div>

      <div className="style-section__grid">
        {styles.map((style) => (
          <Link to="/shop" className="style-card" key={style.id}>
            <div className="style-card__image-wrap">
              <img
                className="style-card__image"
                src={style.image}
                alt={`${style.name} collection`}
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
          </Link>
        ))}
      </div>

      <div className="style-section__footer">
        <Link to="/shop" className="style-section__button">
          EXPLORE THE COLLECTION <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </section>
  );
}

export default StyleSection;
