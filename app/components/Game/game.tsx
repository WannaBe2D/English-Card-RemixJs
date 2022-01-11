import React, {useEffect, useState} from "react";
import {TWords} from "~/services/types";
import {shuffle} from "~/services/dictionaryServices";
import Choice from "~/components/Choice";
import Label from "~/components/Label";

interface IGame {
    dictionary: string;
    start: boolean;
}

const Game: React.FC<IGame> = (props) => {
    const [words, setWords] = useState<TWords[]>()
    const [variables, setVariables] = useState<TWords[]>()
    const [winner, setWinner] = useState<TWords>()
    const [errors, setError] = useState<number>(0);

    useEffect(() => {
        createDictionary(props.dictionary)
    }, [props.start])

    useEffect(() => {
        getItem()
    }, [words])

    const createDictionary = (dictionary:string) => {
        let items: TWords[] = [];
        console.log(dictionary)
        if(dictionary) {
            dictionary.split("\n").forEach(element => {
                if(element) {
                    let item = element.split(";")
                    const word: TWords = {
                        word: item[0],
                        translate: item[1]
                    }
                    items.push(word)
                }
            })
            setWords(items)
            setError(0)
        }
    }

    const getItem = () => {
        if(words) {
            let items = shuffle(words).slice(0, 5)
            setWinner(items[0])
            setVariables(shuffle(items))
        }
    }

    const checkWinner = (word:string) => {
        if (winner!.translate === word) {
            getItem()
            let items = words?.filter(el => el.translate !== word && el)
            setWords(items)
        } else {
            setError(errors + 1)
        }
    }

    return (
        <div className="dictionaryLabel">
            <h2>Errors: <span>{errors}</span></h2>
            {winner ? <Label name={winner.word} /> : <Label name={"Finish"} />}
            <div className="variables">
                {variables &&  variables.map((word, index) => (
                    <Choice key={index} name={word.translate} check={checkWinner} />
                ))}
            </div>
        </div>
    );
}

export default Game