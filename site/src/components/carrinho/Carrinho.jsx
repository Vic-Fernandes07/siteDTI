import React from "react";
import "./Carrinho.css";

function Carrinho({ itens, removerItem }) {
  const total = itens.reduce((acc, item) => acc + item.preco, 0);

  return (
    <div className="carrinho-container">
      <h2>Carrinho de Compras</h2>
      {itens.length === 0 ? (
        <p>O carrinho está vazio.</p>
      ) : (
        <ul className="lista-itens">
          {itens.map((item, index) => (
            <li key={index} className="item-carrinho">
              <span>{item.nome}</span>
              <span>R${item.preco.toFixed(2)}</span>
              <button 
                className="btn btn-danger btn-remover"
                onClick={() => removerItem(index)}
              >
                Remover
              </button>
            </li>
          ))}
        </ul>
      )}
      <div className="total">
        <h3>Total: R${total.toFixed(2)}</h3>
      </div>
    </div>
  );
}

export default Carrinho;
