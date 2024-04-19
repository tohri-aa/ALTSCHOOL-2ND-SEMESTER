
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Repos from "./components/repos";
import Repo from "./components/repo";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Repos />,
  },
  {
    path: "/repo/:id",
    element: <Repo />
  }
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);