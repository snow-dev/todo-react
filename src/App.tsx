import React from 'react'
import Input from './components/Input/input';
import Todo from "./components/Todo/todo";

import {EditTodo, TodoType} from "./components/Todo/types";
import {
    addTodo,
    completeTodo,
    deleteTodo,
    selectTodos,
    updateTodo
} from "./store/slices/todosSlice";
import {useAppDispatch, useAppSelector} from "./hooks";

import './styles/App.css'

function App() {
    const dispatch = useAppDispatch();
    const todos = useAppSelector(selectTodos);

    const handleEdit = ({id, text}: EditTodo) => {
        dispatch(updateTodo({
            id,
            text,
        }));
    }
    const handleDelete = (id: number) => {
        dispatch(deleteTodo(id));
    }

    const handleComplete = (id: number, ) => {
        dispatch(completeTodo(id));
    }

    const addTodoToState = (text: string) => {
        let newTodo: TodoType = {
            id: todos.length + 1,
            text: text,
            isCompleted: false,
        };
        dispatch(addTodo(newTodo));
    }

    const listOfTodos = () => {
        console.log('todos list...', todos);
        if (todos === undefined) return (<h2>Nothing for TODO</h2>);
        return todos.map((todo: TodoType) => {
            return (
                <Todo
                    key={todo.id}
                    todo={todo}
                    completeOnClick={handleComplete}
                    onEditClick={handleEdit}
                    onDelete={handleDelete}
                />
            )
        })
    };

    return (
        <div className="todos">
            <h2>List of TODO's</h2>
            <div className="input-container">
                <Input add={addTodoToState} />
            </div>

            <div className="container">
                {
                    listOfTodos()
                }
            </div>
    </div>
  )
}

export default App
