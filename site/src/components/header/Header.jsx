import React from "react";
import "./Header.css";
import home from "../../assets/home.png";
import Closet from "../../assets/closet.png";
import Book from "../../assets/book.png";
import People from "../../assets/people.png";
import icon from "../../assets/icon.png";
import Carrinho from "../../assets/Group.png";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export const Header = () => {
  return (
    <>
      <div className="row m-0 p-0 bg-black text-link-light">
        <div className="col  m-0 p-0 ">
          <Link to={"/"}>
            <img className="iconeMenu" src={home} alt="Home icon" />
          </Link>
          <Link to={"closet"}>
            <img className="iconeMenu" src={Closet} alt="Closet icon" />
          </Link>
          <Link to={"book"}>
            <img className="iconeMenu" src={Book} alt="Book icon" />
          </Link>
          <Link to={"login"}>
            <img className="iconeMenu" src={People} alt="Person icon" />
          </Link>
          <Link>
            <img className="iconeMenu" src={icon} alt="Notification icon" />
          </Link>
          <Link to={"carrinho"}>
            <img className="iconeMenu" src={Carrinho} alt="Carrinho icon" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
