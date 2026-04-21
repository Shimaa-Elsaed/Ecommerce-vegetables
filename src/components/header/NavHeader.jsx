import React, { useState } from "react";
import { Button } from "../ui/button";
import { FaMusic } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";

const NavHeader = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="px-4 py-2">
      {/* 🔥 Top Row */}
      <div className="flex justify-between items-center">
        {/* Button */}
        <Button className="bg-green-500">Browse All Ctogries</Button>

        {/* 📱 Menu Icon */}
        <div className="md:hidden">
          {open ? (
            <HiX
              className="text-2xl cursor-pointer"
              onClick={() => setOpen(false)}
            />
          ) : (
            <HiMenu
              className="text-2xl cursor-pointer"
              onClick={() => setOpen(true)}
            />
          )}
        </div>

        {/* 💻 Desktop Menu */}
        <div className="hidden md:flex gap-6 font-medium">
          <Link to="/">
            <span className="hover:text-green-600 cursor-pointer">Home</span>
          </Link>
          <Link to="/about">
            <span className="hover:text-green-600 cursor-pointer">About</span>
          </Link>
          <span className="hover:text-green-600 cursor-pointer">Shop</span>
          <Link to="/venders">
            <span className="hover:text-green-600 cursor-pointer">Venders</span>
          </Link>
          <Link to="/mega">
            <span className="hover:text-green-600 cursor-pointer">
              MegaMenue
            </span>{" "}
          </Link>

          <Link to="/blog">
            <span className="hover:text-green-600 cursor-pointer">Blog</span>
          </Link>
          <span className="hover:text-green-600 cursor-pointer">Pages</span>
          <Link to="/contact">
            <span className="hover:text-green-600 cursor-pointer">Contact</span>
          </Link>
        </div>

        {/* 💻 Support (Desktop only) */}
        <div className="hidden md:flex items-center gap-3">
          <FaMusic className="text-2xl" />
          <div>
            <h1 className="text-green-500 font-bold">1900888123</h1>
            <p className="text-sm">Support Center</p>
          </div>
        </div>
      </div>

      {/* 📱 Mobile Menu (Dropdown) */}
      {open && (
        <div className="flex flex-col gap-3 mt-4 md:hidden font-medium">
          <Link to="/">
            {" "}
            <span className="hover:text-green-600 cursor-pointer">Home</span>
          </Link>

          <Link to="/about">
            <span className="hover:text-green-600 cursor-pointer">About</span>
          </Link>
          <span className="hover:text-green-600 cursor-pointer">Shop</span>
          <Link to="/venders">
            <span className="hover:text-green-600 cursor-pointer">Venders</span>
          </Link>
          <Link to="/mega">
            <span className="hover:text-green-600 cursor-pointer">
              MegaMenue
            </span>
          </Link>

          <Link to="/blog">
            <span className="hover:text-green-600 cursor-pointer">Blog</span>
          </Link>
          <span className="hover:text-green-600 cursor-pointer">Pages</span>
          <Link to="/contact">
            <span className="hover:text-green-600 cursor-pointer">Contact</span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavHeader;
