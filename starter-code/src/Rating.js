import React from "react";

const Rating = props => {
  let result = "";
  for (let i = 0; i < 5; i++) {
    if (i < Math.round(props.children)) {
      result += "★";
    } else {
      result += "☆";
    }
  }
  return <p>{result}</p>;
};

export default Rating;
