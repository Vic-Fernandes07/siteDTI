import React, { useState } from "react";
import "./profile.css";

const Profile = () => {
  const [bio, setBio] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [username, setUsername] = useState(""); // Estado para o nome de usuário
  const [error, setError] = useState(""); // Estado para mensagens de erro

  const handleBioChange = (event) => {
    setBio(event.target.value);
  };

  const handleProfilePicChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const validateUsername = (username) => {
    const regex = /^[a-zA-Z0-9_.-]+$/; // Regex para validar o nome de usuário
    return regex.test(username);
  };

  const handleSaveProfile = () => {
    if (!validateUsername(username)) {
      setError(
        "O nome de usuário deve conter apenas letras, números e os sinais _ , - e ."
      );
      return;
    }
    setError(""); // Limpa a mensagem de erro se a validação passar
    // Lógica para salvar o perfil (exemplo genérico)
    console.log("Perfil salvo:", { username, bio, profilePic });
  };

  const handleLogout = () => {
    console.log("Usuário saiu");
    // Redirecionar o usuário para a página de login, se necessário
  };

  return (
    <div className="profile-container">
      <h2>Meu Perfil</h2>
      {profilePic && (
        <div className="preview-section">
          <img src={profilePic} alt="Perfil" className="image-preview" />
        </div>
      )}
      <div className="form-group">
        <label htmlFor="profilePic">Carregar Foto de Perfil:</label>
        <input type="file" id="profilePic" onChange={handleProfilePicChange} />
      </div>
      <div className="form-group">
        <label htmlFor="username">Nome de Usuário:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
          placeholder="Escolha um nome de usuário..."
        />
      </div>
      <div className="form-group">
        <label htmlFor="bio">Biografia:</label>
        <textarea
          id="bio"
          value={bio}
          onChange={handleBioChange}
          placeholder="Escreva sua biografia aqui..."
        />
      </div>
      {error && <p className="error-message">{error}</p>}{" "}
      {/* Mensagem de erro */}
      <button onClick={handleSaveProfile}>Salvar Perfil</button>
    </div>
  );
};

export default Profile;
