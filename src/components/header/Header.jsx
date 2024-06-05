import React from "react";
import { NavLink } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import "./header.scss";
import { useSelector } from "react-redux";

const Header = () => {
  let wishlistData = useSelector((state) => state.wishlist.value);

  return (
    <header className="header ">
      <div className="container header__container">
        <div className="header__logo">
          <NavLink to="/">
            <h2>Home</h2>
          </NavLink>
        </div>
        <form action="" className="header__form">
          <input type="search" />
          <IoSearch className="header__search__icon" />
        </form>
        <ul className="header__list">
          <li className="header__item">
            <NavLink to="/admin/manageProduct">Admin</NavLink>
          </li>
          <li className="header__item">
            <NavLink to="/wishlist">
              Wishlist <sup>{wishlistData.length}</sup>
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
