import React from "react";
import { welcomes } from "@/assets/img";

const Welcome = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <img
          src={welcomes[0]}
          className="rounded-2xl w-full h-[450px] object-cover"
        />
        <div className="space-y-4">
          <h1 className="text-2xl md:text-3xl font-bold">Welcome to Nest</h1>

          <p className="text-gray-600 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate id est laborum.{" "}
          </p>

          <p className="text-gray-600 text-sm leading-relaxed">
            Ius ferri velit sanctus cu, sed at soleat accusata. Dictas prompta
            et Ut placerat legendos interpre.Donec vitae sapien ut libero
            venenatis faucibus. Nullam quis ante Etiam sit amet orci eget. Quis
            commodo odio aenean sed adipiscing. Turpis massa tincidunt dui ut
            ornare lectus. Auctor elit sed vulputate mi sit amet. Commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate id
            est laborum.{" "}
          </p>

          {/* 👇 الصور الصغيرة */}
          <div className="flex gap-3">
            {welcomes.slice(1).map((img, i) => (
              <img
                key={i}
                src={img}
                className="w-[100px] h-[100px ] sm:w-[200px] h-[200px]  object-cover rounded-lg"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
