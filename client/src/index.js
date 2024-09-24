import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    {/** helps in routing in app */}
    <Provider store={store}>
      {/**providing store to the app */}
      <App />
    </Provider>
  </HashRouter>
);
