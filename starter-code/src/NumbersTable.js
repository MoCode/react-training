import React from "react";

class NumbersTable extends React.Component {
  render() {
    let num = [];
    for (let i = 1; i <= this.props.limit; i++) {
      if (i % 2 === 0) {
        num.push(
          <div
            key={i}
            style={{
              border: "3px solid #000",
              width: "100px",
              height: "100px",
              backgroundColor: "red"
            }}
          >
            <h1
              style={{
                textAlign: "center"
              }}
            >
              {i}
            </h1>
          </div>
        );
      } else {
        num.push(
          <div
            key={i}
            style={{
              border: "3px solid #000",
              width: "100px",
              height: "100px"
            }}
          >
            <h1
              style={{
                textAlign: "center"
              }}
            >
              {i}
            </h1>
          </div>
        );
      }
    }
    //console.log(square);

    return (
      <div
        className="NumbersTable"
        style={{
          display: "flex",
          flexWrap: "wrap",
          maxWidth: "600px",
          boxSizing: "border-box"
        }}
      >
        {num}
      </div>
    );
  }
}

export default NumbersTable;

/*




import React from "react";

const NumbersTable = props => {
  let limit = props.limit;
  let tr = Math.ceil(limit / 5);
  let difference = tr % 5;

  const mainTd = () => {
    for (let i = 0; i < tr; i++) {
      return (
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      );
    }
  };

  const lastTd = () => {
    let tdstring = "";
    for (let i = 0; i <= difference; i++) {
      tdstring = tdstring + "<td></td>";
    }
    return tdstring;
  };

  return (
    <div className="NumbersTable">
      <table>
        {mainTd}
        <tr>{lastTd}</tr>
      </table>
    </div>
  );
};

export default NumbersTable;

*/
