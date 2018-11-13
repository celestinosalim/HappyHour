import React from "react";
import { FormGroup, ControlLabel, FormControl } from "react-bootstrap";

const IngredientsInputs = props => {
  return props.ingredients.map((value, index) => {
    let ingredientsId = `ingredient-${index}`,
      quantityId = `quantity-${index}`;
    return (
      <div key={index}>
        <FormGroup>
          {" "}
          <ControlLabel htmlFor={ingredientsId}>
            <h6>{`Ingredient Name`}</h6>
          </ControlLabel>
          <FormControl
            type="text"
            placeholder="Ingredient Name"
            name={ingredientsId}
            data-id={index}
            id={ingredientsId}
            onChange={props.changeHandler}
            className="name"
          />
          <FormControl.Feedback />
          <ControlLabel htmlFor={quantityId}>
            <h6>Quantity</h6>
          </ControlLabel>
          <br />
          <FormControl
            type="text"
            placeholder="Quantity"
            name={quantityId}
            data-id={index}
            id={quantityId}
            className="description"
            onChange={props.changeHandler}
          />
          <FormControl.Feedback />
        </FormGroup>
      </div>
    );
  });
};
export default IngredientsInputs;
