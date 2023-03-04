import React from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import { NavLink } from "react-router-dom";
import { Navbar, Icon, Button } from "react-materialize";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Header() {
  // return (
  //   <div>
  //     <Navbar
  //       style={{ backgroundColor: "grey" }}
  //       className="menu"
  //       alignLinks="right"
  //       brand={
  //         <span className="brand-logo" style={{ marginLeft: "-50px" }}>
  //           Movie
  //         </span>
  //       }
  //       id="mobile-nav"
  //       menuIcon={<Icon>Menu</Icon>}
  //     >
  //       <ul>
  //         <li>
  //           <NavLink to="/">
  //             <Icon left></Icon> Home
  //           </NavLink>
  //         </li>
  //         <li>
  //           <NavLink to="/about">
  //             <Icon left></Icon>About
  //           </NavLink>
  //         </li>
  //         <li>
  //           <NavLink to="/news">
  //             <Icon left></Icon>New
  //           </NavLink>
  //         </li>
  //         <li>
  //           <NavLink to="/contact">
  //             <Icon left></Icon>Contact
  //           </NavLink>
  //         </li>
  //       </ul>
  //     </Navbar>
  //     <button style={{ marginLeft: "80%" }}>Toggle</button>
  //   </div>
  // );
  const { theme, toggle, dark } = useContext(ThemeContext);
  return (
    <div>
      <nav
        style={{ backgroundColor: theme.backgroundColor, color: theme.color, marginTop:"-23px"}}
      >
        <ul>
          <li>
            <NavLink to='/' style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/news' style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>News</NavLink>
          </li>
          <li>
            <NavLink  to='/about' style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>About</NavLink>
          </li>
          <li>
            <NavLink to='/contact' style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>Contact</NavLink>
          </li>
        </ul>
        <div >
          <a
            className="switch-mode"
            href="#"
            onClick={toggle}
            style={{
              backgroundColor: theme.backgroundColor,
              color: theme.color,
              outline: "none",
            }}
            data-testid="toggle-theme-btn"
          >
            Switch Nav to {!dark ? "Dark" : "Light"} mode
          </a>
        </div>
      </nav>
    </div>
  );
}
export default Header;
