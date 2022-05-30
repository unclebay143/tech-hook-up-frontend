import { useReducer } from "react";
import UserContext from "./userContext";
import UserReducer from "./userReducer";
import { FOLLOW_USER, LOAD_USERS, UN_FOLLOW_USER } from "./userTypes";

const UserState = ({ children }) => {
  const initialState = {
    // Mock data for skeleton
    users: new Array(15).fill({}),
  };

  // Reducer
  const [state, dispatch] = useReducer(UserReducer, initialState);

  // Fetch Hookers
  const loadUsers = (payload) => {
    dispatch({ type: LOAD_USERS, payload });
  };

  // follow  user func
  const followUser = (payload) => {
    dispatch({ type: FOLLOW_USER, payload });
  };

  // un-follow user func
  const unfollowUser = (payload) => {
    dispatch({ type: UN_FOLLOW_USER, payload });
  };

  return (
    <UserContext.Provider
      value={{
        loadUsers,
        followUser,
        unfollowUser,
        ...state,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserState;
