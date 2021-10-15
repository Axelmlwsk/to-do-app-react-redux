import React from "react";
import Todo from "../Todo/Todo";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

export function Todos({ status, todos }) {
  return (
    <div className="todo-box">
      <span>{status}</span>

      {todos.map((todo) => {
        if (todo.status === status) {
          return (
            <Link key={todo.id} to={`/edit/${todo.id}`}>
              <Todo title={todo.title} />
            </Link>
          );
        }
        return null;
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

export default connect(mapStateToProps, null)(Todos);
