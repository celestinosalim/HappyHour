import React, { Component } from "react";

class IngredientsItem extends Component {
  render() {
    // console.log(this.props);
    return (
      <div>
        <ul>
          <p>{this.props.name}</p>
          <p>{this.props.amount}</p>
        </ul>
      </div>
    );
  }
}

export default IngredientsItem;
