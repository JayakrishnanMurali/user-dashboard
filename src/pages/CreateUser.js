import axios from "axios";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import UserContext from "../context/user-context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateUser = () => {
  const { userdata, setUserData, setIsUserCreated, setIsUserUpdated } =
    useContext(UserContext);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const history = useHistory();

  const notifyFailure = () => toast.error("Fill all fields");

  const createUserApiCall = async () => {
    const response = await axios.post(
      "https://reqres.in/api/users?per_page=10",
      {
        first_name: firstName,
        last_name: lastName,
        email: email,
        avatar:
          "https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?b=1&k=20&m=1300845620&s=170667a&w=0&h=JbOeyFgAc6-3jmptv6mzXpGcAd_8xqkQa_oUK2viFr8=",
      }
    );
    return response;
  };

  const handleSubmit = () => {
    if (firstName === "" || lastName === "" || email === "") {
      notifyFailure();
    } else {
      setIsUserCreated(true);
      const addUser = async () => {
        const res = await createUserApiCall();
        if (res) {
          setUserData([...userdata, res.data]);
        }
      };
      addUser();
      setFirstName("");
      setLastName("");
      setEmail("");
      setIsUserCreated(true);
      setIsUserUpdated(false);
      history.push("/");
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="max-w-5xl mx-auto mt-24 text-center">
        <div>
          <h1 className="text-3xl font-bold">Create New User</h1>
        </div>

        <div
          className="mt-8 bg-gray-100 
         h-96 grid place-items-center sm:max-w-md  md:max-w-3xl
        mx-auto shadow-md p-8"
        >
          <div className="flex flex-col">
            <label className="text-gray-500 font-medium" htmlFor="">
              <div className="flex">
                First Name:
                <input
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  type="text"
                  className="border ml-4 outline-none text-gray-500 p-1"
                />
              </div>
            </label>
            <label className="text-gray-500 font-medium my-4" htmlFor="">
              <div className="flex">
                Last Name:
                <input
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  type="text"
                  className="border ml-4 outline-none text-gray-500 p-1"
                />
              </div>
            </label>
            <label className="text-gray-500 font-medium" htmlFor="">
              <div className="flex">
                Email:
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="border ml-14 outline-none text-gray-500 p-1"
                />
              </div>
            </label>
            <div className="flex">
              <button
                onClick={() => handleSubmit()}
                className="ml-12 sm:ml-24 bg-blue-400 hover:bg-blue-500 transition-all duration-300 ease-in-out py-2 px-6 rounded-lg mt-4 max-w-xs mx-auto text-white "
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
    </>
  );
};

export default CreateUser;
