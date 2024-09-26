import "./index.css";
import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";

import * as ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Footer from "./components/footer/Footer.jsx";
import Exemplo from "./exemplo.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>Erro</h1>,
    children: [
      { path: "/footer", element: <Footer /> },
      { path: "/ola", element: <Exemplo /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
