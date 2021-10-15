import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
export function Nav() {
  return (
    <div className="header">
      <ul className="navbar">
        <li>
          <Link className="links" to="/">
            TODOS
          </Link>
        </li>
        <li>
          <Link className="links" to="/add">
            Add Todo
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
