import { Button, Paper } from "@mui/material";
import React from "react";
import './PlaceOrder.css'
import Header from '../../component/Header/Header'

function PlaceOrder(props) {
  return (
    <>
    <Header/>
    <div style={{margin:"0 auto"}}>
      <Paper
        elevation={20}
        className="place_order_paper"
      >
      </Paper>
    </div>
    </>
  );
}

export default PlaceOrder;