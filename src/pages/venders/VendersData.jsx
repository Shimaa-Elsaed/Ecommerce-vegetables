import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { vendersData } from "@/data/data";
import { categories } from "@/assets/img";
import React, { useState } from "react";

const VendersData = () => {
  const trends = ["Limons", "Panana", "Tomato", "Watermelon", "Potato"];
  const [showAll, setShowAll] = useState(false);
  const [isSorted, setIsSorted] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = vendersData.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const sortedData = [...filteredData].sort((a, b) =>
    a.title.localeCompare(b.title),
  );

  const baseData = isSorted ? sortedData : filteredData;
  const displayedData = showAll ? baseData : baseData.slice(0, 7);

  return (
    <div className="px-4 md:px-8 py-6">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
            <h1 className="font-semibold text-2xl">Recipes Articles</h1>

            <div className="flex gap-2 w-full md:w-auto">
              <Button
                className="bg-green-500 hover:bg-green-600"
                onClick={() => setShowAll(!showAll)}
              >
                {showAll ? "Show Less" : "Show All"}
              </Button>

              <Button variant="outline" onClick={() => setIsSorted(!isSorted)}>
                {isSorted ? "Default" : "Sort A-Z"}
              </Button>

              <Input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full md:w-40"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
            {displayedData.length > 0 ? (
              displayedData.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-md overflow-hidden 
                  hover:shadow-xl transform hover:scale-105 
                  transition-all duration-300 cursor-pointer"
                >
                  <div className="w-full h-40 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover 
                      transition-transform duration-300 
                      hover:scale-110"
                    />
                  </div>

                  <div className="p-3 text-center">
                    <h2 className="text-sm text-gray-500">{item.category}</h2>

                    <h1 className="font-semibold text-base mt-1 line-clamp-2">
                      {item.title}
                    </h1>

                    <div className="flex justify-center gap-2 text-xs text-gray-400 mt-2">
                      <span>{item.readTime}</span>
                      <span>•</span>
                      <span>{item.views}</span>
                      <span>•</span>
                      <span>{item.date}</span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="col-span-full text-center text-gray-500">
                No results found
              </p>
            )}
          </div>
        </div>

        <div className="w-full md:w-72 space-y-6">
          <div className="bg-white p-4 rounded-2xl shadow-md">
            <h2 className="font-semibold text-lg mb-4">Trending Now</h2>

            <div className="space-y-4">
              {trends.map((item) => (
                <div key={item}>
                  <p className="text-lg text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-4 rounded-2xl shadow-md">
            <h2 className="font-semibold text-lg mb-4">Gallery</h2>

            <div className="grid grid-cols-4 gap-2">
              {categories.map((item, index) => (
                <img
                  key={index}
                  src={item}
                  alt="gallery"
                  className="w-full h-14 object-cover rounded-lg"
                />
              ))}
            </div>
          </div>

          <div className="bg-white p-4 rounded-2xl shadow-md">
            <h2 className="font-semibold text-lg mb-4">Popular Tags</h2>

            <div className="flex flex-wrap gap-2">
              {[
                "Cabbage",
                "Broccoli",
                "Smoothie",
                "Fruit",
                "Salad",
                "Appetizer",
              ].map((tag, index) => (
                <span
                  key={index}
                  className="text-xs px-3 py-1 bg-gray-100 rounded-full 
                  cursor-pointer hover:bg-green-100"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendersData;
