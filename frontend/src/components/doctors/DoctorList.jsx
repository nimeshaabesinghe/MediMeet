import React from "react";
import DoctorCard from "./DoctorCard";
import docimage from "../../assets/doctor.jpeg";

const doctors = [
  {
    id: 1,
    name: "Dr. Perera",
    specialty: "Surgon",
    avgRating: 4.8,
    totalRating: 345,
    photo: docimage,
    totalPatients: 120,
  },
  {
    id: 2,
    name: "Dr. Perera",
    specialty: "Surgon",
    avgRating: 4.8,
    totalRating: 345,
    photo: docimage,
    totalPatients: 120,
  },
  {
    id: 3,
    name: "Dr. Perera",
    specialty: "Surgon",
    avgRating: 4.8,
    totalRating: 345,
    photo: docimage,
    totalPatients: 120,
  },
  {
    id: 4,
    name: "Dr. Perera",
    specialty: "Surgon",
    avgRating: 4.8,
    totalRating: 345,
    photo: docimage,
    totalPatients: 120,
  },
  {
    id: 5,
    name: "Dr. Perera",
    specialty: "Surgon",
    avgRating: 4.8,
    totalRating: 345,
    photo: docimage,
    totalPatients: 120,
  },
  {
    id: 6,
    name: "Dr. Perera",
    specialty: "Surgon",
    avgRating: 4.8,
    totalRating: 345,
    photo: docimage,
    totalPatients: 120,
  },
];

const DoctorList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:space-x-6 mx-64">
      {doctors.map((doctor) => (
        <DoctorCard key={doctor.id} doctor={doctor} />
      ))}
    </div>
  );
};

export default DoctorList;
