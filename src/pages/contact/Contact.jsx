import React from "react";
import HelpMap from "./HelpMap";
import StayHome from "../About/StayHome";
import Footer from "@/components/footer/Footer";
import Forms from "./Forms";

const Contact = () => {
  return (
    <div className="px-3">
      <HelpMap />
      <StayHome />
      <Forms />
      <Footer />
    </div>
  );
};

export default Contact;
