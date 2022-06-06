import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    todosList: [],
    tabActive: false,    // false is undone      true is done
}
export const todoSlice = createSlice({
    name: 'todoApp',
    initialState,
    reducers: {
        addTodoReducer: (state, action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            // state.todosList = action.payload;
            state.todosList = [...state.todosList, {
                id: Date.now(),
                task: action.payload,
                status: 0   //0 is undone   1 is done
            }]

        },
        tabActiveReducer: (state, action) => {
            state.tabActive = !state.tabActive
            // توی یه خط مینویسم خطا میده
        },
        deleteTodoReducer: (state, action) => {
            state.todosList = state.todosList.filter((item) => item.id !== action.payload)
        },


        // incrementByAmount: (state, action) => {
        //     state.value += action.payload
        // },
    },
})

// Action creators are generated for each case reducer function
export const {tabActiveReducer, addTodoReducer, deleteTodoReducer} = todoSlice.actions;

export default todoSlice.reducer