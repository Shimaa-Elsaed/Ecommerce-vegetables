import React from "react";

const TopBar = () => {
  return (
    <div className="flex justify-between items-center px-4 py-2 bg-gray-100">
      <div className="flex gap-4 font-bold text-sm">
        <span>About Us</span>
        <span>My Account</span>
        <span>Wish List</span>
        <span>Order Tracking</span>
      </div>
      <p className="text-green-600">
        100% Secure delivery without contacting the courier
      </p>
      <div className="flex gap-3 font-bold text-sm">
        <span>Need help? Call Us:</span>
        <span>+1800900122</span>
        <span>English</span>
      </div>
    </div>
  );
};

export default TopBar;
