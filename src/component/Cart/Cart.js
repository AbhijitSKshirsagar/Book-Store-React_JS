import React, { useState } from "react";
import Header from '../Header/Header'
import Image from '../../assets/vahana.jpg'
import './Cart.css';
import {Card} from "@mui/material";
import {Button} from "@mui/material";


const Cart = ()=> {
  const [qty, setQty] = useState(0);

  function handleDecrement() {
    if(qty==0){
      return
    }
    else{
    setQty(qty - 1);
    }
  }

  function handleIncrement() {
    setQty(qty + 1);
  }

  function totalAmount() {
    setQty(qty + 1);
  }
  


  return (
    <div>
        <Header/>
        <div className="card-container">
          
            <Card className="float-layout" style={{ width: "30%", margin: "5rem", padding: "2rem" }}>cart Count
             <img className="card-image" src={Image}/>
             <label className="card"><h2 class="card-title">Vahana Masterclass</h2>
              <h3 class="card-desc">RS.250</h3>
              Quantity: 
              <div class="wrapper">
                <span class="minus" onClick={handleDecrement}>-</span>
                <span class="num" id="root" >{1+ qty}</span>
                <span class="plus" onClick={handleIncrement}>+</span>
              </div></label>
              <p>Total Price <br/>{250+250 *qty }</p>
              {/* <Button className={buttonStyles}>Continue</Button> */}
              <button onClick="" >Remove Item</button>
            </Card>
          
        </div>
    </div>
  )
}


export default Cart