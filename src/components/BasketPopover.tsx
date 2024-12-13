import React, { useState } from "react";
import CardBasket from "./CardBasket";

const BasketPopover = ({isPopover,setIsPopover}:any) => {
    return (
      <div className="container-background-and-popover">
        <div className="container-popover">
          <div className="container-popover-data">
            <span>Basket</span>
            <CardBasket />
            <div className="container-popover-data-total">Total:</div>
          </div>
        </div>
        <div
          className="background-popover"
          onClick={() => {
            setIsPopover(!isPopover);
          }}
        ></div>
      </div>
    );
};
export default BasketPopover;
