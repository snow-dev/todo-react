import React, { useState } from 'react'
import Input from './components/Input/input';
import Todo from "./components/Todo/todo";

import './styles/App.css'
import {EditTodo, TodoType} from "./components/Todo/types";

function App() {
    const [todos, setTodos] = useState<TodoType[]>([])

    const handleEdit = ({id, text}: EditTodo) => {
        const newTodos = todos.map((item) => {
            if (item.id === id) {
                item.text = text;
            }
            return item;
        });
        setTodos(newTodos);
    }
    const handleDelete = (id: number) => {
        const newTodos = todos.filter((item) => item.id !== id);
        setTodos(newTodos);
    }
    const handleComplete = (id: number, ) => {
        const newTodos = todos.map((item) => {
            if (item.id === id) {
                item.isCompleted = !item.isCompleted;
            }
            return item;
        });
        setTodos(newTodos);
    }

    const addTodo = (text: string) => {
        let newTodo: TodoType = {
            id: todos.length,
            text: text,
            isCompleted: false,
        };

        setTodos([
            ...todos,
            newTodo
        ]);
    }

    return (
        <div className="todos">
            <h2>List of TODO's</h2>
            <div className="input-container">
                <Input add={addTodo} />
            </div>

            <div className="container">
                {
                    todos.length === 0 && <h2>Nothing for TODO</h2>
                }

                {
                    todos.map((item, index) => {
                        return <Todo key={index}
                                     todo={item}
                                     completeOnClick={handleComplete}
                                     onEditClick={handleEdit}
                                     onDelete={handleDelete}

                        />
                    })
                }
            </div>
    </div>
  )
}

export default App
