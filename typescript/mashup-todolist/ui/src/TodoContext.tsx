import React, { createContext, useReducer, useContext, useEffect, useState } from 'react';
import * as apiCaller from './util/apiCaller';

const TodoStateContext = createContext(null);
const TodoDispatchContext = createContext(null);
const TodoNextIdContext = createContext(null);

function todoReducer(state, action) {
    switch (action.type) {
        case 'CREATE': {
            apiCaller.NewItems(action.todo);
            return state.concat(action.todo);
        }
        case 'TOGGLE': {
            let id = state.filter((todo) => todo.id === action.id);
            apiCaller.ToggleItems(id[0]);
            return state.map((todo) => (todo.id === action.id ? { ...todo, done: todo.done === 1 ? 0 : 1 } : todo));
        }
        case 'REMOVE': {
            let id = state.filter((todo) => todo.id === action.id);
            apiCaller.DeleteItems(id[0]);
            return state.filter((todo) => todo.id !== action.id);
        }
        case 'REPLACE':
            return action.array;
        default:
            return state;
    }
}

const initialTodos = [
    {
        id: 1,
        text: '아침 산책',
        done: true,
    },
    {
        id: 2,
        text: '오늘의 뉴스 읽기',
        done: true,
    },
    { id: 3, text: '샌드위치 사 먹기', done: false },
    { id: 4, text: '리액트 공부하기', done: false },
];

export function TodoProvider({ children }) {
    const [state, dispatch] = useReducer(todoReducer, initialTodos);
    const [nextId, setNextID] = useState(5);
    const initial = useEffect(() => {
        let data;
        async function getItems() {
            data = await apiCaller.GetItems();
            let nextID = data[data.length - 1].id;
            setNextID(nextID + 1);
            dispatch({
                type: 'REPLACE',
                array: data,
            });
        }
        getItems();
    }, []);

    return (
        <TodoStateContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch}>
                <TodoNextIdContext.Provider value={nextId}>{children}</TodoNextIdContext.Provider>
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
