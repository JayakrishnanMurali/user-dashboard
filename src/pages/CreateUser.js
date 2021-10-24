import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const CreateUser = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const history = useHistory();

  const createUserApiCall = async () => {
    const response = await axios.post(
      "https://reqres.in/api/users?per_page=10",
      {
        first_name: firstName,
        last_name: lastName,
        email: email,
      }
    );
    return response;
  };

  const handleSubmit = (e) => {
    const addUser = async () => {
      const res = await createUserApiCall();
      if (res) {
        console.log("Checking: ", res.data);
      }
    };
    addUser();
    setFirstName("");
    setLastName("");
    setEmail("");
    history.push("/");
  };

  return (
    <div className="max-w-5xl mx-auto mt-24 text-center">
      <div>
        <h1 className="text-3xl font-bold">Create New User</h1>
      </div>

      <div className="mt-8 bg-gray-100 max-w-3xl mx-auto shadow-md p-8">
        <div className="flex flex-col">
          <label className="text-gray-500 font-medium" htmlFor="">
            First Name:
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              className="border ml-4 outline-none text-gray-500 p-1"
            />
          </label>
          <label className="text-gray-500 font-medium my-4" htmlFor="">
            Last Name:
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              className="border ml-4 outline-none text-gray-500 p-1"
            />
          </label>
          <label className="text-gray-500 font-medium" htmlFor="">
            Email:
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="border ml-14 outline-none text-gray-500 p-1"
            />
          </label>
          <div>
            <button
              onClick={() => handleSubmit()}
              className="ml-28 bg-blue-400 hover:bg-blue-500 transition-all duration-300 ease-in-out py-2 px-6 rounded-lg mt-4 max-w-xs mx-auto text-white "
            >
              Create
            </button>
            <Link
              to={"/"}
              className=" ml-4 bg-gray-400 hover:bg-gray-500 transition-all duration-300 ease-in-out py-2 px-6 rounded-lg mt-4 max-w-xs mx-auto text-white "
              type="submit"
            >
              Cancel
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
