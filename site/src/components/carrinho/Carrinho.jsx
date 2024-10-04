import React from "react";
import "./Carrinho.css";

function Carrinho({ itens, removerItem }) {
  const total = itens.reduce((acc, item) => acc + item.preco, 0);

  return (
    <div>
      <h2>Carrinho de Compras</h2>
      {itens.length === 0 ? (
        <p>O carrinho está vazio.</p>
      ) : (
        <ul>
          {itens.map((item, index) => (
            <li key={index}>
              {item.nome} - R${item.preco.toFixed(2)}
              <button onClick={() => removerItem(index)}>Remover</button>
            </li>
          ))}
        </ul>
      )}
      <div>
        <h3>Total: R${total.toFixed(2)}</h3>
      </div>
    </div>
  );
}

export default Carrinho;
