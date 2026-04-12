/*import React from "react";
import { banarimg } from "../../assets/img";
import { Input } from "../ui/input";
import { Field } from "../ui/field";
import { Button } from "../ui/button";
import { FaCodeCompare, FaCartShopping } from "react-icons/fa6";
import { GiSelfLove } from "react-icons/gi";
import { CiUser } from "react-icons/ci";

const MainHeader = () => {
  return (
    <div className="px-4 md:px-6 py-3 bg-white shadow-sm">
      <div className="flex md:hidden justify-between items-center">
        <img src={banarimg} alt="logo" className="w-24" />

        <div className="flex items-center gap-4 text-lg">
          <FaCodeCompare className="text-green-600" />
          <GiSelfLove className="text-green-600" />
          <FaCartShopping className="text-green-600" />
          <CiUser className="text-green-600" />
        </div>
      </div>

      <div className="hidden md:flex justify-between items-center">
        <img src={banarimg} alt="logo" className="w-28" />

        <div className="w-1/3">
          <Field orientation="horizontal" className="flex gap-2">
            <Input type="search" placeholder="Search..." />
            <Button className="bg-green-500 hover:bg-green-600 text-white">
              Search
            </Button>
          </Field>
        </div>

        <div className="flex items-center gap-6 text-sm">
          <div className="flex items-center gap-1 cursor-pointer hover:text-green-700">
            <FaCodeCompare className="text-green-600" />
            <span>Compare</span>
          </div>

          <div className="flex items-center gap-1 cursor-pointer hover:text-green-700">
            <GiSelfLove className="text-green-600" />
            <span>WishList</span>
          </div>

          <div className="flex items-center gap-1 cursor-pointer hover:text-green-700">
            <FaCartShopping className="text-green-600" />
            <span>Cart</span>
          </div>

          <div className="flex items-center gap-1 cursor-pointer hover:text-green-700">
            <CiUser className="text-green-600" />
            <span>Account</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;

*/
import React from "react";
import { banarimg } from "../../assets/img";
import { Input } from "../ui/input";
import { Field } from "../ui/field";
import { Button } from "../ui/button";
import { FaCodeCompare, FaCartShopping } from "react-icons/fa6";
import { GiSelfLove } from "react-icons/gi";
import { CiUser } from "react-icons/ci";
import { Link } from "react-router-dom"; // 👈 مهم

const MainHeader = ({ cart }) => {
  // 👇 بنحسب عدد المنتجات
  const totalQty = cart.reduce((acc, item) => acc + item.qty, 0);

  return (
    <div className="px-4 md:px-6 py-3 bg-white shadow-sm">
      {/* 📱 Mobile */}
      <div className="flex md:hidden justify-between items-center">
        <img src={banarimg} className="w-24" />

        <div className="flex items-center gap-4 text-lg">
          <FaCodeCompare className="text-green-600" />
          <GiSelfLove className="text-green-600" />

          {/* 👇 الكارت */}
          <Link to="/cart">
            <div className="relative">
              <FaCartShopping className="text-green-600" />

              {totalQty > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {totalQty}
                </span>
              )}
            </div>
          </Link>

          <CiUser className="text-green-600" />
        </div>
      </div>

      {/* 💻 Desktop */}
      <div className="hidden md:flex justify-between items-center">
        <img src={banarimg} className="w-28" />

        <div className="w-1/3">
          <Field orientation="horizontal" className="flex gap-2">
            <Input type="search" placeholder="Search..." />
            <Button className="bg-green-500 text-white">Search</Button>
          </Field>
        </div>

        <div className="flex items-center gap-6 text-sm">
          <div className="flex gap-1">
            <FaCodeCompare className="text-green-600" />
            <span>Compare</span>
          </div>

          <div className="flex gap-1">
            <GiSelfLove className="text-green-600" />
            <span>WishList</span>
          </div>

          {/* 👇 الكارت */}
          <Link to="/cart">
            <div className="relative flex gap-1 cursor-pointer">
              <FaCartShopping className="text-green-600" />
              <span>Cart</span>

              {totalQty > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {totalQty}
                </span>
              )}
            </div>
          </Link>

          <div className="flex gap-1">
            <CiUser className="text-green-600" />
            <span>Account</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
