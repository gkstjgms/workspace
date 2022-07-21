import React from "react";
import "./main.scss";
import { RiLogoutCircleLine } from "react-icons/ri";
import TodoHead from "../../layouts/main/TodoHead";
import TodoList from "../../components/main/TodoList";

const MainPage = () => {
  return (
    <div className="template-block">
      <button className="circle-button">
        <RiLogoutCircleLine />
      </button>
      <TodoHead />
      <TodoList />
    </div>
  );
};

export default MainPage;
