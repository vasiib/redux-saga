import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/slices/userSlice";
import { fetchUsersWithSaga } from '../redux/actionCreators/userActionCreators';

const User = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.userWithSaaga)

  useEffect(() => {
    dispatch(fetchUsersWithSaga());
  }, []);

  let users = []
  if(user.loading){
    users = "Loading"
  }else{
    user.users.length > 0 ? users = user.users : users = user.error
  }
  return (
    <div>
        {
            Array.isArray(users) ? users.map(user=>{
              return <h3 key={user.name}>{user.name} - {user.username}</h3>
            })
            :
            users
        }
    </div>);
};

export default User;
