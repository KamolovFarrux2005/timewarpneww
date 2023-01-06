import React from "react";
import { Link } from "react-router-dom";
import searchIcon from "../assets/images/search.svg";

const Navbar = () => {
  function logout() {
    localStorage.removeItem("isLoggedIn");
  }
  return (
    <nav className="navbar">
      <h2>Admin</h2>
      <div className="navbar__content">
        <Link to={"/"} onClick={logout}>
          Log out
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
