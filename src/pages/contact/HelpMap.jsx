import React from "react";
import { Button } from "@/components/ui/button";

const HelpMap = () => {
  const office = [
    {
      name: "Office",
      desc: {
        name: "name:205 North Michigan Avenue,",
        city: "city: Suite 810Chicago",
        email: "email: contact@Evara.com",
        phone: "USAPhone: (123) 456-7890",
      },
      btn: "View Map",
    },
    {
      name: "Studio",
      desc: {
        name: "name:205 North Michigan Avenue,",
        city: "city: Suite 810Chicago",
        email: "email: contact@Evara.com",
        phone: "USAPhone: (123) 456-7890",
      },
      btn: "View Map",
    },
    {
      name: "Shop",
      desc: {
        name: "name:205 North Michigan Avenue,",
        city: "city: Suite 810Chicago",
        email: "email: contact@Evara.com",
        phone: "USAPhone: (123) 456-7890",
      },
      btn: "View Map",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
      <h1 className="text-green-500 text-xl md:text-2xl font-bold mb-6">
        How can help you ?
      </h1>

      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold">
            Let us know how <br /> we can help you
          </h1>

          <p className="py-4 text-gray-500 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut <br />
            elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>

          <p className="text-sm text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            <br /> elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
            leo.
          </p>
        </div>

        <div>
          <h1 className="font-semibold">01. Visit Feedback</h1>
          <p className="text-sm py-4 text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut <br />
            elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>

          <h1 className="text-green-500 py-1 font-semibold">
            03. Billing Inquiries
          </h1>
          <p className="text-sm py-2 text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut <br />
            elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>

        <div>
          <h1 className="font-semibold">02. Employer Services</h1>
          <p className="py-4 text-sm text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut <br />
            elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>

          <h1 className="font-semibold">04.General Inquiries</h1>
          <p className="text-sm py-2 text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut <br />
            elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
      </div>

      {/* Map */}
      <div className="w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow mb-10">
        <iframe
          title="map"
          src="https://www.google.com/maps?q=30.7822592,31.0247424&hl=es;z=14&output=embed"
          className="w-full h-full border-0"
          loading="lazy"
          allowFullScreen
        ></iframe>
      </div>

      {/* Offices */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {office.map((item, index) => (
          <div
            key={index}
            className="border rounded-xl p-5 shadow-sm hover:shadow-md transition"
          >
            <h1 className="text-xl font-semibold text-green-500 py-2">
              {item.name}
            </h1>

            <div className="text-sm text-gray-600 space-y-1">
              <p>{item.desc.name}</p>
              <p>{item.desc.email}</p>
              <p>{item.desc.city}</p>
              <p>{item.desc.phone}</p>
            </div>

            <Button className="bg-green-500 hover:bg-green-600 mt-4 px-4">
              {item.btn}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HelpMap;
