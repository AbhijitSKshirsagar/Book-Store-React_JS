import { Button, Paper } from "@mui/material";
import React , { useState, useEffect }  from "react";
import './OrderSuccess.css'
import Header from '../../component/Header/Header'
import Image from '../../assets/checkout.jpg'
//import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import { TableRow } from '@mui/material';
import OrderService from "../Service/OrderService";
//import Paper from '@mui/material/Paper';

function OrderSuccess(props) {

  const [Data, setData] = useState([]);
  //console.log(customerDetails);

  useEffect(() => {
      fetchData();
    }, []);

const  fetchData=()=> {
    OrderService.getAllOrder().then((response) => {
        setData({ order: response.data.data });
        console.log(response.data.data)
    });
  }
  return (
    <>
      <Header />
      <div style={{ margin: "0 auto" }}>
        <Paper
          elevation={20}
          className="place_order_paper"
        >
          <img src={Image} height="30%" width="25%" />
          <h3>ORDER SUCCESSFULLY</h3>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 300 }} aria-label="simple table">
              <TableHead >
                <TableRow >
                  <TableCell className="Table" >OrderId </TableCell>
                  <TableCell className="Table" align="right">Address</TableCell>
                  <TableCell className="Table" align="right">Date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
              {Data.map((row,Index) => (
            <TableRow
              key={row.orderID}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell component="th" scope="row">
                  {row.orderID.orderID}
                </TableCell>
                <TableCell align="right">{row.orderID.address}</TableCell>
                <TableCell align="right">{row.orderID.date}</TableCell>
              </TableRow>
              ))};
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
    </>
  );
}

export default OrderSuccess;