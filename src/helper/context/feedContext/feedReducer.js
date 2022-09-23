import {
  ADD_NEW_HOOK,
  IS_PUBLISHING,
  LOAD_FEEDS,
  PUBLISH_SUCCESS,
} from "./feedTypes";

const FeedReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOAD_FEEDS:
      return { ...state, feeds: payload };

    case ADD_NEW_HOOK:
      return {
        ...state,
        feeds: [payload, ...state.feeds],
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

export default FeedReducer;
