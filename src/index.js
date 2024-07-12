import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import reportWebVitals from "./reportWebVitals";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import axios from "axios";
import { Provider } from "react-redux";
import {store} from "./store/store";

/**Setup  Axios */
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers.common[
  "Authorization"
] = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MDI2YjEyMTlhMzBmZjU5YjJlYzgwYzZkYjBkODM1ZSIsIm5iZiI6MTcyMDUzNjkxMS42NDUwMiwic3ViIjoiNjU4ZWZlNTA3YTRlZTc1OGMwODNlM2JjIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.TfYzSJmt9p6Z-uFQPdf3NAW2sMHlNZZ1XtBf6xRwUbU`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
  // <React.StrictMode>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
