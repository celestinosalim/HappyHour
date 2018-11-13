import React, { Component } from "react";
import NavBar from "./Components/NavBar";
import CocktailContainer from "./Components/CocktailContainer";
import CocktailDisplay from "./Components/CocktailDisplay";
import CocktailForm from "./Components/CocktailForm";
import "./App.css";
import { Route } from "react-router-dom";
import Ingredients from "./Components/Ingredients";
class App extends Component {
  state = {
    cocktails: [],
    selectedCocktail: 0,
    cocktailDetails: undefined
  };

  getCocktails() {
    fetch("http://localhost:3000/api/v1/cocktails")
      .then(res => res.json())
      .then(data =>
        this.setState({
          cocktails: data
        })
      )
      .then(() => {
        this.cocktailsCop = [...this.state.cocktails];
      });
  }

  getDetails(id) {
    fetch(`http://localhost:3000/api/v1/cocktails/${id}`)
      .then(res => res.json())
      .then(data =>
        this.setState({
          cocktailDetails: data
        })
      );
  }

  // fetched(id) {
  //   let apiRequest1 = fetch("http://localhost:3000/api/v1/cocktails")
  //     .then(res => res.json())
  //     .then(data =>
  //       this.setState({
  //         cocktails: data
  //       })
  //     );

  //   let apiRequest2 = fetch(
  //     `http://localhost:3000/api/v1/cocktails/${this.state.selectedCocktail}`
  //   )
  //     .then(res => res.json())
  //     .then(data =>
  //       this.setState({
  //         cocktailDetails: data
  //       })
  //     );

  //   Promise.all([apiRequest1, apiRequest2]).then(values => {
  //     // combinedData["apiRequest1"] = values[0];
  //     // combinedData["apiRequest2"] = values[1];
  //     // this.setState({
  //     //   cocktails: values[0],
  //     //   cocktailDetails: values[1]
  //     // });
  //     // console.log(values);
  //   });
  // }

  componentDidMount() {
    this.getCocktails();
    // this.fetched();
    this.setSelectedCocktail = id => {
      this.setState({
        selectedCocktail: id
      });

      return this.getDetails(id);
    };
  }

  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  UniqueCocktail() {
    return this.state.cocktails.find(
      cocktail => cocktail.id === this.state.selectedCocktail
    );
  }

  submitHandler = (e, obj) => {
    e.preventDefault();
    let newCocktails = [...this.state.cocktails];
    newCocktails.push(obj);
    this.setState({
      cocktails: newCocktails
    });
    let options = {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        cocktail: {
          name: obj.name,
          description: obj.description,
          instructions: obj.instructions,
          source: "a",
          proportions_attributes: [
            {
              cocktail_id: obj.id,
              ingredient_attributes: {
                id: Ingredients.id,
                name: obj.ingredientName
              },
              amount: obj.Quantity
            }
          ]
        }
      })
    };
    // let options2 = {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json"
    //   },
    //   body: JSON.stringify({
    //     ingredient_name: obj.ingredientName,
    //     amount: obj.Quantity
    //   })
    // };

    fetch("http://localhost:3000/api/v1/cocktails", options)
      .then(res => res.json())
      .then(response => console.log("Success:", JSON.stringify(response)))
      .catch(error => console.error("Error:", error));
    // .then(obj => (id = obj.id))
    // .then(fetch(`http://localhost:3000/api/v1/cocktails/${id}`, options2));
  };

  handleSearch = e => {
    e.preventDefault();
    let newArray = [];
    console.log(e.target.value);
    console.log(newArray);
    this.cocktailsCop.forEach(cocktail => {
      if (cocktail.name) {
        if (cocktail.name.includes(e.target.value)) {
          // debugger;
          newArray.push(cocktail);
        }
      }
    });
    this.setState({
      cocktails: newArray
    });
  };

  deleteHandler = e => {
    console.log("hitted");
    e.target.parentNode.parentNode.parentNode.remove();
  };

  render() {
    return (
      <div id="App">
        <NavBar handleSearch={this.handleSearch} />

        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-3">
              <Route
                exact
                path="/"
                render={() => (
                  <CocktailContainer
                    cocktails={this.state.cocktails}
                    setSelectedCocktail={this.setSelectedCocktail}
                    deleteHandler={this.deleteHandler}
                  />
                )}
              />
            </div>
            <div className="col-sm-3">
              {this.state.cocktailDetails !== "undefined" ? (
                <Route
                  path="/"
                  render={() => (
                    <CocktailDisplay
                      cocktail={this.UniqueCocktail()}
                      cocktailDetails={this.state.cocktailDetails}
                    />
                  )}
                />
              ) : null}
            </div>
            <div className="col-sm-5">
              <Route
                exact
                path="/new"
                render={() => (
                  <CocktailForm submitHandler={this.submitHandler} />
                )}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
