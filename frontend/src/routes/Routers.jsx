import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Service from "../pages/Service";
import Contact from "../pages/Contact";
import Doctors from "../pages/doctors/Doctors";
import DoctorDetails from "../pages/doctors/DoctorDetails";
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/service" element={<Service />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="doctordetails" element={<DoctorDetails />} />
    </Routes>
  );
};

export default Routers;
