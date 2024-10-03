import React, { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";  
import Login from "./components/login/Login";
import Carrinho from "./components/carrinho/Carrinho";

function App() {
  const [carrinho, setCarrinho] = useState([]);

  const adicionarAoCarrinho = (produto) => {
    setCarrinho([...carrinho, produto]);
  };

  const removerItem = (index) => {
    const novoCarrinho = carrinho.filter((_, i) => i !== index);
    setCarrinho(novoCarrinho);
  };

  return (
    <div>
      <Header />
      <Outlet />

      <Footer />
    </div>
  );
}

export default App;
