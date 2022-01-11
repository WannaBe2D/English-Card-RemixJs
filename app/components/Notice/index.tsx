import React from "react";

interface INotice {
    setDictionary(state:string): void;
}

const Notice: React.FC<INotice> = (props) => {
    const handleDictionary = () => {
        props.setDictionary("bring;приносить\n" +
            "make;делать\n" +
            "a friend;Друг\n" +
            "play;играть\n" +
            "sell;продавать\n" +
            "know;знать\n" +
            "pay;платить\n" +
            "follow;следовать\n" +
            "understand;понимать\n" +
            "need;нуждаться\n" +
            "use;использовать\n" +
            "speak;говорить\n" +
            "come;приходить\n" +
            "close;закрывать")
    }
    return <div className="notice">
        <p>Text file format:</p>
        <span>word;translate</span>
        <span>word;translate</span>
        <button onClick={() => handleDictionary()}>test file</button>
    </div>
}

export default Notice;
