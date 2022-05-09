import axios from "axios";

export async function GetItems() {
  try {
    const response = await axios.get("/", {});
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export async function AddItems(todo) {
  try {
    return await axios.post("/", {
      todo: todo.todo,
    });
  } catch (err) {
    console.log(err);
  }
}
