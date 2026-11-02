import { useState } from "react";
import products from "../data/products";
import "../styles/Shop.css";

function Shop() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <main className="shop-page">
      <section className="shop-page__hero">
        <p className="shop-page__eyebrow">THE ADEYINKA COLLECTION</p>
        <h1>
          Find your <span>style.</span>
        </h1>
        <p className="shop-page__intro">
          Explore timeless styles designed to make every moment special.
        </p>
      </section>

      <section className="shop-catalogue">
        <div className="shop-catalogue__header">
          <div>
            <p className="shop-catalogue__eyebrow">CURATED FOR YOU</p>
            <h2>Our Collection</h2>
            <p className="shop-catalogue__count">
              {filteredProducts.length} pieces to discover
            </p>
          </div>

          <input
            className="shop-catalogue__search"
            type="search"
            placeholder="Search styles..."
            aria-label="Search products"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </div>

        {filteredProducts.length > 0 ? (
          <div className="shop-catalogue__grid">
            {filteredProducts.map((product) => (
              <article className="shop-product" key={product.id}>
                <a
                  href={`/product/${product.id}`}
                  className="shop-product__image-wrap"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="shop-product__image"
                    loading="lazy"
                  />

                  {product.label && (
                    <span className="shop-product__label">{product.label}</span>
                  )}
                </a>

                <div className="shop-product__details">
                  <h3>{product.name}</h3>
                  <p>GH₵{product.price.toFixed(2)}</p>
                </div>

                <a
                  href={`/product/${product.id}`}
                  className="shop-product__button"
                >
                  VIEW DETAILS <span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>
        ) : (
          <p className="shop-catalogue__empty">
            No products match your search. Try another name.
          </p>
        )}
      </section>
    </main>
  );
}

export default Shop;
