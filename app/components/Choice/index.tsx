import React from "react";

interface IChoice {
  name: string;
  check(word:string): void;
}

const Choice: React.FC<IChoice> = (props) => {
  return (
    <button className="choice" onClick={() => props.check(props.name)}>{props.name}</button>
  )
}

export default Choice;