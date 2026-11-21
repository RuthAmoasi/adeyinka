import { useState } from "react";
import { Link } from "react-router-dom";
import collections from "../data/products";
import "../styles/Shop.css";

function Shop() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCollection, setSelectedCollection] = useState(null);

  const filteredProducts = selectedCollection
    ? selectedCollection.products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    : [];

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
            }}
          >
            ← BACK TO COLLECTIONS
          </button>

          <div className="shop-catalogue__header">
            <div>
              <p className="shop-catalogue__eyebrow">
                {selectedCollection.name}
              </p>
              <h2>Explore the styles</h2>
              <p className="shop-catalogue__count">
                {filteredProducts.length} designs to discover
              </p>
            </div>

            <input
              className="shop-catalogue__search"
              type="search"
              placeholder="Search styles..."
              aria-label="Search styles"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
          </div>

          {filteredProducts.length > 0 ? (
            <div className="shop-catalogue__grid">
              {filteredProducts.map((product) => {
                const firstColour = product.colours[0];

                return (
                  <article className="shop-product" key={product.id}>
                    <div className="shop-product__image-wrap">
                      {firstColour?.image ? (
                        <img
                          src={firstColour.image}
                          alt={product.name}
                          className="shop-product__image"
                          loading="lazy"
                        />
                      ) : (
                        <div className="shop-product__placeholder">
                          <span>{product.name}</span>
                          <small>PRODUCT IMAGE COMING SOON</small>
                        </div>
                      )}
                    </div>

                    <div className="shop-product__details">
                      <h3>{product.name}</h3>
                      <p>{product.meaning}</p>
                      <p>GH₵{product.price.toFixed(2)}</p>
                    </div>

                    <Link
                      to={`/product/${product.id}`}
                      className="shop-product__button"
                    >
                      VIEW DETAILS <span aria-hidden="true">↗</span>
                    </Link>
                  </article>
                );
              })}
            </div>
          ) : (
            <p className="shop-catalogue__empty">
              No styles match your search. Try another name.
            </p>
          )}
        </section>
      )}
    </main>
  );
}

export default Shop;
