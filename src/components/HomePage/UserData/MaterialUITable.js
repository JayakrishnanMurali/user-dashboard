import React, { useContext } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Edit2, Trash2 } from "react-feather";
import UserContext from "../../../context/user-context";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MaterialUITable = () => {
  const { userdata, setUserData } = useContext(UserContext);

  const notifyFailure = () => toast.error("User Deleted!!");

  const handleDelete = (id) => {
    setUserData(userdata.filter((item) => item.id !== id));
    notifyFailure();
  };

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
      renderCell: (params) => {
        return (
          <div className="flex items-center cursor-pointer">
            <Link to={"/update-user/" + params.row.id}>
              <div className="bg-gray-200  transition-all ease-in-out duration-300 hover:bg-green-500 w-10 h-10 grid place-items-center rounded-lg mr-4">
                <button>
                  <Edit2 className="w-5 h-5" />
                </button>
              </div>
            </Link>
            <div
              onClick={() => handleDelete(params.row.id)}
              className="bg-gray-200 w-10 h-10 grid place-items-center rounded-lg transition-all ease-in-out duration-300 hover:bg-red-500"
            >
              <div>
                <Trash2 className="w-5 h-5" />
              </div>
            </div>
          </div>
        );
      },
    },
  ];

  const rows = userdata.map(({ id, avatar, first_name, last_name, email }) => ({
    id: id,
    avatar: avatar,
    user: first_name + " " + last_name,
    email: email,
  }));

  return (
    <>
      <ToastContainer />

      <div className="h-5/6 pt-8 mt-2">
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={9}
          rowsPerPageOptions={[9]}
          checkboxSelection
        />
      </div>
    </>
  );
};

export default MaterialUITable;
