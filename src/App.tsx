import React, {useEffect} from 'react'
import Input from './components/Input/input';
import Todo from "./components/Todo/todo";

import {EditTodo, TodoType} from "./components/Todo/types";
import {addTodo, selectTodos} from "./store/slices/todosSlice";
import todo from "./components/Todo/todo";
import {useAppDispatch, useAppSelector} from "./hooks";

import './styles/App.css'

function App() {
    const dispatch = useAppDispatch();
    const todos = useAppSelector(selectTodos);

    const handleEdit = ({id, text}: EditTodo) => {
        /*const newTodos = todos.map((item) => {
            if (item.id === id) {
                item.text = text;
            }
            return item;
        });*/
        // setTodos(newTodos);
    }
    const handleDelete = (id: number) => {
        // const newTodos = todos.filter((item) => item.id !== id);
        // setTodos(newTodos);
    }
    const handleComplete = (id: number, ) => {
        /*const newTodos = todos.map((item) => {
            if (item.id === id) {
                item.isCompleted = !item.isCompleted;
            }
            return item;
        });*/
        // setTodos(newTodos);
    }

    const addTodoToState = (text: string) => {
        let newTodo: TodoType = {
            id: todos.length + 1,
            text: text,
            isCompleted: false,
        };

        /*setTodos([
            ...todos,
            newTodo
        ]);*/

        dispatch(addTodo(newTodo));
    }

    useEffect(() => {
        console.log(todo);
    }, [todos])


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
