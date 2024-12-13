import React, { useEffect, useState } from "react";
import "../Style/HomePage.css";
import Bed from"../images/bed_PNG17402.png"

interface HomePageCards {
  image: string;
  description: string;
  price: string;
}

const HomePageCards = [
  {
    image :{Bed},
    title: "title1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum illum expedita ea.",
    price: "34",
  },
  {
    title: "title2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum illum expedita ea.",
    price: "44",
  },
  {
    title: "title3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum illum expedita ea.",
    price: "23",
  },
];

const Cards = () => {
  // const [isNumberPlus,setIsNumberPlus]= useState("")
  // const [isNumberMinus,setIsNumberMinus]= useState("")
  let [isInput,setIsInput]= useState("")
  return HomePageCards.map((card, index) => {

    return (
      <div className="homepage-board-card">
        <div className="card-image">
          {/* <img src={card.image} alt="" /> */}
        </div>
        <div>
          <p className="card-description">{card.title}</p>
          <p className="card-description">{card.description}</p>
          <div className="div-card-quantity">
            <div
              className="card-quantity-btn"
              onClick={() => {
                
              }}
            >
              +
            </div>
            <input
              type="number"
              className="card-quantity-input"
              value={1}
              onChange={(e) => {
                setIsInput(e.target.value);
              }}
            />
            <div className="card-quantity-btn">-</div>
          </div>
          <div className="card-div-price-btn">
            <p className="card-price">{`${card.price}$`}</p>
            <div className="card-btn">Add</div>
          </div>
        </div>
      </div>
    );
  });
};

export default Cards;
