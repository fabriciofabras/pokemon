import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

export const NavBar = () => {

    const navigate = useNavigate();

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            <Link className="navbar-brand" to="/">
            Pokemon characters
            </Link>

        <div className="navbar-collapse">
            <div className="navbar-nav">
            <NavLink
            className={({ isActive }) =>
              `nav-item nav-link  ${isActive ? "active" : ""}`
            }
            to="/all"
          >
            All Pokemon's{" "}
          </NavLink>
          <NavLink
            to="/character"
            className={({ isActive }) =>
              `nav-item nav-link  ${isActive ? "active" : ""}`
            }
          >
            Pokemon
          </NavLink>
            </div>
        </div>
        </nav>
    )

}