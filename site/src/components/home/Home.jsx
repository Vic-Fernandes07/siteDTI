import React from "react";
import "./Home.css";
import Picture from "../../assets/dresstoimpress.png";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <>
      <div className="row  m-0 p-0 text-light divHome">
        <div className="col  m-0 p-0 ">
          <div className="divHomeTitulo">
            <img className="img-fluid" src={Picture} alt="" />
            <br />
            <h2 className="text-center mt-3">
              Bem-vindos!
              <br />A Dress To Impress fica feliz em te receber👋
            </h2> 
          </div>
        </div>
      </div>
      <div className="row  m-0 p-0  text-light">
        <div className="col-12 col-md-6">
          <div className="informacoes">
            <p className="p1">
              Já imaginou ter um guarda-roupa infinito onde você pode criar os
              looks mais incríveis sem precisar tirar nada do armário? Com o
              Dress to Impress, isso é possível!
            </p>

            <h3 className="h3 my-3">O que você pode fazer:</h3>
            <ul className="lead">
              <li>
                Criar looks incríveis: Misture e combine roupas, acessórios e
                maquiagens para criar looks únicos e arrasadores!
              </li>
              <li>
                Descobrir novas tendências: Inspire-se nos looks mais modernos e
                descubra o que está na moda.
              </li>
              <li>
                Compartilhar seus estilos: Mostre seus looks para seus amigos e
                veja o que eles acham!
              </li>
            </ul>

            <h3 className="h3 my-3">Por que você vai amar:</h3>
            <ul className="lead">
              <li>
                Divertido e criativo: Solte sua imaginação e crie looks
                incríveis para qualquer ocasião.
              </li>
              <li>
                Fácil de usar: A interface é intuitiva e fácil de navegar.
              </li>
              <li>
                Sempre atualizado: Novas peças e tendências são adicionadas
                regularmente.
              </li>
            </ul>

            <h3 className="h3">Com o Dress to Impress, você pode:</h3>
            <ul className="lead">
              <li>
                Experimentar novos estilos: Descubra qual estilo combina mais
                com você.
              </li>
              <li>
                Planejar seus looks: Crie looks para diferentes ocasiões, como
                festas, escola ou um dia casual.
              </li>
              <li>
                Se divertir: A moda é uma forma de expressão, então divirta-se
                experimentando e criando!
              </li>
            </ul>
          </div>
        </div>
        <div className="col-12 col-md"></div>
        <div className="col-12 col-md-5">
          {/* Box para o botão de login */}
          <div className="facalogin">
            <h3>Faça login ou crie sua conta aqui:</h3>
            <Link to="/login">
              <button className="login-button">Login</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
