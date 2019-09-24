import React from "react";

const CreditCard = props => {
  let num = props.number.slice(12);

  return (
    <div
      className="CreditCard"
      style={{
        backgroundColor: props.bgColor,
        color: props.color
      }}
    >
      <p>{props.type}</p>
      <p>•••• •••• •••• {num}</p>
      <p>
        Expires {props.expirationMonth}/{props.expirationYear}
      </p>
      <p>{props.bank}</p>
      <p>{props.owner}</p>
    </div>
  );
};

export default CreditCard;
