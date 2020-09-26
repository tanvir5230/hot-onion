import React from "react";
import { useLocation } from "react-router-dom";
import { foods } from "../data";

const FoodDetails = () => {
  const location = useLocation();
  const foodId = parseInt(location.pathname.split("/").pop());
  const food = foods.find((f) => f.id === foodId);
  return (
    <div>
      <h1>{food.title}</h1>
    </div>
  );
};

export default FoodDetails;
