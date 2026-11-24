import { useState } from "react";
import collections from "../data/products";
import { useCart } from "../context/useCart";
import "../styles/Shop.css";

function Shop() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCollection, setSelectedCollection] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState(null);

  const { addToCart } = useCart();

  const search = searchTerm.toLowerCase().trim();

  const filteredProducts = selectedCollection
    ? selectedCollection.products
        .map((product) => ({
          ...product,
          colours: product.colours.filter(
            (colour) =>
              product.name.toLowerCase().includes(search) ||
              colour.name.toLowerCase().includes(search),
          ),
        }))
        .filter((product) => product.colours.length > 0)
    : [];

  function handleAddToCart(product, colour) {
    addToCart({
      ...product,
      id: `${product.id}-${colour.id}`,
      image: colour.image,
      selectedColour: colour.name,
    });
  }

  return (
    <main className="shop-page">
      <section className="shop-page__hero">
        <p className="shop-page__eyebrow">THE ADEYINKA COLLECTION</p>

        <h1>
          Timeless pieces. <span>Stories in every stitch.</span>
        </h1>

        <p className="shop-page__intro">
          Discover thoughtfully designed boubou styles that celebrate elegance,
          femininity and the beauty of African fashion.
        </p>

        <button
          type="button"
          className="shop-page__hero-button"
          onClick={() => setSelectedCollection(collections[0])}
        >
          EXPLORE COLLECTION <span>↗</span>
        </button>
      </section>

      {!selectedCollection ? (
        <section className="shop-catalogue">
          <div className="shop-catalogue__header">
            <div>
              <p className="shop-catalogue__eyebrow">DISCOVER ADEYINKA</p>
              <h2>Our Collections</h2>
              <p className="shop-catalogue__count">
                {collections.length} collections to discover
              </p>
            </div>
          </div>

          <div className="collection-grid">
            {collections.map((collection) => (
              <article className="collection-card" key={collection.id}>
                <div className="collection-card__content">
                  <p className="collection-card__eyebrow">
                    THE FIRST COLLECTION
                  </p>

                  <h3>{collection.name}</h3>

                  <p>{collection.description}</p>

                  <span>{collection.products.length} signature designs</span>

                  <button
                    type="button"
                    className="shop-product__button"
                    onClick={() => setSelectedCollection(collection)}
                  >
                    EXPLORE COLLECTION <span aria-hidden="true">↗</span>
                  </button>
                </div>

                <div className="collection-card__visual">
                  <span>01</span>
                  <p>AN EXPRESSION OF ELEGANCE</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      ) : (
        <section className="shop-catalogue">
          <button
            type="button"
            className="shop-back-button"
            onClick={() => {
              setSelectedCollection(null);
              setSearchTerm("");
              setSelectedVariant(null);
            }}
          >
            ← BACK TO COLLECTIONS
          </button>

          <div className="shop-catalogue__header">
            <div>
              <p className="shop-catalogue__eyebrow">
                {selectedCollection.name}
              </p>
              <h2>Explore the designs</h2>
              <p className="shop-catalogue__count">
                {filteredProducts.reduce(
                  (total, product) => total + product.colours.length,
                  0,
                )}{" "}
                designs to discover
              </p>
            </div>

            <input
              className="shop-catalogue__search"
              type="search"
              placeholder="Search styles or colours..."
              aria-label="Search styles or colours"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
          </div>

          {filteredProducts.length > 0 ? (
            <div className="shop-style-groups">
              {filteredProducts.map((product) => (
                <section className="shop-style-group" key={product.id}>
                  <div className="shop-style-group__heading">
                    <div>
                      <h3>{product.name} Designs</h3>
                      <p>{product.meaning}</p>
                    </div>
                  </div>

                  <div className="shop-catalogue__grid">
                    {product.colours.map((colour) => (
                      <article
                        className="shop-product"
                        key={`${product.id}-${colour.id}`}
                      >
                        <div className="shop-product__image-wrap">
                          <button
                            type="button"
                            className="shop-product__image-trigger"
                            onClick={() =>
                              setSelectedVariant({ product, colour })
                            }
                            aria-label={`View ${product.name} in ${colour.name}`}
                          >
                            {colour.image ? (
                              <img
                                src={colour.image}
                                alt={`${product.name} in ${colour.name}`}
                                className="shop-product__image"
                                loading="lazy"
                              />
                            ) : (
                              <div className="shop-product__placeholder">
                                <span>{product.name}</span>
                                <small>{colour.name}</small>
                              </div>
                            )}
                          </button>

                          <button
                            type="button"
                            className="shop-product__quick-add"
                            onClick={() => handleAddToCart(product, colour)}
                            aria-label={`Add ${product.name} in ${colour.name} to cart`}
                            title="Add to cart"
                          >
                            +
                          </button>
                        </div>

                        <div className="shop-product__details">
                          <h3>{product.name}</h3>
                          <p>{colour.name}</p>
                          <p>GH₵{product.price.toFixed(2)}</p>
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          ) : (
            <p className="shop-catalogue__empty">
              No designs match your search. Try another name or colour.
            </p>
          )}
        </section>
      )}

      {selectedVariant && (
        <div className="shop-modal" onClick={() => setSelectedVariant(null)}>
          <div
            className="shop-modal__content"
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedVariant.product.name} details`}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="shop-modal__close"
              onClick={() => setSelectedVariant(null)}
              aria-label="Close product details"
            >
              ×
            </button>

            <div className="shop-modal__image-wrap">
              {selectedVariant.colour.image ? (
                <img
                  src={selectedVariant.colour.image}
                  alt={`${selectedVariant.product.name} in ${selectedVariant.colour.name}`}
                />
              ) : (
                <div className="shop-product__placeholder">
                  <span>{selectedVariant.product.name}</span>
                  <small>{selectedVariant.colour.name}</small>
                </div>
              )}
            </div>

            <div className="shop-modal__details">
              <p className="shop-catalogue__eyebrow">
                {selectedCollection.name}
              </p>

              <h2>{selectedVariant.product.name}</h2>

              <p className="shop-modal__colour">
                {selectedVariant.colour.name}
              </p>

              <p className="shop-modal__price">
                GH₵{selectedVariant.product.price.toFixed(2)}
              </p>

              <p className="shop-modal__description">
                {selectedVariant.product.description}
              </p>

              <div className="shop-modal__fit">
                <h3>Designed to fit</h3>
                <p>{selectedVariant.product.sizeRange}</p>
              </div>

              <button
                type="button"
                className="shop-modal__add-button"
                onClick={() => {
                  handleAddToCart(
                    selectedVariant.product,
                    selectedVariant.colour,
                  );
                  setSelectedVariant(null);
                }}
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default Shop;
