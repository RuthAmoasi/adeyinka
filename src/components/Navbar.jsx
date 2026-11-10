import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/useCart";
import "../styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartCount } = useCart();

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <Link to="/" className="navbar__brand" onClick={closeMenu}>
        <span className="navbar__logo">ADEYINKA</span>
        <span className="navbar__tagline">SURROUNDED BY ROYALTY</span>
      </Link>

      <button
        className="navbar__menu-toggle"
        type="button"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      <nav
        className={`navbar__links ${menuOpen ? "navbar__links--open" : ""}`}
        aria-label="Main navigation"
      >
        <Link to="/" onClick={closeMenu}>
          Home
        </Link>

        <Link to="/shop" onClick={closeMenu}>
          Shop
        </Link>

        <Link to="/#about" onClick={closeMenu}>
          Our Story
        </Link>

        <Link to="/contact" onClick={closeMenu}>
          Contact
        </Link>
      </nav>

      <Link
        to="/cart"
        className="navbar__cart"
        aria-label={`Shopping cart with ${cartCount} items`}
        onClick={closeMenu}
      >
        <span>Cart</span>
        <span className="navbar__cart-count">{cartCount}</span>
      </Link>
    </header>
  );
}

export default Navbar;
