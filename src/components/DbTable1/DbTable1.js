import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 400,
  },
});

function createData(pfamily, step1, step2, step3) {
  return { pfamily, step1, step2, step3 };
}

const rows = [
  createData("XPS", 4, 2, 3),
  createData("Alienware", 2, 4, 2),
  createData("Inspiron", 3, 1, 2),
  createData("Vostro", 1, 3, 3),
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{ color: "#ffcc33", fontWeight: "bold" }}>
              Product Family
            </TableCell>
            <TableCell
              style={{ color: "#ffcc33", fontWeight: "bold" }}
              align="right"
            >
              Step 1
            </TableCell>
            <TableCell
              style={{ color: "#ffcc33", fontWeight: "bold" }}
              align="right"
            >
              Step 2
            </TableCell>
            <TableCell
              style={{ color: "#ffcc33", fontWeight: "bold" }}
              align="right"
            >
              Step 3
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.pfamily}>
              <TableCell component="th" scope="row">
                {row.pfamily}
              </TableCell>
              <TableCell align="right">{row.step1}</TableCell>
              <TableCell align="right">{row.step2}</TableCell>
              <TableCell align="right">{row.step3}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
