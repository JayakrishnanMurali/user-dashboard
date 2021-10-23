import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import UserData from "./UserData/UserData";

const HomePageComponent = () => {
  return (
    <div className="grid grid-cols-5">
      <div className=" h-screen">
        <Sidebar />
      </div>
      <div className="bg-gray-100 col-span-4 h-screen">
        <UserData />
      </div>
    </div>
  );
};

export default HomePageComponent;
