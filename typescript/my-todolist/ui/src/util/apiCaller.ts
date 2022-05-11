import axios from "axios";

export async function AddItems(todo) {
  try {
    return await axios.post("/addItem", {
      text: todo.text,
    });
  } catch (err) {
    console.log(err);
  }
}

export async function GetItems() {
  try {
    const response = await axios.get("/getItem", {});
    return response.data;
  } catch (err) {
    console.log(err);
  }
}
