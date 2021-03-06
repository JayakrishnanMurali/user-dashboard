import React, { useContext } from "react";
import { Plus } from "react-feather";
import { Link } from "react-router-dom";
import MaterialUITable from "./MaterialUITable";
import UserContext from "../../../context/user-context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserData = () => {
  const { isUserCreated, isUserUpdated } = useContext(UserContext);

  const notifyCreated = () => {
    toast.success("User Created Successfully!");
  };
  const notifyUpdated = () => {
    toast.success("User Updated Successfully!");
  };
  return (
    <>
      <ToastContainer />
      <div className="h-screen overflow-hidden">
        <div className="px-8 sm:pt-16 pt-20 items-center flex justify-between">
          <div>
            <h1 className="sm:text-4xl text-2xl font-bold">Dashboard</h1>
            <p className="text-gray-500 sm:text-base text-sm ml-1">
              Regestired Users
            </p>
          </div>
          <Link to="/create-user" className="text-white text-lg ml-2">
            <div className="flex sm:mr-4 mr-2 lg:mr-60 bg-blue-500 cursor-pointer transition-all duration-300 ease-in-out hover:bg-blue-700 py-3 px-4 items-center justify-center rounded-full">
              <Plus className="text-white" />
              <div className="hidden sm:block">Create User</div>
            </div>
          </Link>
        </div>
        <MaterialUITable />
        {isUserCreated ? notifyCreated() : ""}
        {isUserUpdated ? notifyUpdated() : ""}
      </div>
    </>
  );
};

export default UserData;
