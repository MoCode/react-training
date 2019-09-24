import React from "react";

const IdCard = props => {
  return (
    <div className="IdCard">
      <img src={props.picture} alt="" />
      <p>
        <strong>First name: </strong>
        {props.firstName}
      </p>
      <p>
        <strong>Last name: </strong>
        {props.lastName}
      </p>
      <p>
        <strong>Gender: </strong>
        {props.gender}
      </p>
      <p>
        <strong>Height: </strong>
        {props.height * 0.01}m
      </p>
      <p>
        <strong>Birth: </strong>
        {props.birth.toDateString()}
      </p>
    </div>
  );
};

export default IdCard;
