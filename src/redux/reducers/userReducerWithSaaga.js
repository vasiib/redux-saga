import { FETCH_USERS_FAILED, FETCH_USERS_WITH_SAGA, SET_FETCH_USERS } from '../actions/userActions';

const initialState ={
    loading: true,
    users:[],
    error:""
}

export const userReducerWithSaaga = (state=initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_WITH_SAGA:{
            console.log("Vaseem-2")
            return {
                loading: true,
                users:[],
                error:''
            };
        }
        case SET_FETCH_USERS:{
            console.log("Vaseem-4.1")
            
            return {
                loading: false,
                users: action.payload,
                error: ""
            }
        }
        case FETCH_USERS_FAILED:{
            console.log("Vaseem-4.2")
            
            return {
                loading: false,
                users: [],
                error: action.payload
            }
        }
        default:{
            return state
        }

    }
}