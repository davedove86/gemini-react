export const personDataColumns = [
  { field: "id", headerName: "id", width: "200" },
  {
    field: "img",
    headerName: "image",
    width: "100",
    renderCell: (params) => {
      return (
        <img src={params.value} alt={params.value} className="personImage" />
      );
    },
  },
  { field: "personfirstname", headerName: "First Name", width: "150" },
  { field: "personlastname", headerName: "Last Name", width: "150" },
  { field: "persondob", headerName: "DOB", width: "120" },
  { field: "personaddress", headerName: "Address", width: "200" },
  { field: "persontown", headerName: "Town", width: "100" },
  { field: "personcity", headerName: "City", width: "100" },
  { field: "personpostcode", headerName: "Postcode", width: "100" },
];

export const premiseDataColumns = [
  { field: "id", headerName: "id", width: "200" },
  {
    field: "img",
    headerName: "image",
    width: "100",
    renderCell: (params) => {
      return (
        <img src={params.value} alt={params.value} className="personImage" />
      );
    },
  },
  { field: "premisename", headerName: "Name", width: "200" },
  { field: "premiseaddress", headerName: "Address", width: "200" },
  { field: "premisetown", headerName: "Town", width: "200" },
  { field: "premisecity", headerName: "City", width: "200" },
  { field: "premisepostcode", headerName: "Postcode", width: "100" },
  { field: "premisestatus", headerName: "Status", width: "100" },
];

export const taskDataColumns = [
  // { field: "id", headerName: "id", width: "200" },
  { field: "name", headerName: "Task", width: "500" },
  { field: "officer", headerName: "Officer", width: "150" },
  { field: "duedate", headerName: "Due Date", width: "200" },
  { field: "status", headerName: "Status", width: "100" },
];
