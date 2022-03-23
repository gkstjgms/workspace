import React, { useState, useMemo, useCallback, useRef } from 'react';

const getAverage = numbers => {
    console.log('평균값 계산중...');
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((a, b) => a + b);
    return sum / numbers.length;
};

const Average = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');
    const inputEl = useRef(null);

    const onChange = useCallback(e => {
        setNumber(e.target.value);
    }, []); // useCallback - 컴포넌트가 처음 렌더링 될 때만 함수 생성
    const onInsert = useCallback(e => {
        const nextList = list.concat(parseInt(number)); 
        // concat: 기존 배열에 주어진 배열이나 값들을 합쳐 새 배열 반환
        // parseInt: 특정 진수의 정수 반환
        setList(nextList);
        setNumber('');
        inputEl.current.focus(); // current 값이 실제 element를 가리킴
    }, [number, list]); // useCallback - number 혹은 list가 바뀌었을 때만 함수 생성

    const avg = useMemo(() => getAverage(list), [list])

    return (
        <div>
            <input value={number} onChange={onChange} ref={inputEl} />
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
            <div>
                <b>평균 값:</b> {avg}
            </div>
        </div>
    );
};

export default Average;