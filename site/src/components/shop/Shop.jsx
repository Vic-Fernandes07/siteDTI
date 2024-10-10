// ProductPage.jsx
import React from 'react';
import "./Shop.css";
import tenispreto from "../../assets/tenispreto.png"
import tenisazul from "../../assets/tenisazul.png"
import tenisnike from "../../assets/tenisnike.png"
      
const ProductPage = () => {
  const handleBuyClick = (productName, productPrice) => {
    alert(`Você está comprando: ${productName} por ${productPrice}. Obrigado por escolher a Dress To Impress!`);
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
      ];
      

  return (
    <div>
      <header className='mt-5'>
        <h1>Dress To Impress</h1>
        <p>Sua loja especializada em moda Dress To Impress</p>
      </header>
      <main>
        <div className="product-grid ">
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
