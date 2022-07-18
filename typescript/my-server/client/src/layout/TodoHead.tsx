import React from "react";
import { useTodoState } from "../components/TodoContext";

function TodoHead() {
  const today = new Date();

  const dateString = today.toLocaleString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const dayName = today.toLocaleString("ko-KR", { weekday: "long" });
  const todos = useTodoState();
  const undoneTasks = todos.filter((todo) => !todo.done);

  return (
    <div className="head-block">
      {/* <p>{users.userInfo.userid}</p> */}
      <h1>{dateString}</h1>
      <div className="day">{dayName}</div>
      <div className="tasks-left">할 일 {undoneTasks.length}개 남음</div>
    </div>
  );
}

export default TodoHead;
