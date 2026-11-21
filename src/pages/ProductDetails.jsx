import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import collections from "../data/products";
import { useCart } from "../context/useCart";
import "../styles/ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = collections
    .flatMap((collection) => collection.products)
    .find((item) => item.id === id);

  const [selectedColourId, setSelectedColourId] = useState(
    product?.colours?.[0]?.id ?? "",
  );

  if (!product) {
    return (
      <main className="product-details__not-found">
        <h1>Product not found</h1>
        <p>Sorry, we couldn't find that product.</p>
        <Link to="/shop">Return to Shop</Link>
      </main>
    );
  }

  const selectedColour = product.colours.find(
    (colour) => colour.id === selectedColourId,
  );

  const handleAddToCart = () => {
    if (!selectedColour) return;

    addToCart({
      ...product,
      id: `${product.id}-${selectedColour.id}`,
      image: selectedColour.image,
      selectedColour: selectedColour.name,
    });
  };

  return (
    <main className="product-details">
      <Link to="/shop" className="product-details__back">
        ← Back to Shop
      </Link>

      <section className="product-details__layout">
        <div className="product-details__image-wrap">
          {selectedColour?.image ? (
            <img
              src={selectedColour.image}
              alt={`${product.name} in ${selectedColour.name}`}
              className="product-details__image"
            />
          ) : (
            <div className="product-details__image-placeholder">
              <span>{product.name}</span>
              <small>PRODUCT IMAGE COMING SOON</small>
            </div>
          )}
        </div>

        <div className="product-details__info">
          <p className="product-details__label">COLLECTION 01</p>

          <h1 className="product-details__name">{product.name}</h1>

          <p className="product-details__meaning">{product.meaning}</p>

          <p className="product-details__price">
            GH₵{product.price.toFixed(2)}
          </p>

          <p className="product-details__description">{product.description}</p>

          <div className="product-details__option">
            <h3>Designed to fit</h3>
            <p>{product.sizeRange}</p>
          </div>

          <div className="product-details__option">
            <h3>Colour: {selectedColour?.name}</h3>

            <div className="product-details__colours">
              {product.colours.map((colour) => (
                <button
                  key={colour.id}
                  type="button"
                  className={`product-details__colour ${
                    selectedColourId === colour.id ? "selected" : ""
                  }`}
                  style={{ backgroundColor: colour.hex }}
                  onClick={() => setSelectedColourId(colour.id)}
                  aria-label={colour.name}
                  aria-pressed={selectedColourId === colour.id}
                  title={colour.name}
                />
              ))}
            </div>
          </div>

          <button
            type="button"
            className="product-details__button"
            onClick={handleAddToCart}
            disabled={!selectedColour}
          >
            ADD TO CART
          </button>
        </div>
      </section>
    </main>
  );
}

export default ProductDetails;
