import React from "react";
import Sidebar from "./SideBar/Sidebar";
import UserData from "./UserData/UserData";

const HomePageComponent = () => {
  return (
    <div className="grid lg:grid-cols-5">
      <div className=" h-screen hidden lg:block">
        <Sidebar />
      </div>
      <div className="lg:bg-gray-100 col-span-4 h-screen">
        <UserData />
      </div>
    </div>
  );
};

export default HomePageComponent;
