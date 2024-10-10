// ProductPage.jsx
import React from 'react';
import "./Shop.css";
import tenispreto from "../../assets/tenispreto.png"
      
const ProductPage = () => {
  const handleBuyClick = (productName, productPrice) => {
    alert(`Você está comprando: ${productName} por ${productPrice}. Obrigado por escolher a CAIXA6!`);
  };

  const products = [
    {            
  //             id: 'dunk-low-retro',
  //     title: 'Nike Dunk Low Retro',
  //     price: 'R$ 799,99',
  //     img: 'tenispreto.png';
  //   },
  //   {
  //     id: 'dunk-high-retro',
  //     title: 'Nike Dunk High Retro',
  //     price: 'R$ 899,99',
  //     image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/5e7687f1-c13e-4bac-8ffa-a6f863ae9157/dunk-high-retro-mens-shoe-dTVTCk.png',
  //   },
  //   {
  //     id: 'dunk-low-se',
  //     title: 'Nike Dunk Low SE',
  //     price: 'R$ 849,99',
  //     image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/32e90c36-d915-4805-894a-c9802a268719/dunk-low-se-mens-shoes-RRcr20.png',
    },
   ];

  return (
    <div>
      <header>
        <h1>CAIXA6</h1>
        <p>Sua loja especializada em moda Dress To Impress</p>
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
                onClick={() => handleBuyClick(product.title, product.price)}
              >
                Comprar
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ProductPage;
