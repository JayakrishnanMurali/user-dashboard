import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Edit2, Trash2 } from "react-feather";
import axios from "axios";

const MaterialUITable = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "user",
      headerName: "Users",
      width: 300,
      renderCell: (params) => {
        return (
          <div className="flex items-center">
            <img
              src={params.row.avatar}
              alt="img"
              className="object-cover w-8 h-8 rounded-full mr-2"
            />
            {params.row.user}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 300 },
    {
      field: "actions",
      headerName: "Actions",
      width: 400,
      renderCell: () => {
        return (
          <div className="flex items-center cursor-pointer">
            <div className="bg-gray-200  transition-all ease-in-out duration-300 hover:bg-green-500 w-10 h-10 grid place-items-center rounded-lg mr-4">
              <Edit2 className="w-5 h-5" />
            </div>
            <div className="bg-gray-200 w-10 h-10 grid place-items-center rounded-lg transition-all ease-in-out duration-300 hover:bg-red-500">
              <Trash2 className="w-5 h-5" />
            </div>
          </div>
        );
      },
    },
  ];

  const getUsersApiCall = async () => {
    const response = await axios.get("https://reqres.in/api/users?page=2");
    return response;
  };

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

  console.table("Userdata: ", userdata);

  const rows = userdata.map(({ id, avatar, first_name, last_name, email }) => ({
    id: id,
    avatar: avatar,
    user: first_name + " " + last_name,
    email: email,
  }));

  return (
    <div className="h-5/6 pt-8 mt-2">
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default MaterialUITable;
