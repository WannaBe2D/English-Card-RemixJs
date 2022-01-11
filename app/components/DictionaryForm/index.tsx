import React, { useState } from "react";

interface IForm {
  setState(state: any): void;
  setStart(state:boolean): void;
  start: boolean
}

const DictionaryForm: React.FC<IForm> = (props) => {
  const [dictionary, setDictionary] = useState();
  const [fileName, setFileName] = useState<string>("");

  const showFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.onload = async (e:any) => {
      setDictionary(e.target.result);
    };
    const file = e.target.files![0];
    if (file) {
      reader.readAsText(file);
      setFileName(file.name)
    }
  };

  const handleGame = () => {
    props.setState(dictionary)
    props.setStart(!props.start)
  }

  return (
    <div className="dictionaryForm">
      <input onChange={(e) => showFile(e)} type="file" id="upload" hidden/>
      <div>
        <label htmlFor="upload">Choose file</label>
        <span>{fileName}</span>
      </div>
      { fileName && <button className="upload" onClick={() => handleGame()}>Upload</button>}
    </div>
  );
}

export default DictionaryForm