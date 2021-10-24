import React from "react";

const CreateUser = () => {
  return (
    <div className="max-w-5xl mx-auto mt-24 text-center">
      <div>
        <h1 className="text-3xl font-bold">Create New User</h1>
      </div>

      <div className="mt-8 bg-gray-100 max-w-3xl mx-auto shadow-md p-8">
        <form className="flex flex-col">
          <label className="text-gray-500 font-medium" htmlFor="">
            First Name:
            <input
              type="text"
              className="border ml-4 outline-none text-gray-500 p-1"
            />
          </label>
          <label className="text-gray-500 font-medium my-4" htmlFor="">
            Last Name:
            <input
              type="text"
              className="border ml-4 outline-none text-gray-500 p-1"
            />
          </label>
          <label className="text-gray-500 font-medium" htmlFor="">
            Email:
            <input
              type="email"
              className="border ml-14 outline-none text-gray-500 p-1"
            />
          </label>
          <div>
            <button
              className="ml-28 bg-blue-400 py-2 px-6 rounded-lg mt-4 max-w-xs mx-auto text-white "
              type="submit"
            >
              Create
            </button>
            <button
              className=" ml-4 bg-gray-400 py-2 px-6 rounded-lg mt-4 max-w-xs mx-auto text-white "
              type="submit"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
