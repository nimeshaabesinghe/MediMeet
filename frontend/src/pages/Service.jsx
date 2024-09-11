import React from "react";
import ServiceCard from "../components/ServiceCard";
import s1 from "../assets/medical-team.png";
import s2 from "../assets/kidney.png";
import s3 from "../assets/mental-health.png";
import s4 from "../assets/skin.png";
import s5 from "../assets/tooth.png";
import s6 from "../assets/playtime.png";

const serviceList = [
  {
    serviceImage: s1,
    service: "General Consultation",
    description:
      "Get expert medical advice and diagnosis for a variety of health issues.",
  },
  {
    serviceImage: s2,
    service: "Kidney Health Care",
    description:
      "Expert care for kidney health, including treatment for chronic kidney disease and kidney stones.",
  },
  {
    serviceImage: s3,
    service: "Mental Health Support",
    description:
      "Access professional counseling and therapy to support your mental and emotional well-being.",
  },
  {
    serviceImage: s4,
    service: "Dermatology",
    description:
      "Treatment for skin, hair, and nail conditions to keep you looking your best.",
  },
  {
    serviceImage: s5,
    service: "Dental Care",
    description:
      "Full range of dental services to maintain and improve oral health.",
  },
  {
    serviceImage: s6,
    service: "Pediatric Care",
    description:
      "Specialized healthcare services for children, from routine check-ups to vaccinations.",
  },
];

const Service = () => {
  return (
    <section>
      <div className="mb-16 px-4">
        <div className="text-center mx-auto max-w-5xl">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-darkGray mb-4">
            Our Medical Services
          </h1>
          <h3 className="text-base md:text-xl text-purple-700 mb-6">
            Comprehensive healthcare solutions tailored for your needs
          </h3>
          <p className="text-balance text-lightGray leading-relaxed mb-8">
            "Our medical application offers a range of services designed to
            simplify and enhance your healthcare experience. From efficient
            patient management to convenient appointment scheduling,
            telemedicine, prescription management, and secure billing, our
            platform is built to meet the diverse needs of both patients and
            healthcare providers. Explore our services below to discover how we
            can support your healthcare journey."
          </p>
        </div>
      </div>

      <div className="mx-40 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {serviceList.map((service, index) => (
          <ServiceCard
            key={index}
            serviceImage={service.serviceImage}
            service={service.service}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Service;
