import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";
import {
  FETCH_USERS_FAILED,
  FETCH_USERS_WITH_SAGA,
  SET_FETCH_USERS,
} from "../actions/userActions";

//worker-saga
function* getUsers() {
  console.log("Vaseem-3");
  let users = [];
  try {
    users = yield axios.get("https://jsonplaceholder.typicode.com/users/");
    //dispatch an action
    yield put({ type: SET_FETCH_USERS, payload: users?.data });
  } catch (error) {
    //dispatch an action
    yield put({ type: FETCH_USERS_FAILED, payload: error?.message });
  }
}

//watcher
//need to pass this as input to sagaMiddleware.run(watchers)
function* fetchUsers() {
  console.log("Vaseem-0");
  yield takeEvery(FETCH_USERS_WITH_SAGA, getUsers);
  //
  //
}

export default fetchUsers;
