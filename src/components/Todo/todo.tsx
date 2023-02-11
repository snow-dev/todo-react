import React, {ReactElement, useEffect, useState} from "react";
import {EditTodo, TodoType} from "./types";

import editIcon from '../../assets/edit.svg';
import deleteIcon from '../../assets/delete.svg';
import saveIcon from '../../assets/save.svg';

type Props = {
    todo: TodoType,
    completeOnClick: (...args: any[]) => any,
    onEditClick: ({id, text}: EditTodo) => void,
    onDelete: (id: number) => void
};

const Todo = ({todo, completeOnClick, onEditClick, onDelete}: Props): ReactElement => {

    const [isEdit, setIsEdit] = useState<boolean>(false);
    const [text, setText] = useState<string>('');

    useEffect(() => {
        setText(todo.text);
    }, [isEdit]);

    const handleEdit = () => {
        setText(text === '' || text === todo.text ? todo.text : text)
        onEditClick({id: todo.id, text});
        setIsEdit(!isEdit);
        setText('');
    };

    return (
            <div className={isEdit ? 'todo-edit' : 'todo'}>
                <input type="checkbox"
                       className="check"
                       defaultChecked={todo.isCompleted}
                       onChange={() => completeOnClick(todo.id)}
                       disabled={isEdit}
                />

                {isEdit ?
                    <input defaultValue={todo.text}
                           className="edit-todo"
                           onChange={event => setText(event.target.value)}
                    />
                    :
                    <p className={todo.isCompleted ? 'completed': 'incomplete'} >
                        {todo.text}
                    </p>
                }

                {
                    isEdit ?
                        <>
                            <button className="save"
                                    onClick={() => handleEdit()}>
                                <img src={saveIcon} alt="save" />
                            </button>

                            <button className="delete"
                                    onClick={() => onDelete(todo.id)}>
                                <img src={deleteIcon} alt="delete" />
                            </button>
                        </>

                    :
                    <button className="edit"
                    onClick={() => setIsEdit(!isEdit)}>
                        <img src={editIcon} alt="edit" />
                    </button>
                }
            </div>
    );
}

export default  Todo;
