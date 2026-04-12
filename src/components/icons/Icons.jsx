import React from "react";
import { icon } from "@/data/data";

const Icons = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 w-full px-10 my-3 gap-16">
      {icon.map((item, index) => (
        <div
          className="gap- flex items-center bg-gray-200 px-1 rounded-xl py-3 hover:bg-gray-300 transition duration-300"
          key={index}
        >
          <div className="flex items-center gap-5">
            <img src={item.img} className="w-10 h-10" />
            <div>
              <h1>{item.name}</h1>
              <h1>{item.desc}</h1>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Icons;
