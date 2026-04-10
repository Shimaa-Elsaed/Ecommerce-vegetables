import React from "react";
import { banarimg } from "../../assets/img";
const MainHeader = () => {
  return (
    <div className="flex justify-between items-center px-4 py-2">
      <img src={banarimg} alt="" />
      <div></div>
    </div>
  );
};

export default MainHeader;
