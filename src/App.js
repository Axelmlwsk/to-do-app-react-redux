import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import AddTodo from "./components/AddTodo/AddTodo";
import Todo from "./components/Todo/Todo";
import "./App.css";

export function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/">
          <Nav />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/add">
          <AddTodo />
        </Route>
        <Route path="/edit/:id">
          <Todo />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
