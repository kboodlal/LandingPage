import React from "react";
import FAQSectionHeader from "../components/sections/FAQSectionHeader";
import AboutNOBLE from "../components/sections/AboutNoble";
import Features from "../components/sections/Features";
import Services from "../components/sections/Services";

const FAQ = () => {
  return (
    <>
      <div>
        <FAQSectionHeader className="illustration-section-01" />
        <AboutNOBLE id="aboutNOBLE" className="illustration-section-01" />
        <Features id="features" className="illustration-section-01" />
        <Services id="services" className="illustration-section-01" />
      </div>
    </>
  );
};

export default FAQ;
