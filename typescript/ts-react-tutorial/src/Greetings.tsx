import React from "react";

type GreetingsProps = {
  name: string;
  mark: string;
  optional?: string;
  onClick: (name: string) => void; // return 없는 함수
};

const Greetings = ({ name, mark, optional, onClick }: GreetingsProps) => {
    const handleClick = () => onClick(name);
  return (
    <div>
      Hello, {name} {mark}
      {optional && <p>{optional}</p>}
    </div>
  );
};

Greetings.defaultProps = {
  mark: "!",
};

export default Greetings;
