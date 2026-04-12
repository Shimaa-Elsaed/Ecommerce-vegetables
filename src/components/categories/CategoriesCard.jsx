import React, { useState } from "react";
import { categorie } from "@/data/data";
import { Button } from "../ui/button";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const CategoriesCard = () => {
  const [startindex, setStartindex] = useState(0);
  const visible = 8;
  //لو لسه في عناصر قدام هات مفيش هات من الاول 0
  const next = () => {
    if (startindex + visible > categorie.length) {
      setStartindex(startindex + 1);
    } else {
      setStartindex(0);
    }
  };
  // لو انا في التص او مشيت من عند اول واحد رجع لورا طب لو مفيش اعرضلي ال 8 اللي مجودين اخر 8
  const prev = () => {
    if (startindex > 0) {
      setStartindex(startindex - 1);
    } else {
      setStartindex(categorie.length - visible);
    }
  };
  const visibleitems = categorie.slice(startindex, startindex + visible);
  return (
    <div className="px-10 py-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Featured Categories</h2>
        <div className="flex gap-3">
          <Button
            onClick={prev}
            className="bg-green-500 p-2 rounded-full hover:bg-green-900 hover:text-white"
          >
            <FaArrowRight />
          </Button>
          <Button
            onClick={next}
            className="bg-green-500 p-2 rounded-full hover:bg-green-900 hover:text-white"
          >
            <FaArrowLeft />
          </Button>
        </div>
      </div>
      <div className="flex gap-10 flex-wrap">
        {visibleitems.map((item, index) => (
          <div key={index} className="flex justify-between items-center">
            <div className="bg-gray-200 rounded-xl p-4 text-center w-[140px] hover:bg-gray-300 ">
              <img src={item.img} className="mb-2 mx-auto w-[70px]" />
              <h3 className="text-sm font-medium">{item.name}</h3>
              <h3 className="text-xs">{item.desc}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesCard;
