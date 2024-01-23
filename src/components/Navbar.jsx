import React, { useState } from "react";
import "../Styles/Navbar.css";
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { NavLinks } from "../Data/NavLinks";
import { CiMenuFries } from "react-icons/ci";
import { IoCloseCircleOutline } from "react-icons/io5";
import { IoMdArrowRoundUp } from "react-icons/io";
import resume from "../Assets/Rethik_resume_01.pdf";
const Navbar = ({ mode, setMode }) => {
  const [shownavbar, setShowNavbar] = useState(true);
  const handleClick = () => {
    setShowNavbar(!shownavbar);
  };
  return (
    <nav id="top" className="navbar container">
      <p id="logo">~/Rethik/portfolio</p>
      <ul className={`nav__list ${shownavbar ? "" : "nav__list_open"}`}>
        {NavLinks.map((link) => {
          return (
            <li onClick={handleClick} key={link.id}>
              <a href={`#${link.name}`}>{link.name}</a>
            </li>
          );
        })}
      </ul>
      <div className="theme__list">
        <button id="mode" onClick={() => setMode(!mode)}>
          {mode ? <MdOutlineLightMode /> : <MdDarkMode />}
        </button>
        <a href={resume} download id="nav_resume" className="btn">
          Resume
        </a>
        <button className="hamburger" onClick={handleClick}>
          {shownavbar ? (
            <CiMenuFries className="menu floating_button" />
          ) : (
            <IoCloseCircleOutline className="close floating_button" />
          )}
        </button>
      </div>
      <a className="top_button" href="#top">
        <IoMdArrowRoundUp />
      </a>
    </nav>
  );
};

export default Navbar;
