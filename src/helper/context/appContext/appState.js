import { useReducer } from "react";
import AppContext from "./appContext";
import AppReducer from "./appReducer";
import { TOGGLE_DARK_MODE } from "./appTypes";

const AppState = ({ children }) => {
  const initialState = {
    // get the initial dark mode state from the local storage
    isDarkMode: JSON.parse(localStorage.getItem("isDarkMode")) || false,
  };

  const [state, dispatch] = useReducer(AppReducer, initialState);

  const toggleDarkMode = () => {
    // save to local storage
    localStorage.setItem("isDarkMode", JSON.stringify(!state.isDarkMode));
    dispatch({ type: TOGGLE_DARK_MODE });
  };

  return (
    <AppContext.Provider value={{ toggleDarkMode, ...state }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppState;
