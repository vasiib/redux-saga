import { FETCH_USERS_WITH_SAGA } from "../actions/userActions";

export const fetchUsersWithSaga = () => {
    console.log("Vaseem-1");
  return {
    type: FETCH_USERS_WITH_SAGA,
  };
};
