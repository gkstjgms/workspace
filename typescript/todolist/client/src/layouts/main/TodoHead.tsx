import React from "react";
import { useTodoState } from "../../components/TodoContext";

const TodoHead = () => {
  const today = new Date();

  const date = today.toLocaleString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const day = today.toLocaleString("ko-KR", { weekday: "long" });
  const todos = useTodoState();
  const undounTasks = todos.filter((todo) => !todo.done);

  return (
    <div className="head-block">
      <h1>{date}</h1>
      <div className="day">{day}</div>
      <div className="tasks-left">Todos {undounTasks.length} lefted</div>
    </div>
  );
};

export default TodoHead;
