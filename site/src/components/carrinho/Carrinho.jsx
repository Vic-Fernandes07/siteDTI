// ProductPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../shop/Shop.css";
import tenispreto from "../../assets/tenispreto.png";
import tenisazul from "../../assets/tenisazul.png";
import tenisnike from "../../assets/tenisnike.png";
import calca from "../../assets/calca.png";
import camiseta from "../../assets/camisah.png";
import moletom from "../../assets/moletom.png";
import pochete from "../../assets/pochete.png";

function Carrinho({ itens = [], removerItem }) {
  const total = itens.reduce((acc, item) => acc + item.preco, 0);

  return (
    <div>
      <header className='mt-5'>
        <h1>Dress To Impress</h1>
        <p>Sua loja especializada em moda</p>
      </header>
      <main>
        <div className="product-grid">
          {products.map(product => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.title} className="product-image" />
              <div className="product-info">
                <div className="product-title">{product.title}</div>
                <div className="product-price">{product.price}</div>
              </div>
              <button
                className="buy-button"
                onClick={() => handleBuyClick(product)}
              >
                Comprar
              </button>
            </div>
          ))}
        </div>
        <Link to="/carrinho">
          <button className="view-cart-button">Ver Carrinho</button>
        </Link>
      </main>
    </div>
  );
};

export default ProductPage;
""