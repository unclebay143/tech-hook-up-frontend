import { ADD_NEW_HOOK, IS_PUBLISHING, PUBLISH_SUCCESS } from "./hookTypes";

const HookReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_NEW_HOOK:
      return {
        ...state,
        myHooks: [payload, ...state.myHooks],
      };

    case IS_PUBLISHING:
      return {
        ...state,
        isPublishing: true,
      };

    case PUBLISH_SUCCESS:
      return {
        ...state,
        isPublishing: false,
      };

    default:
      return state;
  }
};

export default HookReducer;
