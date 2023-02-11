import React, {ReactElement, useState} from "react";

type Props ={
    add: (...args: any[]) => any
}
const Input = ({add}: Props) : ReactElement => {

    const [inputText, setInputText] = useState<string>('');

    const handleAdd = () => {
        add(inputText);
        setInputText('');
    };

    return <>
        <input
            className="input"
            type="text"
            placeholder="Create new todo..."
            onChange={e => setInputText(e.target.value)}
            value={inputText}
        />
        <button className="addButton"
                onClick={() => handleAdd()} >
            Add
        </button>
    </>;
}

export default Input;
