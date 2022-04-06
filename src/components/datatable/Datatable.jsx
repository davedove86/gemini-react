import "./datatable.scss";
import "../../style/dark.scss";
import { DataGrid } from '@mui/x-data-grid';
import { dataColumns, dataRows } from "../../dataTableSource";
import { Link } from "react-router-dom";
import { useState } from "react";


const Datatable = () => {
  const [data, setData] = useState(dataRows)

  const handleDelete = (id)=> {
    setData(data.filter((item) => item.id !== id))
  }

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/person/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div className="deleteButton" onClick={()=>handleDelete(params.row.id)}>Delete</div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add new person
        <Link to="/person/new" style={{ textDecoration: "none" }} className="link">
          <div className="viewButton">Add New</div>
        </Link>
      </div>

      <div style={{ height: "630px", width: '100%' }}>
      <DataGrid className="datagrid"
        rows={data}
        columns={dataColumns.concat(actionColumn)}
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
    </div>
  )
};

export default Datatable