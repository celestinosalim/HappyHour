import React, { Component } from "react";
import CocktailList from "./CocktailList";

class CocktailContainer extends Component {
  state = {};

  render() {
    return (
      <div className="CocktailContainer">
        <h1>HappyHour Cocktails</h1>
        <CocktailList
          cocktails={this.props.cocktails}
          setSelectedCocktail={this.props.setSelectedCocktail}
          deleteHandler={this.props.deleteHandler}
        />
      </div>
    );
  }
}

export default CocktailContainer;
