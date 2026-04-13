import React from "react";
import { icon } from "@/data/data";
import { Button } from "@/components/ui/button";

const Provide = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 text-center">
      <h1 className="text-2xl md:text-3xl font-bold mb-8">What We Provide?</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {icon.map((item, index) => (
          <div
            key={index}
            className="border rounded-2xl p-6 hover:shadow-lg transition"
          >
            {/* 👇 الأيقونة */}
            <div className="flex justify-center mb-4">
              <img src={item.img} className="w-12 h-12 object-contain" />
            </div>

            <h2 className="font-semibold text-lg">{item.name}</h2>

            <p className="text-gray-500 text-sm mt-2">{item.type}</p>

            <Button className="mt-4 bg-green-100 text-green-600 hover:bg-green-200">
              Read More
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Provide;
