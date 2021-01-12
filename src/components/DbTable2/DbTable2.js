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

function createData(item, itemfamily, itemdetails, sellingprice) {
  return { item, itemfamily, itemdetails, sellingprice };
}

const rows = [
  createData("XPS_130708", "XPS", "XPS 13.1 Inches", 142567),
  createData("XPS_150716", "XPS", "XPS 15.6 Inches", 208346),
  createData("ALW_150916", "Alienware", "Alienware 15.6 Inches(m15r2)", 224990),
  createData("ALW_170932", "Alienware", "Alienware Area 51M 17.3", 372879),
  createData("INS_150304", "Inspiron", "Inspiron 15.6 Inches", 41500),
  createData("INS_130508", "Inspiron", "Inspiron 13.1 Inches", 91990),
  createData("VOS_140304", "Vostro", "Vostro 14 Inches", 30990),
  createData("VOS_140508", "Vostro", "Vostro 14 Inches", 51130),
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{ color: "#ffcc33", fontWeight: "bold" }}>
              Items
            </TableCell>
            <TableCell
              style={{ color: "#ffcc33", fontWeight: "bold" }}
              align="center"
            >
              Item Family
            </TableCell>
            <TableCell
              style={{ color: "#ffcc33", fontWeight: "bold" }}
              align="center"
              width="0.9%"
            >
              Item Details
            </TableCell>
            <TableCell
              style={{ color: "#ffcc33", fontWeight: "bold" }}
              align="center"
            >
              Selling Price
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.item}>
              <TableCell component="th" scope="row">
                {row.item}
              </TableCell>
              <TableCell align="center">{row.itemfamily}</TableCell>
              <TableCell align="center">{row.itemdetails}</TableCell>
              <TableCell align="center">{row.sellingprice}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
