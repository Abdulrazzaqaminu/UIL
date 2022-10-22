import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";

function createData(name, trackingId, date) {
  return { name, trackingId, date};
}

const rows = [
  createData("Artificial Inteligence", 401, "2 March 2022"),
  createData("Research Methodology", 402, "2 March 2022"),
  createData("Procurement", 403, "2 March 2022"),
];

export default function BasicTable() {
  return (
      <div className="Table">
        <h3>Courses</h3>
          <TableContainer
            component={Paper}
            style={{ boxShadow: "0px 13px 20px 0px #80808029",borderRadius: "1rem" }}
          >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Course Name</TableCell>
                  <TableCell align="left">Course Code</TableCell>
                  <TableCell align="left">Date Of Registration</TableCell>
                </TableRow>
              </TableHead>
              <TableBody style={{ color: "white" }}>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="left">{row.trackingId}</TableCell>
                    <TableCell align="left">{row.date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
      </div>
  );
}