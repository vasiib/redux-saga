import { DECREMENT, INCREMENT, RESET } from "../actions/counterActions"

const initialState = {
    countValue : 0
}

export const counterReducer = (state=initialState, action) => {
    switch (action.type) {
        case INCREMENT:{
            return {
                countValue : state.countValue + 1
            }
        }
        case DECREMENT:{
            return {
                countValue : state.countValue - 1
            }
        }
        case RESET:{
            return {
                countValue : initialState.countValue
            }
        }
    }
}