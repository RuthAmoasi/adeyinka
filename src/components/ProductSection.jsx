import products from "../data/products";
import "../styles/ProductSection.css";

function ProductSection() {
  return (
    <section className="product-section">
      <div className="product-section__header">
        <div>
          <p className="product-section__eyebrow">THE COLLECTION</p>

          <h2 className="product-section__title">
            Pieces to <span>treasure.</span>
          </h2>
        </div>

        <a href="/shop" className="product-section__view-all">
          VIEW ALL PRODUCTS <span aria-hidden="true">→</span>
        </a>
      </div>

      <div className="product-section__grid">
        {products.map((product) => (
          <article className="product-card" key={product.id}>
            <a
              href={`/product/${product.id}`}
              className="product-card__image-wrap"
              aria-label={`View ${product.name}`}
            >
              <img
                className="product-card__image"
                src={product.image}
                alt={product.name}
                loading="lazy"
              />

              {product.label && (
                <span className="product-card__label">{product.label}</span>
              )}

              <span className="product-card__view" aria-hidden="true">
                VIEW DETAILS ↗
              </span>
            </a>

            <div className="product-card__info">
              <h3 className="product-card__name">{product.name}</h3>

              <p className="product-card__price">
                GH₵{product.price.toFixed(2)}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProductSection;
