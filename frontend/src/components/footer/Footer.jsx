import React from "react";
import logo from "../../assets/medimeet__3_-removebg-preview (1).png";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const navLinkes = [
  { path: "/home", title: "Home" },
  { path: "/service", title: "Services" },
  { path: "/doctors", title: "Contact" },
  { path: "/doctors", title: "Doctors" },
  { path: "/terms", title: "Terms of Service" },
  { path: "/privacy", title: "Privacy Policy" },
];
const socialLinks = [
  { path: "https://www.facebook.com/", icon: faFacebookF },
  { path: "https://www.twitter.com/", icon: faTwitter },
  { path: "https://www.instagram.com/", icon: faInstagram },
  { path: "https://www.linkedin.com/", icon: faLinkedinIn },
];
const Footer = () => {
  return (
    <div className="bg-[#b9b9d0] flex md:flex-row flex-col justify-between items-center mt-16 p-8">
      <div className=" flex flex-col-1 items-center">
        <div>
          <div className="bg-white rounded-full shadow-sm shrink-0 flex items-center justify-center">
            <img src={logo} alt="logo" className="h-44 object-contain" />
          </div>
          <small className="flex items-center justify-center pt-6">
            &copy;{new Date().getFullYear()} MediMeet. All rights reserved.
          </small>
        </div>
      </div>
      <div className="h-32 w-px bg-darkGray" />
      <div className="flex flex-col-1 text-center">
        <div className="space-y-3">
          <div className="text-lg font-semibold">QUICK LINKS</div>
          <div>
            <ul className="space-y-1">
              {navLinkes.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.path}
                    className="text-sm font-medium hover:text-purple transition-colors duration-300"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="h-32 w-px bg-darkGray" />
      <div className="flex flex-col-1">
        <div>
          <div className="mb-4 md:mb-0">
            <h5 className="text-lg font-semibold">Contact Us</h5>
            <p className="text-sm">Phone: 041-1122333</p>
            <p className="text-sm">Email: support@medimeet.com</p>
            <p className="text-sm">Address: No:578, Colombo 05, Sri Lanka.</p>
          </div>
          <ul className="flex gap-8 mt-8">
            {socialLinks.map((link, index) => (
              <li key={index}>
                <a>
                  <FontAwesomeIcon
                    icon={link.icon}
                    className="w-6 h-6 hover:text-purple transition-colors duration-300"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
