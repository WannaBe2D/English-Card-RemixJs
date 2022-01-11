import React, {useState} from "react";
import DictionaryForm from "~/components/DictionaryForm"
import Game from "~/components/Game/game";
import styles from "~/styles/index.css";
import {LinksFunction} from "remix";
import Notice from "~/components/Notice";

export const links: LinksFunction = () => {
    return [{ rel: "stylesheet", href: styles }];
};


export default function Index() {
  const [dictionary, setDictionary] = useState<string>();
  const [start, setStart] = useState<boolean>(false);

  return (
      <>
        <DictionaryForm setState={setDictionary} setStart={setStart} start={start} />
        {dictionary ? <Game start={start} dictionary={dictionary} /> : <Notice setDictionary={setDictionary} />}
      </>
  )
}
