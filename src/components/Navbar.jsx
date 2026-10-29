import { useState } from "react";
import "../styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <a href="/" className="navbar__brand" onClick={closeMenu}>
        <span className="navbar__logo">ADEYINKA</span>
        <span className="navbar__tagline">SURROUNDED BY ROYALTY</span>
      </a>

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
        <a href="/" onClick={closeMenu}>
          Home
        </a>
        <a href="/shop" onClick={closeMenu}>
          Shop
        </a>
        <a href="/about" onClick={closeMenu}>
          Our Story
        </a>
        <a href="/contact" onClick={closeMenu}>
          Contact
        </a>
      </nav>

      <a href="/cart" className="navbar__cart" aria-label="Shopping cart">
        <span>Cart</span>
        <span className="navbar__cart-count">0</span>
      </a>
    </header>
  );
}

export default Navbar;
