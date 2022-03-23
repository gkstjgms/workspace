import React, { useState } from 'react';

const Example = () => {
    const [text, setText] = useState('');

    const onChange = e => {
        setText(e.target.value);
    }

    return (
        <div>
            <input value={text} onChange={onChange} />
            <p><b>Echo: </b>{text}</p>
        </div>
    )
}

export default Example;