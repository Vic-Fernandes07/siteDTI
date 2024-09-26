import React from "react";
import "./Header.css";
import home from "../../assets/home.png";
import Closet from "../../assets/closet.png";
import Book from "../../assets/book.png";
import People from "../../assets/people.png";
import icon from "../../assets/icon.png";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <div className="d-block bg-dark text-light">
        <div className="row m-0 divMenu m-0">
          <div className="col m-0 bg-black">
            <Link to={"closet"}>

            <img className="closet" src={Closet} alt="Closet icon" />
            </Link>
            <img className="home" src={home} alt="Home icon" />
            <img className="book" src={Book} alt="Book icon" />
            <img className="people" src={People} alt="Person icon" />
            <img className="icon" src={icon} alt="Notification icon" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
