import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/MediMeet-removebg-preview.png";

const navLinkes = [
  { path: "/home", title: "Home" },
  { path: "/service", title: "Services" },
  { path: "/contact", title: "Contact" },
  { path: "/doctors", title: "Doctors" },
  { path: "/login", title: "Login" },
  { path: "/signup", title: "SignUp" },
];

const Header = () => {
  return (
    <header className="flex items-center mb-4">
      <div className="max-w-full w-[1440px] px-5 mx-auto flex justify-between">
        <div className="">
          <img src={logo} alt="logo" className="h-32" />
        </div>
        <div>
          <ul className="flex items-center space-x-8 font-md pt-16">
            {navLinkes.map((link, index) => (
              <li key={index} className={link.path === "/login" ? "pl-16" : ""}>
                <NavLink
                  to={link.path}
                  className={(e) =>
                    e.isActive
                      ? "text-blue"
                      : link.path == "/login" || link.path == "/signup"
                      ? "bg-cyan text-blue border-2 border-blue p-2 rounded"
                      : "text-darkGray rounded"
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
