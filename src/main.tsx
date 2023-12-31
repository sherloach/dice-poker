import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Playing from "./Playing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/playing",
    element: <Playing />
  },
])

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
