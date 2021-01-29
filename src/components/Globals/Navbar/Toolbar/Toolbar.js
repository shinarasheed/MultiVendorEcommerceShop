import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Toolbar.scss";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import { navbarbottomlinks } from "../../../../constants/navlinks";
import NavbarSearch from "../../../NavbarSearch";

const Toolbar = ({ location, handleDrawerToggleClick }) => {
  return (
    <header>
      <nav className="toolbar_navigation">
        <div className="toolbar_toggle_button">
          <DrawerToggleButton
            handleDrawerToggleClick={handleDrawerToggleClick}
          />
        </div>
        <div className="toolbar_logo">
          <Link to="/">
            <img
              src={require("../../../../assets/img/monkheylogo.png")}
              alt="logo"
            />
          </Link>
        </div>
        <div className="toolbar_navigation_items">
          <ul className="categories">
            <li>
              <NavLink to="/corporate-gifts">Categories</NavLink>
            </li>

            <li>
              <NavLink to="/livebids" activeClassName="activelinks">
                Live Bid
              </NavLink>
            </li>

            <li>
              <NavLink to="/wholesale" activeClassName="activelinks">
                Wholesale
              </NavLink>
            </li>

            <li>
              <NavLink to="/clearance" activeClassName="activelinks">
                Clearance
              </NavLink>
            </li>

            <li>
              <NavLink to="/superdeals" activeClassName="activelinks">
                Super Deals
              </NavLink>
            </li>
          </ul>

          <article>
            <NavbarSearch />
            <ul>
              <li>
                <a href="https://groceries.ecscorppoc.com/">Groceries</a>
              </li>

              <li>
                <p>
                  <span className="hello">
                    <strong>Hello,</strong>
                  </span>{" "}
                  <Link to="/">SignUp</Link>
                </p>

                <p>
                  <Link to="/dashboard">
                    <strong>Account</strong>
                  </Link>
                </p>
              </li>

              <div className="cart">
                <div className="cart_item">
                  <img
                    src={require("../../../../assets/img/cart.png")}
                    alt="cart"
                  />
                  <span>0</span>
                </div>
                <p>Cart</p>
              </div>
            </ul>
          </article>
        </div>
      </nav>
      {location === "/" ? null : location === "/livebids" ? null : location ===
        "/wholesale" ? null : location === "/clearance" ? null : location ===
        "/superdeals" ? null : (
        <section className="productsnav">
          <ul className="productsnav__list">
            {navbarbottomlinks.map((link, index) => (
              <li className="productsnav__list__item" key={index}>
                <NavLink activeClassName="active" to={link.path}>
                  {link.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </section>
      )}
    </header>
  );
};

export default Toolbar;
