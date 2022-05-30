import { TOGGLE_DARK_MODE } from "./appTypes";

const AppReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case TOGGLE_DARK_MODE:
      return { ...state, isDarkMode: !state.isDarkMode };

    default:
      return state;
  }
};

export default AppReducer;
