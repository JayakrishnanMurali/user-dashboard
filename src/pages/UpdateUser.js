import axios from "axios";
import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import UserContext from "../context/user-context";

const UpdateUser = () => {
  const { userdata, setUserData } = useContext(UserContext);
  const { id } = useParams();

  var currentUser = userdata.find((item) => item.id == id);

  const [firstName, setFirstName] = useState(currentUser.first_name);
  const [lastName, setLastName] = useState(currentUser.last_name);
  const [email, setEmail] = useState(currentUser.email);

  const history = useHistory();

  const updateApiCall = async () => {
    const response = await axios.put(`https://reqres.in/api/users/${id}`, {
      first_name: firstName,
      last_name: lastName,
      email: email,
    });
    return response;
  };

  const handleSubmit = () => {
    const updateUser = async () => {
      const res = await updateApiCall();
      if (res) {
        // console.log(res.data);
        const updatedUser = userdata.map((item) => {
          if (item.id == id) {
            item.first_name = firstName;
            item.last_name = lastName;
            item.email = email;
          }
          return item;
        });
        setUserData(updatedUser);
      }
    };
    updateUser();
    setFirstName("");
    setLastName("");
    setEmail("");
    history.push("/");
  };

  return (
    <div className="max-w-5xl mx-auto mt-24 text-center">
      <div>
        <h1 className="text-3xl font-bold">Update User</h1>
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

export default UpdateUser;
