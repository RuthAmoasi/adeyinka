import { Link } from "react-router-dom";
import { useCart } from "../context/useCart";
import "../styles/Cart.css";

function Cart() {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();

  function handleWhatsAppCheckout() {
    const orderDetails = cartItems
      .map((item, index) => {
        return `${index + 1}. ${item.name}
   Colour: ${item.selectedColour}
   Quantity: ${item.quantity}
   Unit price: GH₵${item.price.toFixed(2)}
   Subtotal: GH₵${(item.price * item.quantity).toFixed(2)}`;
      })
      .join("\n\n");

    const message = `Hello Adeyinka! I would like to place an order.

MY ORDER

${orderDetails}

ORDER TOTAL: GH₵${cartTotal.toFixed(2)}

Please let me know the next steps. Thank you!`;

    const whatsappUrl = `https://wa.me/233502064518?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  if (cartItems.length === 0) {
    return (
      <main className="cart-page">
        <div className="cart-empty">
          <p className="cart-empty__eyebrow">YOUR SHOPPING BAG</p>
          <h1>Your cart is empty.</h1>
          <p>Discover something beautiful from our collection.</p>
          <Link to="/shop" className="cart-empty__button">
            EXPLORE COLLECTION
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="cart-page">
      <div className="cart-page__header">
        <p className="cart-page__eyebrow">YOUR SELECTION</p>
        <h1>Shopping Bag</h1>
        <p>{cartItems.length} different items in your bag</p>
      </div>

      <div className="cart-layout">
        <section className="cart-items">
          {cartItems.map((item) => (
            <article className="cart-item" key={item.id}>
              <div className="cart-item__image-wrap">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={`${item.name} in ${item.selectedColour || ""}`}
                    className="cart-item__image"
                  />
                ) : (
                  <div className="cart-item__image-placeholder">
                    <span>{item.name}</span>
                    <small>IMAGE COMING SOON</small>
                  </div>
                )}
              </div>

              <div className="cart-item__details">
                <h2>{item.name}</h2>

                {item.selectedColour && <p>Colour: {item.selectedColour}</p>}

                <p>GH₵{item.price.toFixed(2)}</p>

                <div className="cart-item__quantity">
                  <button
                    type="button"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    aria-label={`Decrease quantity of ${item.name}`}
                    disabled={item.quantity === 1}
                  >
                    −
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    type="button"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    aria-label={`Increase quantity of ${item.name}`}
                  >
                    +
                  </button>
                </div>

                <button
                  type="button"
                  className="cart-item__remove"
                  onClick={() => removeFromCart(item.id)}
                >
                  REMOVE
                </button>
              </div>

              <p className="cart-item__subtotal">
                GH₵{(item.price * item.quantity).toFixed(2)}
              </p>
            </article>
          ))}
        </section>

        <aside className="cart-summary">
          <h2>Order Summary</h2>

          <div className="cart-summary__row">
            <span>Subtotal</span>
            <span>GH₵{cartTotal.toFixed(2)}</span>
          </div>

          <div className="cart-summary__row">
            <span>Delivery</span>
            <span>Calculated separately</span>
          </div>

          <div className="cart-summary__total">
            <span>Total</span>
            <span>GH₵{cartTotal.toFixed(2)}</span>
          </div>

          <button
            type="button"
            className="cart-summary__button"
            onClick={handleWhatsAppCheckout}
          >
            PROCEED TO CHECKOUT
          </button>

          <Link to="/shop" className="cart-summary__continue">
            Continue Shopping
          </Link>
        </aside>
      </div>
    </main>
  );
}

export default Cart;
