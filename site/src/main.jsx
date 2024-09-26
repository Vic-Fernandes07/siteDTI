import "./index.css";
import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";
import * as ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Footer from "./components/footer/Footer.jsx";
import Exemplo from "./exemplo.jsx";
import cabide from "./assets/cabide.png"


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:  <>
    <img src={cabide} alt="Imagem" />
    <img src="" alt="" />
    <h2>Oops! Algo deu errado.</h2>
    <p>Essa pagina não existe.</p>
    </>,
 
    children: [
      { path: "/footer", element: <Footer /> },
      { path: "/ola", element: <Exemplo /> },
      { path: "/olas", element: <olas /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
