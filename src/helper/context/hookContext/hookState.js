import HookContext from "./hookContext";
import { useReducer } from "react";
import { ADD_NEW_HOOK } from "./hookTypes";
import HookReducer from "./hookReducer";

const initialState = {
  myHooks: [],
  isPublishing: false,
};

const HookState = ({ children }) => {
  // Reducer
  const [state, dispatch] = useReducer(HookReducer, initialState);

  const addNewHook = (payload) => {
    dispatch({ type: ADD_NEW_HOOK, payload });
  };

  return (
    <HookContext.Provider
      value={{
        addNewHook,
        ...state,
      }}
    >
      {children}
    </HookContext.Provider>
  );
};

export default HookState;
