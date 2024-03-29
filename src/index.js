import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import UserState from "./helper/context/user-context/userState";
import AppState from "./helper/context/appContext/appState";
import FeedState from "./helper/context/feedContext/feedState";
import TagState from "./helper/context/tagContext/tagState";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppState>
      <UserState>
        <FeedState>
          <TagState>
            <App />
          </TagState>
        </FeedState>
      </UserState>
    </AppState>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
