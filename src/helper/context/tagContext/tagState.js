import { useReducer } from "react";
import { FETCH_TAGS } from "./tagTypes";
import TagReducer from "./tagReducer";
import TagContext from "./tagContext";
import TagService from "../../service/tags.service";

const initialState = {
  hookTags: null,
};

const TagState = ({ children }) => {
  // Reducer
  const [state, dispatch] = useReducer(TagReducer, initialState);

  // fetch all tags to state
  const fetchTags = () => {
    TagService.fetchTags()
      .then((tags) => {
        dispatch({ type: FETCH_TAGS, payload: tags });
      })
      .catch((err) => {
        //throw error
        throw new Error("Something went wrong: trace >" + err);
      });
  };
  return (
    <TagContext.Provider
      value={{
        fetchTags,
        ...state,
      }}
    >
      {children}
    </TagContext.Provider>
  );
};

export default TagState;
