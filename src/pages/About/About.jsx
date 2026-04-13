import React from "react";
import Welcome from "./Welcome";
import Provide from "./Provide";
import Partener from "./Partener";
import OurTeam from "./OurTeam";
import Footer from "@/components/footer/Footer";
import StayHome from "./StayHome";

const About = () => {
  return (
    <div className="px-2 m-2">
      <Welcome />
      <Provide />
      <Partener />
      <OurTeam />
      <StayHome />
      <Footer />
    </div>
  );
};

export default About;
