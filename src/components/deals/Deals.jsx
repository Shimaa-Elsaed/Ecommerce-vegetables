import React from "react";
import { dealsData } from "@/data/data";

const Deals = () => {
  return (
    <div className="px-4 md:px-8 py-6">
      <h1 className="text-xl md:text-2xl font-bold mb-5">Deals Of The Day</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {dealsData.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow hover:shadow-lg transition duration-300 overflow-hidden"
          >
            {/* Image */}
            <div className="relative">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-44 object-cover"
              />

              {/* Discount */}
              <span className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                {item.discount}
              </span>

              {/* Countdown */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 bg-white/90 px-3 py-1 rounded-md text-xl">
                <span>{item.time.days}d</span>
                <span>{item.time.hours}h</span>
                <span>{item.time.mins}m</span>
                <span>{item.time.secs}s</span>
              </div>
            </div>

            {/* Content */}
            <div className="p-3">
              <p className="text-xs text-gray-500 mb-1">By {item.brand}</p>

              <h2 className="text-sm font-semibold mb-2 line-clamp-2 min-h-[40px]">
                {item.name}
              </h2>

              <div className="flex items-center justify-between">
                <div>
                  <span className="text-green-600 font-bold text-sm">
                    ${item.price}
                  </span>
                  <span className="text-gray-400 line-through ml-2 text-xs">
                    ${item.oldPrice}
                  </span>
                </div>

                <button className="bg-green-600 text-white text-xs px-3 py-1 rounded-md hover:bg-green-700">
                  Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Deals;
