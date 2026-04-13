import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { stay } from "@/assets/img";

const StayHome = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
      <div
        className="rounded-2xl overflow-hidden flex flex-col md:flex-row items-center justify-between p-6 md:p-10 relative"
        style={{
          backgroundImage: `url(${stay[0]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* overlay */}
        <div className="absolute inset-0 bg-green-100/80"></div>

        {/* text */}
        <div className="relative z-10 max-w-md w-full">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug">
            Stay home & get your daily <br />
            needs from our shop
          </h1>

          <p className="text-gray-600 mt-3 text-sm">
            Start Your Daily Shopping with Nest Mart
          </p>

          {/* 👇 input + button */}
          <div className="flex mt-5 w-full bg-white rounded-full overflow-hidden shadow-md">
            <Input
              type="email"
              placeholder="Your email address"
              className="flex-1 border-none focus:ring-0 px-4 py-2 text-sm"
            />

            <Button className="bg-green-500 hover:bg-green-600 text-white px-4 sm:px-6 rounded-none">
              Subscribe
            </Button>
          </div>
        </div>

        {/* 👇 الصورة */}
        <img
          src={stay[1]}
          className="relative z-10 w-40 sm:w-52 md:w-64 mt-6 md:mt-0"
        />
      </div>
    </div>
  );
};

export default StayHome;
