import React, { useState } from "react";

const Example = () => {
  const [text, setText] = useState("");

  const handleChange = (e: any) => {
    setText(e.target.value);
  };

  const handleClick = () => {
    const textbox = {
      intext: text,
    };

    fetch("http://localhost:8000/text", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(textbox),
    });
  };

  return (
    <div>
      <input name="text" onChange={handleChange} />
      <button onClick={handleClick}>Send</button>
      <h3>{text}</h3>
    </div>
  );
};

export default Example;
