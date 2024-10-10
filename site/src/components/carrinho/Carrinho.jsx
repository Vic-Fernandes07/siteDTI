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

const ProductPage = () => {
  const [cart, setCart] = useState([]);

  const handleBuyClick = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`Você adicionou: ${product.title} por ${product.price} ao carrinho. Obrigado por escolher a Dress To Impress!`);
  };

  const products = [
    {
      id: 'tenis-preto',
      title: 'Nike Dunk Low Retro',
      price: 'R$ 799,99',
      image: tenispreto,
    },
    {
      id: 'dunk-high-retro',
      title: 'Nike Dunk High Retro',
      price: 'R$ 899,99',
      image: tenisazul,
    },
    {
      id: 'dunk-low-se',
      title: 'Nike AL8 Feminino',
      price: 'R$ 849,99',
      image: tenisnike,
    },
    {
      id: 't-shirt',
      title: 'Palm Angeles t-shirt',
      price: 'R$ 395,90',
      image: camiseta,
    },
    {
      id: 'cargo-leve',
      title: 'Calça cargo leves Balenciaga',
      price: 'R$ 400,99',
      image: calca,
    },
    {
      id: 'moletom',
      title: 'Moletom masculino Fleece',
      price: 'R$ 500,90',
      image: moletom,
    },
    {
      id: 'pochete',
      title: 'Palm angels pack',
      price: 'R$ 259,99',
      image: pochete,
    },
  ];

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