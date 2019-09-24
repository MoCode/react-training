import React from "react";
import Rating from "./Rating";

const DriverCard = props => {
  return (
    <div
      className="DriverCard"
      style={{
        backgroundColor: "#455eb4"
      }}
    >
      <img
        src={props.img}
        alt=""
        style={{
          height: "200px",
          width: "200px",
          borderRadius: "50%"
        }}
      />
      <h1>{props.name}</h1>
      <Rating>{props.rating}</Rating>
      <p>
        {props.car.model} - {props.car.licensePlate}
      </p>
    </div>
  );
};

export default DriverCard;
