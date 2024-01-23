import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const cart = useSelector((state) => state.cart);

  return (
    <header>
      <nav>
        <Link to="/" aria-label="HomePage | SmartX">
          <span className="nav-title">SmartX</span>
        </Link>

        <Link to="/cart">
          <button className="cart-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="white"
                d="M7 22q-.825 0-1.412-.587T5 20q0-.825.588-1.412T7 18q.825 0 1.413.588T9 20q0 .825-.587 1.413T7 22m10 0q-.825 0-1.412-.587T15 20q0-.825.588-1.412T17 18q.825 0 1.413.588T19 20q0 .825-.587 1.413T17 22M5.2 4h14.75q.575 0 .875.513t.025 1.037l-3.55 6.4q-.275.5-.737.775T15.55 13H8.1L7 15h12v2H7q-1.125 0-1.7-.987t-.05-1.963L6.6 11.6L3 4H1V2h3.25z"
              />
            </svg>
            <span className="cartCount">
              {cart.length > 20 ? "20+" : cart.length}
            </span>
          </button>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
