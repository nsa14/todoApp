import { createSlice } from '@reduxjs/toolkit'
import {actionsReducer as counterSlice} from "@reduxjs/toolkit/src/query/tests/helpers";

const initialState = {
    todosList: [],
}
export const todoSlice = createSlice({
    name: 'todoApp',
    initialState,
    reducers: {
        addTodo: (state,action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.todosList = action.payload
        },
        // incrementByAmount: (state, action) => {
        //     state.value += action.payload
        // },
    },
})

// Action creators are generated for each case reducer function
export const { addTodo, EditTodo, deleteTodo } = todoSlice.actions

export default todoSlice.reducer