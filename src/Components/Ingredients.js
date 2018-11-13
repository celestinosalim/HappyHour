import React, { Component } from "react";
import IngredientsItem from "./IngredientsItem";

class Ingredients extends Component {
  render() {
    if (this.props.ingredients) {
      //   console.log(this.props.ingredients.proportions);
      let mappedIngredients = this.props.ingredients.proportions.map(
        ingredient => {
          return (
            <IngredientsItem
              name={ingredient.ingredient_name}
              key={ingredient.id}
              amount={ingredient.amount}
            />
          );
        }
      );

      return mappedIngredients;
    }
    return "hi";
  }
}

export default Ingredients;
