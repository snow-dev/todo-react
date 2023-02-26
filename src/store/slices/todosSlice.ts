import {TodoType} from "../../components/Todo/types";
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
    }
});

export  const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;

/** Create selector for todos */
export const selectTodos = (state: RootState) => state.todos.list;


