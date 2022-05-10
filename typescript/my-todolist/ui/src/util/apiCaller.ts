import axios from "axios";

export async function AddItems(todo) {
  try {
    return await axios.post("/", {
      text: todo.text,
    });
  } catch (err) {
    console.log(err);
  }
}

export async function GetItems() {
  try {
    const response = await axios.get("/", {});
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}