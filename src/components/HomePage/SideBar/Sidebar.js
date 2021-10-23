import React from "react";
import { Grid, RefreshCcw, Settings } from "react-feather";

const Sidebar = () => {
  return (
    <div className="mt-32 mx-8 flex flex-col">
      <div>
        <div className="flex items-center bg-blue-100 p-3 w-full rounded-xl cursor-pointer    ">
          <Grid className="text-blue-500" />
          <h1 className="ml-2 text-xl text-blue-500 font-medium">Dashboard</h1>
        </div>

        <div className="flex items-center bg-gray-100 p-3 w-full transition-all duration-300 ease-in-out hover:bg-blue-100 group rounded-xl cursor-pointer mt-4">
          <RefreshCcw className="text-gray-700 transition-all duration-300 ease-in-out group-hover:text-blue-500" />
          <h1 className="ml-2 text-xl text-gray-500 transition-all duration-300 ease-in-out group-hover:text-blue-500 font-medium">
            History
          </h1>
        </div>
        <div className="flex items-center bg-gray-100 p-3 w-full transition-all duration-300 ease-in-out hover:bg-blue-100 group rounded-xl cursor-pointer mt-4">
          <Settings className="text-gray-700 transition-all duration-300 ease-in-out group-hover:text-blue-500" />
          <h1 className="ml-2 text-xl text-gray-500 transition-all duration-300 ease-in-out group-hover:text-blue-500 font-medium">
            Settings
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
