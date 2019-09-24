import React from "react";

class LikeButton extends React.Component {
  state = {
    //liked: false,
    count: 0,
    backgroundColor: ""
  };

  handleClick = () => {
    let changeBackground = `rgb(${Math.floor(
      Math.random() * 255
    )}, ${Math.floor(Math.random() * 255)}, ${Math.floor(
      Math.random() * 255
    )})`;

    this.setState({
      //setState needs to be used outside the render
      //liked: !this.state.liked,
      count: this.state.count + 1,
      backgroundColor: changeBackground
    });
  };

  render() {
    //============= !!!
    //   let str = "";
    //   if (this.state.liked === true) {
    //     str = "Unlike";
    //   } else if (this.state.liked === false) {
    //     str = "Like";
    //   }
    //============= !!!

    return (
      <div>
        <button
          onClick={this.handleClick}
          style={{
            backgroundColor: this.state.backgroundColor,
            padding: "10px",
            fontWeight: "900",
            fontSize: "30px"
          }}
        >
          {this.state.count} Likes
        </button>
      </div>
    );
  }
}

export default LikeButton;
