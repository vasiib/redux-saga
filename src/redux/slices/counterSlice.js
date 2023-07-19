import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    countValue : 0
}

const counterSlice = createSlice({
    name: "counter",
    initialState :initialState,
    reducers:{
        increment: (state,action) => {
            state.countValue = state.countValue + 1
        },
        decrement : (state) => {
            state.countValue = state.countValue - 1
        },
        reset : (state) => {
            state.countValue = 0
        }
    }
})

export default counterSlice.reducer;
export const {increment, decrement, reset} = counterSlice.actions