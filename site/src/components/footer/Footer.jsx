import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <p>&copy; 2024 Dress To Impress👗💖. Todos os direitos reservados.</p>
                <ul className="social-links">
                    <li><a href="https://github.com/Vic-Fernandes07/siteDTI">Git</a></li>
                    <li><a href="dr3sst0impr3s@gmail.com">E-mail</a></li>
                    <li><a href="https://www.instagram.com/dressto_impreess?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">Instagram</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
