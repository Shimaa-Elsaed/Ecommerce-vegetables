import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { product, vendersData } from "@/data/data";

const MegaDeatails = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState(false);
  const [show, setShow] = useState(false);
  const [type, setType] = useState("products"); // 🔥 switch بين الداتا

  const data = type === "products" ? product : vendersData;

  const filteredData = data.filter((item) => {
    const text =
      type === "products" ? item.name + item.brand : item.title + item.category;

    return text.toLowerCase().includes(search.toLowerCase());
  });

  const sortedData = [...filteredData].sort((a, b) => {
    const first = type === "products" ? a.name : a.title;
    const second = type === "products" ? b.name : b.title;
    return first.localeCompare(second);
  });

  const finalData = sort ? sortedData : filteredData;

  const showData = show ? finalData : finalData.slice(0, 8);

  return (
    <div className="flex flex-col md:flex-row gap-6 px-4 md:px-8 py-6">
      <div className="w-full md:w-2/3 order-2 md:order-1">
        {" "}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <h1 className="text-xl font-bold">
            {type === "products" ? "All Products" : "All Articles"}
          </h1>

          <div className="flex flex-wrap gap-3">
            <Button onClick={() => setShow(!show)}>
              {show ? "Show Less" : "Show All"}
            </Button>

            <Button onClick={() => setSort(!sort)}>Sort A-Z</Button>

            <Input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-40 sm:w-56"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
          {type === "products" &&
            showData.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-sm p-3 hover:shadow-md transition"
              >
                <div className="relative h-40 overflow-hidden rounded-md">
                  <img
                    src={item.img}
                    alt=""
                    className="h-full w-full object-cover hover:scale-105 transition"
                  />

                  <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                    {item.discount}
                  </span>
                </div>

                <h1 className="text-xs text-gray-400 mt-2">{item.brand}</h1>

                <h1 className="font-semibold text-sm">{item.name}</h1>

                <div className="flex gap-2 items-center mt-1 text-sm">
                  <span className="text-green-600 font-bold">
                    ${item.price}
                  </span>

                  <span className="line-through text-gray-400 text-xs">
                    ${item.oldPrice}
                  </span>
                </div>

                <div className="mt-2">
                  <div className="bg-gray-200 h-1 rounded">
                    <div className="bg-green-500 h-1 rounded w-2/3"></div>
                  </div>
                  <span className="text-xs text-gray-400">{item.sold}</span>
                </div>
                <Button className="w-full m-2">Add</Button>
              </div>
            ))}

          {type === "venders" &&
            showData.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition"
              >
                <img
                  src={item.image}
                  alt=""
                  className="h-40 w-full object-cover"
                />

                <div className="p-3">
                  <span className="text-green-600 text-xs font-semibold">
                    {item.category}
                  </span>

                  <h2 className="font-semibold text-sm mt-1">{item.title}</h2>

                  <div className="flex justify-between text-xs text-gray-400 mt-2">
                    <span>{item.date}</span>
                    <span>{item.readTime}</span>
                  </div>
                  <Button className="w-full m-2">Add</Button>
                </div>
              </div>
            ))}
        </div>
      </div>

      <div className="w-full md:w-1/3 bg-white p-4 rounded-xl shadow-sm h-fit order-1 md:order-2">
        {" "}
        <div>
          <h1 className="font-bold mb-4">Filter</h1>

          <div className="flex flex-col gap-3">
            <Button
              onClick={() => setType("products")}
              className={type === "products" ? "bg-green-500" : ""}
            >
              Products
            </Button>

            <Button
              onClick={() => setType("venders")}
              className={type === "venders" ? "bg-green-500" : ""}
            >
              Articles
            </Button>
          </div>

          <div className="mt-6 text-sm text-gray-500">
            <p>Total Items: {finalData.length}</p>
            <p>Showing: {showData.length}</p>
          </div>
        </div>
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
  );
};

export default MegaDeatails;
