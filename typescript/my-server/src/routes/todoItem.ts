import { TodoItemController } from "../controller/TodoItemController";

const TodoItem = [
  {
    method: "post",
    route: "/addTodo",
    controller: TodoItemController,
    action: "addTodo",
  },
  {
    method: "get",
    route: "/getTodo",
    controller: TodoItemController,
    action: "getTodo",
  },
  {
    method: "put",
    route: "/putTodo",
    controller: TodoItemController,
    action: "putTodo",
  },
  {
    method: "delete",
    route: "/deleteTodo",
    controller: TodoItemController,
    action: "deleteTodo",
  },
];

const Routes = [...TodoItem];

export default Routes;
