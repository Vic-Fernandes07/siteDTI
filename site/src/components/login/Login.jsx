import React, { useState } from "react";
import { auth, provider, signInWithPopup } from "./firebase"; // Importa o Firebase
import "./Login.css";
import google from "../../assets/google.svg";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email === "user@example.com" && password === "password123") {
      alert("Login realizado com sucesso!");
      setError("");
    } else {
      setError("Credenciais inválidas!");
    }
  };

  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user); // Informações do usuário autenticado
        alert(`Bem-vindo, ${result.user.displayName}!`);
      })
      .catch((error) => {
        console.error(error);
        setError("Erro ao autenticar com Google.");
      });
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
        {error && <p style={{ color: "red" }}>{error}</p>}{" "}
      
        <p className="register">
          Não possui uma conta? <Link to="/register">Cadastrar-se</Link>
        </p>
        <button type="submit">Entrar</button>
      </form>

      <hr />
      <button className="google" onClick={handleGoogleLogin}>
        <img
          src={google}
          alt="Login com Google"
          style={{ width: "15px", marginRight: "8px" }}
        />
        Login com Google
      </button>
    </div>
  );
};

export default Login;
