import React from "react";

function Produto({ nome, preco, adicionarAoCarrinho }) {
  return (
    <div className="produto">
      <h2>{nome}</h2>
      <p>Preço: R${preco}</p>
      <button onClick={() => adicionarAoCarrinho({ nome, preco })}>
        Adicionar ao Carrinho
      </button>
    </div>
  );
}

export default Produto;
