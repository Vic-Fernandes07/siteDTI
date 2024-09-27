import React from "react";
import "./Home.css";
import Picture from "../../assets/dresstoimpress.png";
import { Link } from "react-router-dom";

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
        <div className="informacoes">
          <p className="p1">
            Já imaginou ter um guarda-roupa infinito onde você pode criar os looks
            <br />
            mais incríveis sem precisar tirar nada do armário? Com o Dress to
            Impress, isso é possível!
          </p>
          <h3 className="h1">O que você pode fazer:</h3>
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
          <h3 className="h2">Por que você vai amar:</h3>
          <p>
            ° Divertido e criativo: Solte sua imaginação e crie looks incríveis
            para qualquer ocasião.
            <br />
            ° Fácil de usar: A interface é intuitiva e fácil de navegar.
            <br />
            ° Sempre atualizado: Novas peças e tendências são adicionadas
            regularmente.
          </p>
          <h3 className="h3">Com o Dress to Impress, você pode:</h3>
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
      </div>
      
      {/* Box para o botão de login */}
      <div className="facalogin">
        <h2>Faça login ou crie sua conta aqui:</h2>
        <Link to="/login">
          <button className="login-button">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
