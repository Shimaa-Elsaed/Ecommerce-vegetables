import React from "react";
import { partener } from "@/assets/img";

const Partener = () => {
  const history = [
    {
      name: "Who We Are",
      desc: "Volutpat diam ut venenatis tellus in metusdiam ut venenatis tellus in metusdiam ut venenatis tellus in metus...",
    },
    {
      name: "Our History",
      desc: "Volutpat diam ut venenatis tellus in metusdiam ut venenatis tellus in metusdiam ut venenatis tellus in metus...",
    },
    {
      name: "Our Mission",
      desc: "Volutpat diam ut venenatis tellus in metusdiam ut venenatis tellus in metusdiam ut venenatis tellus in metus...",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 space-y-10">
      {/* 👇 أول سكشن */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <img
          src={partener[0]}
          className="rounded-2xl w-full h-[350px] object-cover"
        />

        <div className="space-y-3">
          <h2 className="text-green-500 font-semibold">Our performance</h2>

          <h1 className="text-2xl md:text-3xl font-bold">
            Your Partner for <br />
            e-commerce grocery solution
          </h1>

          <p className="text-gray-600 text-sm">
            Ed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto{" "}
          </p>

          <p className="text-gray-600 text-sm">
            Pitatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
            enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia ipsam voluptatem quia voluptas sit aspernatur aut
            odit aut fugit, sed quia{" "}
          </p>
        </div>
      </div>

      {/* 👇 3 كروت */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        {history.map((item, index) => (
          <div key={index} className="p-4">
            <h2 className="font-bold text-lg mb-2">{item.name}</h2>
            <p className="text-gray-500 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* 👇 الإحصائيات */}
      <div
        className="rounded-2xl overflow-hidden relative"
        style={{
          backgroundImage: `url(${partener[1]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative grid grid-cols-2 sm:grid-cols-5 text-center text-white py-20">
          <div>
            <h1 className="text-4xl font-bold">0+</h1>
            <p>Glorious years</p>
          </div>

          <div>
            <h1 className="text-4xl font-bold">0+</h1>
            <p>Happy Clients</p>
          </div>

          <div>
            <h1 className="text-4xl font-bold">0+</h1>
            <p>Projects Complete</p>
          </div>

          <div>
            <h1 className="text-4xl font-bold">0+</h1>
            <p>Team advisor</p>
          </div>

          <div>
            <h1 className="text-4xl font-bold">0+</h1>
            <p>Product Sales</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partener;
