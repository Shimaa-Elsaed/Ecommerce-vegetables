import React from "react";
import { banarimg } from "@/assets/img";
import { footer } from "@/assets/img";

import { CiMapPin } from "react-icons/ci";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { TbClockHour10Filled } from "react-icons/tb";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-50 mt-10 pt-10 text-gray-700">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Logo + Info */}
          <div className="lg:col-span-2">
            <img src={banarimg} className="w-32 mb-3" />

            <p className="text-sm mb-4">
              Awesome grocery store website template
            </p>

            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <CiMapPin className="text-lg mt-1" />
                <span>5171 W Campbell Ave, Kent, Utah</span>
              </li>

              <li className="flex items-center gap-2">
                <IoIosCall />
                <span>
                  Call us:{" "}
                  <span className="text-green-500">(+91)-540-025-124553</span>
                </span>
              </li>

              <li className="flex items-center gap-2">
                <MdEmail />
                <span>
                  Email: <span className="text-green-500">sale@Nest.com</span>
                </span>
              </li>

              <li className="flex items-center gap-2">
                <TbClockHour10Filled />
                <span>10:00 - 18:00, Mon - Sat</span>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-3">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>About Us</li>
              <li>Delivery Information</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Contact Us</li>
              <li>Support Center</li>
              <li>Careers</li>
            </ul>
          </div>

          {/* Account */}
          <div>
            <h3 className="font-semibold mb-3">Account</h3>
            <ul className="space-y-2 text-sm">
              <li>Sign In</li>
              <li>View Cart</li>
              <li>My Wishlist</li>
              <li>Track My Order</li>
              <li>Help Ticket</li>
              <li>Shipping Details</li>
              <li>Compare products</li>
            </ul>
          </div>

          {/* Corporate */}
          <div>
            <h3 className="font-semibold mb-3">Corporate</h3>
            <ul className="space-y-2 text-sm">
              <li>Become a Vendor</li>
              <li>Affiliate Program</li>
              <li>Farm Business</li>
              <li>Farm Careers</li>
              <li>Our Suppliers</li>
              <li>Accessibility</li>
              <li>Promotions</li>
            </ul>
          </div>

          {/* Popular + App */}
          <div>
            <h3 className="font-semibold mb-3">Popular</h3>
            <ul className="space-y-2 text-sm mb-4">
              <li>Milk & Flavoured Milk</li>
              <li>Butter and Margarine</li>
              <li>Eggs Substitutes</li>
              <li>Marmalades</li>
              <li>Sour Cream and Dips</li>
              <li>Tea & Kombucha</li>
              <li>Cheese</li>
            </ul>

            <h4 className="font-semibold mb-2">Install App</h4>
            <div className="flex gap-2">
              <img src={footer[1]} className="h-10" />
              <img src={footer[0]} className="h-10" />
            </div>
          </div>
        </div>
        <div className="border-t mt-10 py-6 flex flex-col md:flex-row justify-between items-center text-sm gap-4">
          <p className="text-center md:text-left">
            © 2023, Nest – WordPress Ecommerce Template.
            <br />
            All rights reserved{" "}
          </p>

          <div className="flex gap-6">
            <span className="flex items-center gap-1 ">
              <IoIosCall className="text-3xl" />
              <div>
                <span className="text-xl text-green-500 font-bold">
                  1900646666
                </span>
                <h1>Working 8:00 - 22:00</h1>
              </div>
            </span>
            <span className="flex items-center gap-1 ">
              <IoIosCall className="text-3xl" />
              <div>
                <span className="text-xl text-green-500 font-bold">
                  1900646666
                </span>
                <h1>24/7 Support Center</h1>
              </div>
            </span>
          </div>

          <div className="">
            <div className="flex gap-3">
              <h1 className="text-xl font-semibold">Follow Us</h1>
              <span className="bg-green-500 text-white p-2  rounded-full cursor-pointer hover:bg-green-600">
                <FaFacebook />
              </span>
              <span className="bg-green-500 text-white p-2 rounded-full cursor-pointer hover:bg-green-600">
                <FaTwitter />
              </span>
              <span className="bg-green-500 text-white p-2 rounded-full cursor-pointer hover:bg-green-600">
                <FaLinkedin />
              </span>
              <span className="bg-green-500 text-white p-2 rounded-full cursor-pointer hover:bg-green-600">
                <FaGithub />
              </span>
            </div>
            <h1>Up to 15% discount on your first subscribe</h1>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
