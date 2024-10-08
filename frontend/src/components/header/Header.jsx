import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/medimeet__3_-removebg-preview (1).png";

const navLinks = [
  { path: "/home", title: "Home" },
  { path: "/service", title: "Services" },
  { path: "/doctors", title: "Doctors" },
  { path: "/contact", title: "Contact" },
  { path: "/login", title: "Login" },
  { path: "/signup", title: "SignUp" },
];

const Header = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleClick = (path) => {
    setActiveLink(path);
  };

  return (
    <header className="flex items-center shadow-md mb-4">
      <div className="max-w-full w-[1440px] px-5 mx-auto flex justify-between">
        <div>
          <img src={logo} alt="logo" className="w-32" />
        </div>
        <div>
          <ul className="flex items-center space-x-8 font-md pt-16 font-semibold">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  to={link.path}
                  onClick={() => handleClick(link.path)}
                  className={({ isActive }) =>
                    `p-2 ${
                      isActive
                        ? link.path === "/login" || link.path === "/signup"
                          ? "bg-skyBlue text-white border-2 border-skyBlue p-2 rounded"
                          : "text-skyBlue font-semibold"
                        : link.path === "/login" || link.path === "/signup"
                        ? "text-skyBlue border-2 border-skyBlue p-2 rounded hover:bg-skyBlue hover:text-white transition-colors duration-300 ease-in-out"
                        : "text-darkGray rounded p-2 hover:text-skyBlue transition-colors duration-300 ease-in-out"
                    }`
                  }
                >
                  {link.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
