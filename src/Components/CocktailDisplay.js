import React, { Component } from "react";
import Ingredients from "./Ingredients";

class CocktailDisplay extends Component {
  state = {};

  render() {
    if (this.props.cocktail) {
      // console.log(this.props);

      // console.log(this.props.cocktailDetails);
      // let ingredients = this.props.cocktailDetails;
      // ingredients.map(proportions => console.log(proportions));

      return (
        <div className="CocktailDisplay">
          <br />
          <h1>CockTail: {this.props.cocktail.name}</h1>
          <br />
          <h3>{this.props.cocktail.description}</h3>
          <br />
          <p>{this.props.cocktail.instructions}</p>
          <br />
          <h3>Ingredients:</h3>
          <br />
          <Ingredients ingredients={this.props.cocktailDetails} />
          <br />
        </div>
      );
    } else {
      return null;
    }
  }
}

export default CocktailDisplay;
