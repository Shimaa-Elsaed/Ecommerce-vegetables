import React from "react";
import { product } from "@/data/data";

const TopSallings = () => {
  const topSelling = product.slice(0, 3);
  const trending = product.slice(3, 6);
  const recently = product.slice(6, 9);
  const topRated = product.slice(7, 10);

  const renderItems = (items) =>
    items.map((item) => (
      <div key={item.id} className="flex gap-3 items-center">
        <img
          src={item.img}
          alt={item.name}
          className="w-16 h-16 object-cover rounded-md"
        />

        <div>
          <h4 className="text-sm font-medium leading-tight line-clamp-2">
            {item.name}
          </h4>

          <div className="text-sm mt-1">
            <span className="text-green-600 font-semibold">${item.price}</span>
            <span className="line-through text-gray-400 ml-2">
              ${item.oldPrice}
            </span>
          </div>
        </div>
      </div>
    ));

  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Top Selling */}
        <div>
          <h3 className="font-semibold text-lg mb-4">
            Top Selling
            <span className="block w-12 h-[2px] bg-green-500 mt-1"></span>
          </h3>
          <div className="space-y-4">{renderItems(topSelling)}</div>
        </div>

        {/* Trending */}
        <div>
          <h3 className="font-semibold text-lg mb-4">
            Trending Products
            <span className="block w-12 h-[2px] bg-green-500 mt-1"></span>
          </h3>
          <div className="space-y-4">{renderItems(trending)}</div>
        </div>

        {/* Recently */}
        <div>
          <h3 className="font-semibold text-lg mb-4">
            Recently Added
            <span className="block w-12 h-[2px] bg-green-500 mt-1"></span>
          </h3>
          <div className="space-y-4">{renderItems(recently)}</div>
        </div>

        {/* Top Rated */}
        <div>
          <h3 className="font-semibold text-lg mb-4">
            Top Rated
            <span className="block w-12 h-[2px] bg-green-500 mt-1"></span>
          </h3>
          <div className="space-y-4">{renderItems(topRated)}</div>
        </div>
      </div>
    </section>
  );
};

export default TopSallings;
