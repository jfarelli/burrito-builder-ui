import React, { Component } from "react";
import { postOrders } from "../../apiCalls";

class OrderForm extends Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      name: "",
      ingredients: [],
    };
  }

  handleNameChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleIngredientChange = (e) => {
    e.preventDefault();
    this.setState({ ingredients: [...this.state.ingredients, e.target.id] });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newBurrito = {
      id: Date.now(),
      ...this.state,
    };
    this.props.addBurrito(newBurrito);
    postOrders(newBurrito);
    this.clearInputs();
  };

  clearInputs = () => {
    this.setState({ name: "", ingredients: [] });
  };

  render() {
    const possibleIngredients = [
      "beans",
      "steak",
      "carnitas",
      "sofritas",
      "lettuce",
      "queso fresco",
      "pico de gallo",
      "hot sauce",
      "guacamole",
      "jalapenos",
      "cilantro",
      "sour cream",
    ];

    const ingredientButtons = possibleIngredients.map((ingredient) => {
      return (
        <button
          id={ingredient}
          key={ingredient}
          name={ingredient}
          onClick={(e) => this.handleIngredientChange(e)}
          className='ingredient-buttons'
        >
          {ingredient}
        </button>
      );
    });

    return (
      <form>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={this.state.name}
          onChange={(e) => this.handleNameChange(e)}
          required
        />

        {ingredientButtons}

        <p>Order: {this.state.ingredients.join(", ") || "Nothing selected"}</p>

        {!this.state.name || this.state.ingredients <= 1 ? <h4>Please enter a name and select at least one ingredient for your burrito!</h4> : <button className='submit-button' onClick={(e) => this.handleSubmit(e)}>Submit Order</button>}
      </form>
    );
  }
}

export default OrderForm;
