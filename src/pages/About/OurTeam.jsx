import React from "react";
import { team } from "@/assets/img";
import { Button } from "@/components/ui/button";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const OurTeam = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
      {/* العنوان */}
      <div className="text-center mb-10">
        <p className=" text-3xl font-semibold">Our Team</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* 👇 النص */}
        <div className="space-y-4 mt-8">
          <p className="text-green-500 font-medium">Our Team</p>

          <h1 className="text-2xl md:text-3xl font-bold">
            Meet Our Expert Team
          </h1>

          <p className="text-gray-600 text-sm">
            Proin ullamcorper pretium orci. Donec necscele risque leo. Nam massa
            dolor imperdiet neccon sequata congue idsem. Maecenas malesuada
            faucibus finibus.{" "}
          </p>

          <p className="text-gray-600 text-sm">
            Proin ullamcorper pretium orci. Donec necscele risque leo. Nam massa
            dolor imperdiet neccon sequata congue idsem. Maecenas malesuada
            faucibus finibus.{" "}
          </p>

          <Button className="bg-green-500 text-white mt-4">
            View All Members
          </Button>
        </div>

        <div className="relative mb-4 mt-8">
          <img
            src={team[0]}
            className="w-full h-[300px] object-cover rounded-2xl"
          />

          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-[85%] bg-white shadow-xl rounded-xl p-4 text-center">
            <h2 className="font-bold">H. Merinda</h2>
            <p className="text-gray-400 text-sm">CEO & Co-Founder</p>

            <div className="flex justify-center gap-4 mt-3 text-green-500">
              <FaFacebook />
              <FaTwitter />
              <FaLinkedin />
              <FaGithub />
            </div>
          </div>
        </div>

        <div className="relative mt-8">
          <img
            src={team[1]}
            className="w-full h-[300px] object-cover rounded-2xl"
          />

          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-[85%] bg-white shadow-xl rounded-xl p-4 text-center">
            <h2 className="font-bold">Dilan Specter</h2>
            <p className="text-gray-400 text-sm">Head Engineer</p>

            <div className="flex justify-center gap-4 mt-3 text-green-500">
              <FaFacebook />
              <FaTwitter />
              <FaLinkedin />
              <FaGithub />
            </div>
          </div>
        </div>
      </div>

      <div className="h-16"></div>
    </div>
  );
};

export default OurTeam;
