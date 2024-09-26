import "./index.css";
import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";

import * as ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { element } from "prop-types";
import Closet from "./components/closet/Closet.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>Erro</h1>,
    children: [
      { path: "/closet", element: <Closet /> },
      { path: "/book", element: <Book/> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
