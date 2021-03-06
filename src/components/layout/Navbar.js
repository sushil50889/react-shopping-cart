import React, {
  Component
} from "react";

import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div>
        <header className="header_area sticky-header">
          <div className="main_menu">
            <nav className="navbar navbar-expand-lg navbar-light main_box">
              <div className="container">
                <a className="navbar-brand logo_h" href="/">
                  <img src={require("../../img/logo.png")} alt="logo" />
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
                <div
                  className="collapse navbar-collapse offset"
                  id="navbarSupportedContent"
                >
                  <ul className="nav navbar-nav menu_nav ml-auto">
                    <li className="nav-item active">
                      <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item submenu dropdown">
                      <a
                        href="/"
                        className="nav-link dropdown-toggle"
                        data-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Shop
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link className="nav-link" to="/product-details">Product Details</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/product-checkout">Product Checkout</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/shopping-cart">Shopping Cart</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/order-confirmation">Confirmation</Link>
                        </li>
                      </ul>
                    </li>

                    
                  </ul>
                  <ul className="nav navbar-nav navbar-right">
                    <li className="nav-item">
                      <a href="/" className="cart">
                        <span className="ti-bag" />
                      </a>
                    </li>
                    <li className="nav-item">
                      <button className="search">
                        <span className="lnr lnr-magnifier" id="search" />
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
          <div className="search_input" id="search_input_box">
            <div className="container">
              <form className="d-flex justify-content-between">
                <input
                  type="text"
                  className="form-control"
                  id="search_input"
                  placeholder="Search Here"
                />
                <button type="submit" className="btn" />
                <span
                  className="lnr lnr-cross"
                  id="close_search"
                  title="Close Search"
                />
              </form>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Navbar;
