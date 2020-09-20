import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar-container">
      <nav>
        <div className="logo">
          <h1>Rick and morty</h1>
        </div>
        <ul className="menu">
          <li>
            <NavLink exact activeClassName="is-active" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="is-active" to="/characters">
              Characters
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
