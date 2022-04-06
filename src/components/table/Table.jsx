import "./table.scss";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const List = () => {
  const rows = [
    {
      urn: 11431,
      address: "1 Front Street, Durham, DH1 5TT",
      name: "John Smith",
      dateFrom: "24/08/202",
      dateTo: "26/08/2022",
      officer: "0785",
      status: "Approved"
    },
    {
      urn: 22352,
      address: "50 Third Close, Spennymoor, DH4 3SR",
      name: "Deborah Jones",
      dateFrom: "02/09/2022",
      dateTo: "06/09/2022",
      officer: "1634",
      status: "Rejected",
    },
    {
      urn: 23423,
      address: "34 Welburn Close, Peterlee, SR8 2EL",
      name: "Keith Hall",
      dateFrom: "16/09/2022",
      dateTo: "20/09/2022",
      officer: "0785",
      status: "Pending",
    },
    {
      urn: 23577,
      address: "25 Stafford Place, Peterlee, SR8 1ST",
      name: "Sharon Stone",
      dateFrom: "24/10/2022",
      dateTo: "26/10/2022",
      officer: "1846",
      status: "Rejected",
    },
    {
      urn: 24778,
      address: "65 End Street, Durham, DH1 3YT",
      name: "Will Smith",
      dateFrom: "04/11/2022",
      dateTo: "07/11/2022",
      officer: "8124",
      status: "Approved",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell className="tableCell">URN</TableCell>
            <TableCell className="tableCell">Address</TableCell>
            <TableCell className="tableCell">Name</TableCell>
            <TableCell className="tableCell">Date From</TableCell>
            <TableCell className="tableCell">Date To</TableCell>
            <TableCell className="tableCell">Officer</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.urn}</TableCell>
              <TableCell className="tableCell">{row.address}</TableCell>
              <TableCell className="tableCell">{row.name}</TableCell>
              <TableCell className="tableCell">{row.dateFrom}</TableCell>
              <TableCell className="tableCell">{row.dateTo}</TableCell>
              <TableCell className="tableCell">{row.officer}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default List