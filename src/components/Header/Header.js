import React from "react";
import { Link } from "react-router-dom";
import { Bell, User } from "react-feather";

const Header = () => {
  return (
    <div className="flex justify-between p-4 items-center w-screen h-16 fixed top-0">
      <div className="">
        <Link to="/" className="text-2xl font-bold cursor-pointer">
          botbaba.io
        </Link>
      </div>
      <div className="flex cursor-pointer">
        <Bell className="text-gray-500" />
        <h1 className="ml-6 mr-2 font-semibold text-gray-500">Admin</h1>
        <User className="text-gray-500" />
      </div>
    </div>
  );
};

export default Header;
