import React from "react";
import { NavLink } from "react-router-dom";
import { useAppContext } from "../Context/DataRackContext.js";

const Navbar = () => {
  const { user, setUser } = useAppContext();
  console.log(user.length);
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          {user.length !== 0 && (
            <NavLink
              to="about"
              className={({ isActive }) =>
                isActive ? "active linkTag" : "linkTag"
              }
            >
              About
            </NavLink>
          )}
        </li>
        <li>
          {/* <NavLink
            to="singleProducts"
            className={({ isActive }) =>
              isActive ? "active linkTag" : "linkTag"
            }
          >
            SingleProducts
          </NavLink> */}
        </li>
        <li className="logout">
          {user.length !== 0 && <a onClick={() => setUser("")}>Logout</a>}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
