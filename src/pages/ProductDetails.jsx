import { useParams, Link } from "react-router-dom";
import products from "../data/products";
import "../styles/ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();

  const product = products.find((item) => item.id === id);

  if (!product) {
    return (
      <main className="product-details__not-found">
        <h1>Product not found</h1>
        <p>Sorry, we couldn't find that product.</p>
        <Link to="/shop">Return to Shop</Link>
      </main>
    );
  }

  return (
    <main className="product-details">
      <Link to="/shop" className="product-details__back">
        ← Back to Shop
      </Link>

      <section className="product-details__layout">
        <img
          src={product.image}
          alt={product.name}
          className="product-details__image"
        />

        <div className="product-details__info">
          {product.label && (
            <p className="product-details__label">{product.label}</p>
          )}

          <h1 className="product-details__name">{product.name}</h1>

          <p className="product-details__price">
            GH₵{product.price.toFixed(2)}
          </p>

          <p className="product-details__description">
            Discover this piece from the Adeyinka collection. Product
            information and available colours will be updated as details are
            confirmed.
          </p>

          <button type="button" className="product-details__button">
            ADD TO CART
          </button>
        </div>
      </section>
    </main>
  );
}

export default ProductDetails;
