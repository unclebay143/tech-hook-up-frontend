import { useReducer } from "react";
import UserContext from "./userContext";
import UserReducer from "./userReducer";
import {
  FOLLOW_USER,
  LOAD_USERS,
  UN_FOLLOW_USER,
  LOAD_USER_PROFILE,
} from "./userTypes";

const UserState = ({ children }) => {
  const initialState = {
    // Mock data for skeleton
    user: {},
    users: new Array(15).fill({}),
    isLoggedIn: false,
  };

  // Reducer
  const [state, dispatch] = useReducer(UserReducer, initialState);

  // Fetch user profile
  const loadUserProfile = (payload) => {
    dispatch({ type: LOAD_USER_PROFILE, payload });
  };

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
        loadUserProfile,
        ...state,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserState;
