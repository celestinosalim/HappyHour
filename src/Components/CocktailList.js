import React from "react";
import CocktailItems from "./CocktailItems";

const CocktailList = props => {
  const cocktailItems = props.cocktails.map(cocktail => (
    <CocktailItems
      cocktail={cocktail}
      key={cocktail.id}
      setSelectedCocktail={props.setSelectedCocktail}
      deleteHandler={props.deleteHandler}
    />
  ));

  return <div className="CocktailList">{cocktailItems}</div>;
};

export default CocktailList;
