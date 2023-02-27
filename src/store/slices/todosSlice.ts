import {EditTodo, TodoType} from "../../components/Todo/types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store";

interface TodoState {
    list: TodoType[];
}

const initialState: TodoState = {
    list: []
};

export const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<TodoType>) => {
            state.list.push(action.payload)
        },
        updateTodo: (state, action: PayloadAction<EditTodo>) => {
            const todo = state.list.find(todo => todo.id === action.payload.id);
            if (todo) {
                todo.text = action.payload.text;
            }
        },
        completeTodo: (state, action: PayloadAction<number>) => {
            const todo = state.list.find(todo => todo.id === action.payload);
            if (todo) {
                todo.isCompleted = !todo.isCompleted;
            }
        },
        deleteTodo: (state, action: PayloadAction<number>) => {
            state.list = state.list.filter(todo => todo.id !== action.payload);
        }
    }
});

export  const { addTodo, updateTodo, completeTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;

/** Create selector for todos */
export const selectTodos = (state: RootState) => state.todos.list;


