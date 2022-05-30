import { LOAD_FEEDS } from "./feedTypes";

const FeedReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOAD_FEEDS:
      return { ...state, feeds: payload };
    default:
      return state;
  }
};

export default FeedReducer;
