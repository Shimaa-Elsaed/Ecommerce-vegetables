/*import React from "react";
import TopBar from "./TopBar";
import MainHeader from "./MainHeader";
import NavHeader from "./NavHeader";

const Header = () => {
  return (
    <div>
      <TopBar />
      <MainHeader />
      <NavHeader />
    </div>
  );
};

export default Header;
*/
import React from "react";
import TopBar from "./TopBar";
import MainHeader from "./MainHeader";
import NavHeader from "./NavHeader";

const Header = ({ cart }) => {
  return (
    <div className="sticky top-0 z-50 bg-white">
      <TopBar />
      <MainHeader cart={cart} /> {/* 👈 بعتنا cart */}
      <NavHeader />
    </div>
  );
};

export default Header;
