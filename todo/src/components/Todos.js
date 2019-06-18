import React, { Component } from "react";
import { connect } from "react-redux";
import { addNewTodo } from "../actions";

class Todos extends Component {
  state = {
    newTodo: ""
  };

  handleChanges = e => {
    this.setState({ newTodo: e.target.value });
  };

  addTodo = e => {
    e.preventDefault();
    this.props.addNewTodo(this.state.newTodo);
    this.setState({ newTodo: "" });
  };

  render() {
    console.log(this.props);

    return (
      <>
        <div className="title">
          <h1>My To-Do List</h1>
        </div>
        <div className="todos-list">
          {this.props.todos.map((todo, index) => (
            <h4>{todo.value}</h4>
          ))}
        </div>
        <input
          type="text"
          value={this.state.newTodo}
          onChange={this.handleChanges}
          placeholder="Add new todo"
        />
        <button onClick={this.addTodo}>Add Todo</button>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { addNewTodo }
)(Todos);
