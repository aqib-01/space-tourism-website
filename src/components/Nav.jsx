import React, { useState, useEffect } from "react";
import HamBtn from "./HamBtn";
import gsap from "gsap";

import { NavLink } from "react-router-dom";
const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const closeNav = () => {
    if (isNavOpen) {
      gsap.to("nav", {
        width: 0,
        duration: 0.7,
      });
      setIsNavOpen(false);
    }
  };

  const handleNavToggle = () => {
    if (!isNavOpen) {
      gsap.to("nav", {
        width: "auto",
        duration: 0.3,
        ease: "power.out",
      });
      gsap.from("nav li", {
        x: 100,
        opacity: 0,
        delay: 0.2,
        stagger: 0.2,
        ease: "back",
      });
      setIsNavOpen(true);
    } else if (isNavOpen) {
      gsap.to("nav", {
        width: 0,
        duration: 0.7,
      });
      setIsNavOpen(false);
    }
  };
  return (
    <header className="py-5 md:p-0 lg:py-6">
      <div className="wrapper-nav">
        <NavLink to={"/"} id="logo" className="pl-6 relative sm:pl-10 lg:pl-12">
          <img src="assets/shared/logo.svg" alt="" />
        </NavLink>
        <HamBtn handleNavToggle={handleNavToggle} isNavOpen={isNavOpen} />
        <nav className="w-0 md:!w-auto ml-auto z-40">
          <ul
            className="ml-14 mt-28 md:m-0 flex flex-col 
                  md:flex-row md:items-center md:p-10 lg:p-8 
                  lg:pr-36 lg:pl-24
          "
          >
            <li>
              <NavLink
                to={"/"}
                onClick={closeNav}
                className={({ isActive }) =>
                  "nav-link " + (isActive ? "nav-link-active" : "")
                }
              >
                <span className="font-bold mr-1">00</span>HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/destinations"}
                onClick={closeNav}
                className={({ isActive }) =>
                  "nav-link " + (isActive ? "nav-link-active" : "")
                }
              >
                <span className="font-bold mr-1">01</span>DESTINATION
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/crew"
                onClick={closeNav}
                className={({ isActive }) =>
                  "nav-link " + (isActive ? "nav-link-active" : "")
                }
              >
                <span className="font-bold mr-1">03</span>CREW
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/technology"
                onClick={closeNav}
                className={({ isActive }) =>
                  "nav-link " + (isActive ? "nav-link-active" : "")
                }
              >
                <span className="font-bold mr-1">04</span>TECHNOLOGY
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
