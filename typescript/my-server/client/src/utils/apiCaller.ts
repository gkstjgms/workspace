import axios from "axios";

export async function AddTodos(todo) {
  try {
    return await axios.post("/addTodo", {
      text: todo.text,
    });
  } catch (err) {
    console.log(err);
  }
}

export async function GetTodos() {
  try {
    const response = await axios.get("/getTodo", {});
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export async function ToggleTodos(todo) {
  try {
    return await axios.put("/putTodo", {
      id: todo.id,
      done: todo.done === 1 ? 0 : 1,
    });
  } catch (err) {
    console.log(err);
  }
}

export async function DeleteTodos(todo) {
  try {
    return await axios.delete("/deleteTodo", {
      data: { id: todo.id },
    });
  } catch (err) {
    console.log(err);
  }
}
