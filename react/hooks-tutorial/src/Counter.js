import React, { useReducer } from "react";

// useReducer 사용
const reducer = (state, action) => {
    switch (action.type){
        case 'INCREMENT':
            return { value: state.value + 1 };
        case 'DECREMENT':
            return { value: state.value - 1 };
        default: // 해당되지 않을 때 기존 상태 반환
            return state;
    }
}

const Counter = () => {
    /* useState 사용
    // useState 호출 -> 배열 비구조화 할당 문법
    const [value, setValue] = useState(0);
    return (
        <div>
            <p>
                현재 카운터 값은 <b>{value}</b> 입니다.
            </p>
            <button onClick={() => setValue(value + 1)}>+1</button>
            <button onClick={() => setValue(value - 1)}>-1</button>
        </div>
    )
    */

    // useReducer 사용
    const [state, dispatch] = useReducer(reducer, {value: 0});

    return (
        <div>
            <p>
                현재 카운터 값은 <b>{state.value}</b> 입니다.
            </p>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>+1</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>+1</button>
        </div>
    )
}

export default Counter;