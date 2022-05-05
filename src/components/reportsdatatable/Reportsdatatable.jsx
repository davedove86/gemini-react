import "./reportsdatatable.scss";
import "../../style/dark.scss";
import { DataGrid } from '@mui/x-data-grid';
import { reportsDataColumns } from "../../dataTableSource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, getDocs, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import {db} from "../../firebase";


const Reportsdatatable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
  // Listen (Realtime)
  const unsub = onSnapshot(collection(db, "reports"), (snapshot) => {
    let list = [];
    snapshot.forEach((doc) => {
      list.push({id: doc.id, ...doc.data()});
    });
    setData(list);
}, (error) => {
  console.log(error);
});

return () => {
  unsub();
}
  },[]);

  const handleDelete = async(id)=> {
    try{
      await deleteDoc(doc(db, "reports", id));
      setData(data.filter((item) => item.id !== id))

    } catch(err) {
      console.log(err);
    }

  }

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/reports/test" style={{ textDecoration: "none" }}>
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
        Add new premise
        <Link to="/reports/new" style={{ textDecoration: "none" }} className="link">
          <div className="viewButton">Add New</div>
        </Link>
      </div>

      <div style={{ height: "100%", width: '100%' }}>
      <DataGrid className="datagrid"
        rows={data}
        columns={reportsDataColumns.concat(actionColumn)}
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
    </div>
  )
};

export default Reportsdatatable