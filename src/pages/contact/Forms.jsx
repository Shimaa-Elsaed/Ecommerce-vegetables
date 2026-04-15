import React from "react";
import { contacts } from "@/assets/img";
import { Button } from "@/components/ui/button";

const Forms = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Form */}
        <div className="space-y-5">
          <h1 className="text-green-500 text-xl md:text-2xl font-bold mb-6">
            Contact Forms
          </h1>
          <h1 className="text-2xl md:text-3xl font-semibold">Drop Us a Line</h1>

          <p className="text-gray-500 text-sm">
            Your email address will not be published. Required fields are marked
            *
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First name"
              className="p-3 border rounded-lg outline-none focus:ring-2 focus:ring-green-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 border rounded-lg outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="tel"
              placeholder="Your phone"
              className="p-3 border rounded-lg outline-none focus:ring-2 focus:ring-green-400"
            />
            <input
              type="text"
              placeholder="subject"
              className="p-3 border rounded-lg outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <textarea
            placeholder="Your Message"
            className="w-full p-4 border rounded-lg outline-none focus:ring-2 focus:ring-green-400 min-h-[150px]"
          ></textarea>

          <Button className="bg-green-500 hover:bg-green-600 px-6 py-2 rounded-lg">
            Send Message
          </Button>
        </div>

        {/* Image */}
        <div>
          <img
            src={contacts}
            alt="contact"
            className="w-full h-auto rounded-2xl shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Forms;
