import React from "react";

const Random = props => {
  let ran = Math.ceil(props.min + Math.random() * props.max - props.min);

  return (
    <div className="Random">
      <p>
        Random value between {props.min} and {props.max} => {ran}
      </p>
    </div>
  );
};

export default Random;
