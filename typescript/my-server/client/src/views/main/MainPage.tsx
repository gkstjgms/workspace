import React from "react";
import "./main.scss";
import { RiLogoutCircleLine } from "react-icons/ri";
import TodoHead from "../../layout/TodoHead";
import TodoList from "../../components/main/TodoList";
import TodoCreate from "../../components/main/TodoCreate";

const MainPage = () => {
  return (
    <div className="template-block">
      <button className="circle-button">
        <RiLogoutCircleLine />
      </button>
      <TodoHead />
      <TodoList />
      <TodoCreate />
    </div>
  );
};

export default MainPage;
