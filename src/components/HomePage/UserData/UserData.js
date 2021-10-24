import React from "react";
import { Plus } from "react-feather";
import { Link } from "react-router-dom";
import MaterialUITable from "./MaterialUITable";

const UserData = () => {
  return (
    <div className="h-screen overflow-hidden">
      <div className="px-8 pt-16 items-center flex justify-between">
        <div>
          <h1 className="text-4xl font-bold">Dashboard</h1>
          <p className="text-gray-500 ml-1">Regestired Users</p>
        </div>
        <div className="flex mr-60 bg-blue-500 cursor-pointer transition-all duration-300 ease-in-out hover:bg-blue-700 py-3 px-4 items-center justify-center rounded-full">
          <Plus className="text-white" />
          <Link to="/create-user" className="text-white text-lg ml-2">
            Create User
          </Link>
        </div>
      </div>

      <MaterialUITable />
    </div>
  );
};

export default UserData;
