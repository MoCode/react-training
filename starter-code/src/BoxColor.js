import React from "react";

const BoxColor = props => {
  function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  }
  function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }

  let result = rgbToHex(props.r, props.g, props.b);

  return (
    <div
      className="BoxColor"
      style={{
        backgroundColor: `rgb(${props.r},${props.g},${props.b})`,
        height: "100px",
        width: "200px"
      }}
    >
      <p>
        rgb({props.r},{props.g},{props.b})
      </p>
      <p>{result}</p>
    </div>
  );
};

export default BoxColor;
