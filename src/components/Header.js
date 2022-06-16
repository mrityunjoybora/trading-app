import React from "react";
import logo from "../images/download__2_-removebg-preview.png";
import DefaultProfilePhoto from "../images/profile-icon-9.png";
import ProfilePhoto from "../images/pexels-andrea-piacquadio-3777943.jpg"

function Header() {
  return (
    <div className=" shadow-lg">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex justify-between items-center px-10 py-5">
          <img className="h-6" src={logo} alt="" />
          <div className="flex items-center">
            <div className="flex items-center gap-5 mx-5 text-sm">
              <p>Dashboard</p>
              <p>Orders</p>
              <p>Holdings</p>
              <p>Positions</p>
              <p>Funds</p>
              <p>Apps</p>
            </div>
            <div className="flex items-center gap-3 px-5 text-sm">
              <img
                className="h-8 w-8 rounded-full object-cover"
                src={ProfilePhoto}
                alt=""
              />
              <p>DE7849</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
