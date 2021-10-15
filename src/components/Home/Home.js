import React from "react";
import Todos from "../Todos/Todos";
import "./Home.css";
export function Home() {
  return (
    <div className="todoscontainer">
      <Todos status="Todo" />
      <Todos status="InProgress" />
      <Todos status="Done" />
    </div>
  );
}

export default Home;
