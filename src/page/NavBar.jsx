import React, { useState } from "react";
import "../styles/NavBar.css";
import profile from "../../public/assets/profile.jpg";

const NavBar = ({ show }) => {
  console.log(show);
  return (
    <div className={` ${show ? "navBar" : " navBar navBarActive"} `}>
      <div>
        <nav>
          <ul>
            <li className="containerIcon">
              <a href="#">
                <i className="fas fa-tachometer-alt"></i>
              </a>
            </li>
            <li className="containerIcon active">
              <a href="#">
                <i className="fas fa-bookmark"></i>
              </a>
            </li>
            <li className="containerIcon">
              <a href="#">
                <i className="far fa-calendar"></i>
              </a>
            </li>
            <li className="containerIcon">
              <a href="#">
                <i className="fas fa-comments"></i>
              </a>
            </li>
            <li className="containerIcon">
              <a href="#">
                <i className="fas fa-award"></i>
              </a>
            </li>
            <li className="containerIcon">
              <a href="#">
                <i className="fas fa-cog"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="containerProfileNavBar">
        <div className="profileNavBar">
          <img src={profile} alt="" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
