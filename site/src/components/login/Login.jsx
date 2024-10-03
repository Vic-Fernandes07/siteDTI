import React, { useState } from "react";
import {auth, provider, signInWithPopup, createUserWithEmailAndPassword,} from "./firebase"; 
import "./Login.css";
import google from "../../assets/google.svg";
import { Link, useHistory } from "react-router-dom"; // Importa useHistory

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isRegistering, setIsRegistering] = useState(false); 
  const history = useHistory(); 

  const handleLoginSubmit = (event) => {
    event.preventDefault();

  
    if (email === "user@example.com" && password === "password123") {
      alert("Login realizado com sucesso!");
      setError("");
    } else {
      setError("Credenciais inválidas!");
    }
  };

  const handleRegisterSubmit = (event) => {
    event.preventDefault();

    // Registrar usuário no Firebase
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Registro bem-sucedido
        alert(
          `Registro realizado com sucesso! Bem-vindo, ${userCredential.user.email}`
        );
        setIsRegistering(false); // Volta ao login após registro
      })
      .catch((error) => {
        console.error(error);
        setError(error.message); // Mostra a mensagem de erro
      });
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

  // Função para alternar entre login e registro
  const toggleRegister = () => {
    setIsRegistering((prev) => !prev);
    setError(""); // Limpa o erro ao alternar
  };

  return (
    <div className="login-container">
      <h2>{isRegistering ? "Registrar" : "Login"}</h2>
      <form onSubmit={isRegistering ? handleRegisterSubmit : handleLoginSubmit}>
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
        {error && <p style={{ color: "red" }}>{error}</p>}

        <p className="register">
          {isRegistering ? (
            <>
              Já possui uma conta?{" "}
              <span
                onClick={toggleRegister}
                style={{ cursor: "pointer", color: "blue" }}
              >
                Fazer login
              </span>
            </>
          ) : (
            <>
              Não possui uma conta?{" "}
              <span
                onClick={toggleRegister}
                style={{ cursor: "pointer", color: "blue" }}
              >
                Cadastrar-se
              </span>
            </>
          )}
        </p>
        <button type="submit">{isRegistering ? "Registrar" : "Entrar"}</button>
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
