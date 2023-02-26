import {createSlice} from "@reduxjs/toolkit";

interface State {
    value: number;
}

export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0,
    },

    reducers: {
        increment: (state : State) => {
            state.value += 1;
        },
        decrement: (state: State) => {
            state.value -= 1;
        },
        incrementByAmount: (state: State, action) => {
            state.value += action.payload;
        },
    }
});

export const {increment, decrement, incrementByAmount} = counterSlice.actions;
export default counterSlice.reducer;


export const selectCount = (state: State) => state.value;
