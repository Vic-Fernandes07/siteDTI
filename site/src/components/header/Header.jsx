import React, { useState, useEffect } from "react";
import "./Header.css";
import home from "../../assets/home.png";
import Closet from "../../assets/closet.png";
import Book from "../../assets/book.png";
import People from "../../assets/people.png";
import icon from "../../assets/icon.png";
import Carrinho from "../../assets/Group.png";
import bag from "../../assets/bag.png";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const Header = () => {
  const [user, setUser] = useState(null);

  // Verifica se o usuário está logado
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user); // Atualiza o estado com as informações do usuário logado
      } else {
        setUser(null); // Reseta o estado se o usuário fizer logout
      }
    });
    return () => unsubscribe(); // Limpa o listener ao desmontar o componente
  }, []);

  return (
    <div className="row m-0 p-0 bg-black text-link-light fixed-top flex-row">
      <div className="col m-0 p-0 d-flex align-items-center gap-3 ps-4 mt-2 mb-2">
        <Link to="/">
          <img className="iconeMenu" src={home} alt="Ícone de Home" />
        </Link>
        <Link to="/closet">
          <img className="iconeMenu" src={Closet} alt="Ícone de Closet" />
        </Link>
        <Link to="/book">
          <img className="iconeMenu" src={Book} alt="Ícone de Book" />
        </Link>
        <Link to="/shop">
          <img className="iconeMenu" src={bag} alt="Ícone de Bag" />
        </Link>
      </div>

      <div className="col-2 d-flex justify-content-end align-items-center gap-3 pe-4">
        {user ? (
          // Se o usuário estiver logado, mostrar a foto de perfil e link para perfil
          <Link to="/perfil">
            <img
              className="iconeMenu profile-picture"
              src={user.photoURL || People} // Usa a foto do perfil ou o ícone "People" como fallback
              alt="Profile icon"
            />
          </Link>
        ) : (
          // Se não estiver logado, mostrar o ícone de login
          <Link to="/logingoogle">
            <img className="iconeMenu" src={People} alt="Login icon" />
          </Link>
        )}
        <Link to="/notifications">
          <img className="iconeMenu" src={icon} alt="Notification icon" />
        </Link>
        <Link to="/carrinho">
          <img className="iconeMenu" src={Carrinho} alt="Carrinho icon" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
