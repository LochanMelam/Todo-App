import React from "react";
export default props => (
  <div>
    <div
      style={{
        textDecoration: props.todo.complete ? "line-through" : ""
      }}
      onClick={props.complete}
    >
      {props.todo.text}--{props.todo.date.slice(0, 15)}
    </div>
    <button onClick={props.removeClicked}>X</button>
  </div>
);
