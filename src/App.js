import React, { Component } from "react";
import TodoForm from "./mytodo.js";
import "./App.css";
import Todo from "./todo";

class Header extends Component {
  render() {
    return <h1>{this.props.title}</h1>;
  }
}

class App extends Component {
  state = {
    todo: [],
    display: "all"
  };
  addTodo = todos => {
    this.setState({
      todo: [todos, ...this.state.todo]
    });
  };

  complete = id => {
    this.setState({
      todo: this.state.todo.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            complete: !todo.complete
          };
        } else {
          return todo;
        }
      })
    });
  };
  removeClicked = id => {
    this.setState({
      todo: this.state.todo.filter(todo => todo.id !== id)
    });
  };
  toShow = d => {
    this.setState({
      display: d
    });
  };
  render() {
    let todos = [];
    if (this.state.display === "all") {
      todos = this.state.todo;
    } else if (this.state.display === "active") {
      todos = this.state.todo.filter(todo => !todo.complete);
    } else if (this.state.display === "complete") {
      todos = this.state.todo.filter(todo => todo.complete);
    }
    return (
      <div>
        <Header title="To-do-app"></Header>
        <TodoForm submit={this.addTodo}></TodoForm>
        {todos.map(todo => (
          <Todo
            key={todo.id}
            complete={() => this.complete(todo.id)}
            todo={todo}
            removeClicked={() => this.removeClicked(todo.id)}
          />
        ))}
        <div>
          <button onClick={() => this.toShow("all")}>all</button>
          <button onClick={() => this.toShow("active")}>active</button>
          <button onClick={() => this.toShow("complete")}>complete</button>
        </div>
      </div>
    );
  }
}

export default App;
