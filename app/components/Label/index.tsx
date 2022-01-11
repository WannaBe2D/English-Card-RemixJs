import React from "react";

interface ILabel {
    name: string;
}

const Label: React.FC<ILabel> = (params) => {
    return <div className="word"><h1>{params.name}</h1></div>
}

export default Label;