import { FOLLOW_USER, LOAD_USERS, UN_FOLLOW_USER } from "./userTypes";

const UserReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOAD_USERS:
      return { ...state, users: payload };

    case FOLLOW_USER:
      return {
        ...state,
        users: state?.users?.map((user) => {
          // using if statement
          if (user.id === payload) {
            return { ...user, following: true };
          }
          return user;
        }),
      };

    case UN_FOLLOW_USER:
      return {
        ...state,
        // using ternary operator
        users: state?.users?.map((user) =>
          user.id === payload ? { ...user, following: false } : user
        ),
      };
    default:
      return state;
  }
};

export default UserReducer;
