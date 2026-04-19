import React from "react";
import VendersData from "./VendersData";
import StayHome from "../About/StayHome";
import Footer from "@/components/footer/Footer";
const Venders = () => {
  return (
    <div className="mx-6">
      <VendersData />
      <StayHome />
      <Footer />
    </div>
  );
};

export default Venders;
