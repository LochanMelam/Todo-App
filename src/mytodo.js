import React, { Component } from "react";
export default class TodoForm extends Component {
  state = {
    text: ""
  };

  // this function will update the state of 'text' when user types
  handleInput = event => {
    console.log("called");
    this.setState({
      text: event.target.value
    });
  };

  //handleSubmit function will pass parameters to  addTodo function
  handleSubmit = event => {
    event.preventDefault();
    //preventDefault prevents the auto loading of the page
    this.props.submit({
      date: Date(), //provides date
      id: Date.now(), //provides a unique id
      text: this.state.text,
      complete: false
    });
    this.setState({
      text: "",
      date: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="enter your work"
          value={this.state.text}
          onChange={this.handleInput}
        ></input>
        <button onClick={this.handleSubmit}>add</button>
      </form>
    );
  }
}
