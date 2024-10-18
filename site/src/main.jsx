import "./index.css";
import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";
import * as ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import App from "./App.jsx";
import Footer from "./components/footer/Footer.jsx";
import cabide from "./assets/cabide.png";
import { element } from "prop-types";
import Closet from "./components/closet/Closet.jsx";
import Login from "./components/login/Login.jsx";
import Home from "./components/home/Home.jsx";
import Lookbook from "./components/book/Lookbook.jsx";
import Register from "./components/register/Register.jsx";
import Shop from "./components/shop/Shop.jsx";
import LoginGoogle from "./components/login/LoginGoogle.jsx";
import Carrinho from "./components/carrinho/Carrinho.jsx";
import Perfil from "./components/perfil/Perfil.jsx";
import Profile from "./components/profile/profile.jsx";


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
      { path: "/", element: <Home /> },
      { path: "/footer", element: <Footer /> },
      { path: "/closet", element: <Closet /> },
      { path: "/book", element: <Lookbook /> },
      { path: "/login", element: <Login /> },
      { path: "/carrinho", element: <Carrinho /> },
      { path: "/register", element: <Register /> },
      { path: "/shop", element: <Shop /> },
      { path: "/perfil", element: <Perfil /> },
      // { path: "/perfil", element: <Perfil /> },
      { path: "/logingoogle", element: <LoginGoogle /> },
      { path: "/perfil", element: <Profile /> },

    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
