import React from "react";
import "./Home.css";
import Picture from "../../assets/dresstoimpress.png";
import Login from "../login/Login.jsx"
import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";


const Home = () => {
  return (
    <div>
      <div>
        <img className="picture" src={Picture} alt="" />
        <br />
        <h2 className="texto">
          Bem-vindos!
          <br />A Dress To Impress fica feliz em te receber👋
        </h2>
        <p>
          Já imaginou ter um guarda-roupa infinito onde você pode criar os looks
          mais incríveis sem precisar tirar nada do armário? Com o Dress to
          Impress, isso é possível!
        </p>
        <h3>O que você pode fazer:</h3>
        <p>
          ° Criar looks incríveis: Misture e combine roupas, acessórios e
          maquiagens para criar looks únicos e arrasadores!
          <br />
          ° Descobrir novas tendências: Inspire-se nos looks mais modernos e
          descubra o que está na moda.
          <br />
          ° Compartilhar seus estilos: Mostre seus looks para seus amigos e veja
          o que eles acham!
        </p>
        <h3>Por que você vai amar:</h3>
        <p>
          ° Divertido e criativo: Solte sua imaginação e crie looks incríveis
          para qualquer ocasião.
          <br />
          ° Fácil de usar: A interface é intuitiva e fácil de navegar.
          <br />
        ° Sempre atualizado: Novas peças e tendências são adicionadas
          regularmente.
        </p>
        <h3>Com o Dress to Impress, você pode:</h3>
        <p>
          ° Experimentar novos estilos: Descubra qual estilo combina mais com
          você.
          <br />
          ° Planejar seus looks: Crie looks para diferentes ocasiões, como
          festas, escola ou um dia casual.
          <br />
           ° Se divertir: A moda é uma forma de expressão, então divirta-se
          experimentando e criando!
        </p>
      </div>
      <div>
        <h2>
            Faça login ou crie sua conta aqui:
        </h2>
  </div>
  <div>
    <Link to={"login"}>
    <button>LOGIN</button>
    </Link>
    
  </div>
      </div>
    
  );
};

export default Home;
