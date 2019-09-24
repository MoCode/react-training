import React from "react";
import profiles from "./data/berlin.json";

class Facebook extends React.Component {
  state = {
    data: profiles,
    display: true
  };

  handleClick = () => {
    //Simulate getting data from API
    this.setState({
      data: profiles,
      display: !this.state.display
    });
  };

  render() {
    // const displayMode = "";
    // if (this.state.display === true) {
    //   displayMode = "block";
    // } else if (this.state.display === true) {
    //   displayMode = "none";
    // }

    const profileData = this.state.data.map(data => {
      return (
        <div
          key={data.firstName}
          style={{
            display: "flex",
            border: "1px solid #000",
            padding: "15px",
            maxWidth: "350px"
          }}
        >
          <img
            src={data.img}
            alt=""
            style={{
              height: "100px"
            }}
          />
          <div>
            <p>
              <strong>First name:</strong> {data.firstName}
            </p>
            <p>
              <strong>lastName name:</strong> {data.lastName}
            </p>
            <p>
              <strong>Country:</strong> {data.country}
            </p>
          </div>
        </div>
      );
    });

    const countryNames = this.state.data.map(data => {
      return data.country;
    });
    const countryBtn = [...new Set(countryNames)];
    const btn = countryBtn.map(name => {
      return (
        <button
          onClick={this.handleClick}
          key={name}
          //   style={{
          //     display: `${displayMode}`
          //   }}
        >
          {name}
        </button>
      );
    });

    return (
      <div className="Facebook">
        {btn}
        {profileData}
      </div>
    );
  }
}

export default Facebook;
