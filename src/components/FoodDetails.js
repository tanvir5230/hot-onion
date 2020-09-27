import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Col } from "reactstrap";
import { foods } from "../data";
import { CheckoutFoodBtn } from "./Foods";
const FoodDetails = ({ path, foodCat }) => {
  const location = useLocation();
  console.log(location);
  const foodId = parseInt(location.pathname.split("/").pop());
  const food = foods.find((f) => f.id === foodId);
  return (
    <>
      <Col xs={12}>
        <Link to={`${path}/${foodCat}`}>
          <span style={{ fontSize: "3rem" }}>&#8592;</span>
        </Link>
      </Col>
      <Col xs={10} md={6} className="order-1 order-md-1">
        <h1 className=" ">{food.title}</h1>
        <p>{food.description}</p>
        <p className="  align-items-center">
          <span className="font-weight-bolder mr-4">${food.price}</span>
          <span className="border rounded-pill p">
            <button className="btn border-right text-secondary">-</button>
            <span className="px-4">1</span>
            <button className="btn border-left text-danger">+</button>
          </span>
        </p>
        <div className=" ">
          <button className="btn btn-danger rounded-pill px-4">
            <img
              src={require("../resources/ICON/cart.png")}
              alt=""
              width="20"
              height="20"
            />
            <span className="ml-3">add</span>
          </button>
        </div>
      </Col>
      <Col xs={8} md={6} className="order-0 order-md-1">
        <img src={food.img} alt="" className="img-fluid px-5" />
      </Col>
      <Col
        xs={12}
        className="order-10 mt-5 d-flex justify-content-center align-items-center"
      >
        <CheckoutFoodBtn />
      </Col>
    </>
  );
};

export default FoodDetails;
