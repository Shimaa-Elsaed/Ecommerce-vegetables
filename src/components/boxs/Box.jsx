import React from "react";
import { boxs } from "@/data/data";
import { Button } from "../ui/button";

const Box = () => {
  return (
    <div className="w-full p-4">
      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {boxs.map((item, index) => (
          <div
            key={index}
            className="relative h-[250px] rounded-xl overflow-hidden group"
            style={{
              backgroundImage: `url(${item.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay */}

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-center items-start   p-4 gap-3">
              <h1 className="text-xl font-bold text-black break-words max-w-[250px]">
                {item.name}
              </h1>

              <Button className="bg-green-600 text-white hover:bg-gray-200 hover:text-black my-4">
                {item.desc}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Box;
