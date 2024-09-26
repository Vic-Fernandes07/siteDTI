import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p>&copy; 2024 Dress To Impress. Todos os direitos reservados.</p>
        <ul className="social-links">
          <li>
            <a href="#">Git</a>
          </li>
          <li>
            <a href="#">E-mail</a>
          </li>
          <li>
            <a href="#">Instagram</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
