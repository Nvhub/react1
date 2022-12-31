import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";
import { getAllUsers } from "./redux/slicer/userSlice";
import { persistor, store } from "./redux/store";
import reportWebVitals from "./reportWebVitals";
import uuid from "./util/uuid";

const root = ReactDOM.createRoot(document.getElementById("root"));
store.dispatch(
  getAllUsers([
    {
      id: uuid(),
      userName: "vahid",
      email: "vahid@gmail.com",
      password: "vahid1234",
      token: "",
      role: "admin"
    },
    {
      id: uuid(),
      userName: "reza",
      email: "reza@gmail.com",
      password: "reza1234",
      token: "",
      role: "user"
    },
  ])
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
