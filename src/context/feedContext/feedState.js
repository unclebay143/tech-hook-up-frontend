import FeedContext from "./feedContext";
import { useReducer } from "react";
import { LOAD_FEEDS } from "./feedTypes";
import FeedReducer from "./feedReducer";

const initialState = {
  feeds: [],
};

const FeedState = ({ children }) => {
  // Reducer
  const [state, dispatch] = useReducer(FeedReducer, initialState);

  // Fetch Hookers
  const loadFeeds = (payload) => {
    dispatch({ type: LOAD_FEEDS, payload });
  };

  return (
    <FeedContext.Provider
      value={{
        loadFeeds,
        ...state,
      }}
    >
      {children}
    </FeedContext.Provider>
  );
};

export default FeedState;
