import React from "react";

class ClickablePicture extends React.Component {
  state = {
    click: true
  };

  handleClick = () => {
    this.setState({
      click: !this.state.click
    });
  };

  render() {
    let imgLink = "";
    if (this.state.click === true) {
      imgLink = "/img/persons/maxence.png";
    } else if (this.state.click === false)
      imgLink = "/img/persons/maxence-glasses.png";
    return (
      <div className="ClickablePicture">
        <img onClick={this.handleClick} src={imgLink} alt="" />
      </div>
    );
  }
}

export default ClickablePicture;
