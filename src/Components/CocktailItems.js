import React, { Component } from "react";

class CocktailItems extends Component {
  state = {
    title: this.props.cocktail.name
  };

  handleMouseOver = e => {
    e.preventDefault();
    this.setState({
      title: "Show For Details"
    });
  };

  handleOut = e => {
    this.setState({
      title: this.props.cocktail.name
    });
  };

  render() {
    return (
      <div className="CocktailItems">
        <div>
          <br />
          <ul>
            <h4
              onMouseOver={this.handleMouseOver}
              onMouseLeave={this.handleOut}
            >
              {this.state.title}
            </h4>
            <button
              className="btn btn-info"
              onClick={() =>
                this.props.setSelectedCocktail(this.props.cocktail.id)
              }
            >
              Show
            </button>
            <button
              className="btn btn-danger"
              onClick={e => this.props.deleteHandler(e)}
            >
              Delete
            </button>
          </ul>
        </div>
      </div>
    );
  }
}

export default CocktailItems;
