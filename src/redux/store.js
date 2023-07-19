import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import userReducer from "./slices/userSlice";
import { userReducerWithSaaga } from "./reducers/userReducerWithSaaga";
import createSagaMiddleware from "@redux-saga/core";
import userSagaFetchUsers from './saga/userSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    count: counterReducer,
    user: userReducer,
    userWithSaaga: userReducerWithSaaga
  },
  middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(sagaMiddleware)
});

sagaMiddleware.run(userSagaFetchUsers);
