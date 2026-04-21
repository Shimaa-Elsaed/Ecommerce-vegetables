import React from "react";
import MegaDeatails from "./MegaDeatails";
import StayHome from "../About/StayHome";
import Footer from "@/components/footer/Footer";
import Deals from "@/components/deals/Deals";

const Mega = () => {
  return (
    <div>
      <MegaDeatails />
      <Deals />
      <StayHome />
      <Footer />
    </div>
  );
};

export default Mega;
