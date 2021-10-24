import axios from "axios";
import React, { useEffect, useState } from "react";
import UserContext from "./user-context";
const UserState = (props) => {
  const getUsersApiCall = async () => {
    const response = await axios.get("https://reqres.in/api/users?page=1");
    return response;
  };

  const [isUserCreated, setIsUserCreated] = useState(false);
  const [isUserUpdated, setIsUserUpdated] = useState(false);

  const [userdata, setUserData] = useState([]);
  useEffect(() => {
    const getAllUsers = async () => {
      const res = await getUsersApiCall();
      if (res) {
        setUserData(res.data.data);
      }
    };
    getAllUsers();
  }, []);

  return (
    <UserContext.Provider
      value={{
        userdata: userdata,
        setUserData,
        isUserCreated: isUserCreated,
        setIsUserCreated,
        isUserUpdated: isUserUpdated,
        setIsUserUpdated,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
