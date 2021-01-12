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

function createData(orderid, productname, qty, deliverydate) {
  return { orderid, productname, qty, deliverydate };
}

const rows = [
  createData("Order_6", "XPS 15.6 Inches", 3, "24"),
  createData("Order_2", "Alienware Area 51M 17.3", 5, "24"),
  createData("Order_13", "XPS 15.6 Inches", 18, "24"),
  createData("Order_10", "Vostro 14 Inches", 7, "24"),
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{ color: "#ffcc33", fontWeight: "bold" }}>
              Order ID
            </TableCell>
            <TableCell
              style={{ color: "#ffcc33", fontWeight: "bold" }}
              align="right"
            >
              Product Name
            </TableCell>
            <TableCell
              style={{ color: "#ffcc33", fontWeight: "bold" }}
              align="right"
            >
              Quantity
            </TableCell>
            <TableCell
              style={{ color: "#ffcc33", fontWeight: "bold", width: "30%" }}
              align="right"
            >
              Orders to fulfill in next 24 hours
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.orderid}>
              <TableCell component="th" scope="row">
                {row.orderid}
              </TableCell>
              <TableCell align="right">{row.productname}</TableCell>
              <TableCell align="right">{row.qty}</TableCell>
              <TableCell align="right">{row.deliverydate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
