import React from 'react';
import './Footer.css'; 

const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <p>&copy; 2024 Sua Empresa. Todos os direitos reservados.</p>
                <ul className="social-links">
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Twitter</a></li>
                    <li><a href="#">Instagram</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
