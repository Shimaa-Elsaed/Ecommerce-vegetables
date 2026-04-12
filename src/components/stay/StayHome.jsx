import { homeimg, hometwo } from "@/assets/img";
import { Input } from "../ui/input";
import { Field } from "../ui/field";
import { Button } from "../ui/button";
import React from "react";

const StayHome = () => {
  return (
    <div className="px-4 md:px-10 mt-8">
      <div
        className="relative rounded-3xl overflow-hidden flex items-center min-h-[400px] md:min-h-[500px]"
        style={{
          backgroundImage: `url(${hometwo})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        {/* overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* content */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full px-6 md:px-14 py-10 gap-10">
          {/* LEFT */}
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
              Stay home & get your <br />
              daily needs from our shop
            </h1>

            <p className="text-white/80 text-sm md:text-base mb-8">
              Start Your Daily Shopping with{" "}
              <span className="text-green-600 font-semibold">Nest Mart</span>
            </p>

            {/* search */}
            <Field
              orientation="horizontal"
              className="flex items-center bg-white rounded-full p-2 max-w-md mx-auto md:mx-0 shadow-lg"
            >
              <Input
                type="search"
                placeholder="Search for items..."
                className="border-none focus:ring-0 flex-1"
              />

              <Button className="bg-green-500 hover:bg-green-600 text-white rounded-full px-6">
                Search
              </Button>
            </Field>
          </div>

          {/* RIGHT */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-end">
            <img
              src={homeimg}
              alt="shopping"
              className="w-[86%] md:w-full max-w-sm object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StayHome;
