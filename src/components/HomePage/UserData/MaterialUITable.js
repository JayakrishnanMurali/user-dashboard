import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const MaterialUITable = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "avatar", headerName: "Avatar", width: 170 },
    { field: "firstName", headerName: "First name", width: 170 },
    { field: "lastName", headerName: "Last name", width: 170 },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.getValue(params.id, "firstName") || ""} ${
          params.getValue(params.id, "lastName") || ""
        }`,
    },
    { field: "email", headerName: "Email", width: 400 },
  ];

  const rows = [
    {
      id: 1,
      avatar: "Profile.jpg",
      lastName: "Snow",
      firstName: "Jon",
      email: "jon@gmail.com",
    },
  ];

  return (
    <div className="h-5/6 pt-8 mt-2">
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={9}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default MaterialUITable;
