import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleTodo } from "../actions";

class TodoItem extends Component {
  toggleTodo = e => {
    this.props.toggleTodo(this.props.index);
  };

  render() {
    return (
      <div>
        <input type="checkbox" onChange={this.toggleTodo} />
        {this.props.todo.value}
      </div>
    );
  }
}

export default connect(
  null,
  { toggleTodo }
)(TodoItem);
