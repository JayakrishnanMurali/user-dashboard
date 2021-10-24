import React from "react";
import { Plus } from "react-feather";
import MaterialUITable from "./MaterialUITable";

const UserData = () => {
  return (
    <div className="h-screen ">
      <div className="px-8 pt-16 items-center flex justify-between">
        <h1 className="text-4xl font-semibold">Registered Users</h1>
        <div className="flex mr-60 bg-blue-500 cursor-pointer transition-all duration-300 ease-in-out hover:bg-blue-700 py-3 px-4 items-center justify-center rounded-full">
          <Plus className="text-white" />
          <h1 className="text-white text-lg ml-2">Create User</h1>
        </div>
      </div>

      <MaterialUITable />
    </div>
  );
};

export default UserData;
