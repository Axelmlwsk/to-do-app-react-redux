import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../../actions";

export function AddTodo({ addtodo }) {
  const [input, setInput] = React.useState({
    title: "",
    description: "",
    place: "",
    date: "",
  });

  const handleChange = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addtodo(input);
  };

  return (
    <div className="addTodoForm">
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input value={input.title} onChange={handleChange} type="text" name="title" />

        <label>Description</label>
        <textarea onChange={handleChange} value={input.description} name="description" />

        <label>Place</label>
        <input value={input.place} onChange={handleChange} type="text" name="place" />

        <label>Date</label>
        <input value={input.date} onChange={handleChange} type="date" name="date" />

        <button type="submit">Add</button>
      </form>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addtodo: (todo) => dispatch(addTodo(todo)),
  };
};

export default connect(null, mapDispatchToProps)(AddTodo);
