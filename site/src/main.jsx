import "./index.css";
import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";
import * as ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Footer from "./components/footer/Footer.jsx";
import cabide from "./assets/cabide.png";
import { element } from "prop-types";
import Closet from "./components/closet/Closet.jsx";
import Login from "./components/login/Login.jsx";
import Book from "./components/book/Book.jsx";
<<<<<<< HEAD
=======
/*import Carrinho from "./components/carrinho/Carrinho.jsx";*/
>>>>>>> origin/vitoria

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: (
      <>
        <img src={cabide} alt="Imagem" />
        <h2>Oops! Algo deu errado.</h2>
        <p>Essa pagina não existe.</p>
      </>
    ),

    children: [
      { path: "/footer", element: <Footer /> },
      { path: "/closet", element: <Closet /> },
      { path: "/book", element: <Book /> },
      { path: "/login", element: <Login /> },
      /*{ path: "/carrinho", element: <Carrinho /> },*/
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
