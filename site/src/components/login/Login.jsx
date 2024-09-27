
import React, { useState } from "react";
import { auth, provider, signInWithPopup } from "./firebase"; // Importa o Firebase
import { useNavigate } from "react-router-dom"; // Importa o useNavigate
import "./Login.css";
import google from "../../assets/google.svg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Inicializa o useNavigate

  // Função para lidar com o envio do formulário
  const handleSubmit = (event) => {
    event.preventDefault();

    // Lógica de autenticação simples (a ser substituída por autenticação real)
    if (email === "user@example.com" && password === "password123") {
      alert("Login realizado com sucesso!");
      setError("");
      navigate("/profile"); // Redireciona para a página de perfil
    } else {
      setError("Credenciais inválidas!");
    }
  };

  // Função para autenticar com Google
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result.user); // Informações do usuário autenticado
      alert(`Bem-vindo, ${result.user.displayName}!`);
      navigate("/profile"); // Redireciona para a página de perfil
    } catch (error) {
      console.error(error);
      setError("Erro ao autenticar com Google.");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {error && <p style={{ color: "red" }}>{error}</p>} {/* Exibe erro se houver */}

        <button type="submit">Entrar</button>
      </form>

      <hr />

      {/* Botão de login com Google */}
      <button className="google" onClick={handleGoogleLogin}>
        <img src={google} alt="Login com Google" style={{ width: "15px", marginRight: "8px" }} />
        Login com Google
      </button>
    </div>
  );
};

export default Login;
