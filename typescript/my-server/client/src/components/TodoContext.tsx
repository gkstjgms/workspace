import React, {
  createContext,
  useReducer,
  useContext,
  useState,
  useEffect,
} from "react";
import * as apiCaller from "../utils/apiCaller";

const TodoStateContext = createContext(null);
const TodoDispatchContext = createContext(null);
const TodoNextIdContext = createContext(null);

function TodoReducer(state, action) {
  switch (action.type) {
    case "CREATE": {
      apiCaller.AddTodos(action.todo);
      return state.concat(action.todo);
    }
    case "REPLACE":
      return action.array;
    case "TOGGLE": {
      let id = state.filter((todo) => todo.id === action.id);
      apiCaller.ToggleTodos(id[0]);
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
      // 기본: return state.map(todo => todo.id === action.id ? { ...todo, done: !todo.done } : todo);
    }
    case "REMOVE": {
      let id = state.filter((todo) => todo.id === action.id);
      apiCaller.DeleteTodos(id[0]);
      return state.filter((todo) => todo.id !== action.id);
    }
    default:
      return state;
  }
}

const initialTodos = [
  {
    id: 1,
    text: "sample",
    done: false,
  },
  {
    id: 2,
    text: "page",
    done: true,
  },
];

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(TodoReducer, initialTodos);
  const [nextId, setNextID] = useState(3);

  useEffect(() => {
    getItems();
  }, []);

  let data;

  async function getItems() {
    data = await apiCaller.GetTodos();
    let nextID = data[data.length - 1].id;
    setNextID(nextID + 1);
    dispatch({
      type: "REPLACE",
      array: data,
    });
  }

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>
          {children}
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

export function useTodoState() {
  return useContext(TodoStateContext);
}

export function useTodoDispatch() {
  return useContext(TodoDispatchContext);
}

export function useTodoNextId() {
  return useContext(TodoNextIdContext);
}