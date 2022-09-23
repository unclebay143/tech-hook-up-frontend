import { FETCH_TAGS } from "./tagTypes";

const TagReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_TAGS:
      return { ...state, hookTags: payload };

    default:
      return state;
  }
};

export default TagReducer;
