import FeedContext from "./feedContext";
import { useReducer } from "react";
import {
  ADD_NEW_HOOK,
  IS_PUBLISHING,
  LOAD_FEEDS,
  PUBLISH_SUCCESS,
} from "./feedTypes";
import FeedReducer from "./feedReducer";

const initialState = {
  feeds: [],
  myHooks: [],
  isPublishing: false,
};

const FeedState = ({ children }) => {
  // Reducer
  const [state, dispatch] = useReducer(FeedReducer, initialState);

  // Fetch Hookers
  const loadFeeds = (payload) => {
    dispatch({ type: LOAD_FEEDS, payload });
  };

  const addNewHook = (payload) => {
    dispatch({ type: IS_PUBLISHING });

    setTimeout(() => {
      dispatch({ type: ADD_NEW_HOOK, payload });
      dispatch({ type: PUBLISH_SUCCESS });
    }, 5000);
  };

  return (
    <FeedContext.Provider
      value={{
        addNewHook,
        loadFeeds,
        ...state,
      }}
    >
      {children}
    </FeedContext.Provider>
  );
};

export default FeedState;
