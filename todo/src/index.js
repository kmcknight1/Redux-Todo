import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Todos from "./components/Todos";
import { createStore } from "redux";
import { Provider } from "react-redux";
import todo from "./reducers";

const store = createStore(todo);

ReactDOM.render(
  <Provider store={store}>
    <Todos />
  </Provider>,
  document.getElementById("root")
);
