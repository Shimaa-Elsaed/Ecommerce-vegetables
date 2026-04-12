import React from "react";
import { heroimg } from "@/assets/img";
import { Input } from "../ui/input";
import { Field } from "../ui/field";
import { Button } from "../ui/button";
const Hero = () => {
  return (
    <div
      className="relative h-[500px] flex items-center px-10"
      style={{
        backgroundImage: `url(${heroimg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative">
        <p className="text-6xl font-semibold">
          Fresh Vegetables<br></br> Big discount
        </p>
        <p className="py-5">Save up to 50% off on your first order</p>
        <div className="">
          <Field orientation="horizontal" className="flex gap-2">
            <Input type="search" placeholder="Search..." className="bg-white" />
            <Button className="bg-green-500 hover:bg-green-600 text-white">
              Search
            </Button>
          </Field>
        </div>
      </div>
    </div>
  );
};

export default Hero;
