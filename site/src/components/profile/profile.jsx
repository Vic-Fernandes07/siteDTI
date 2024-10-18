import React, { useState } from "react";
import "./profile.css";

const Profile = () => {
  const [bio, setBio] = useState("");
  const [profilePic, setProfilePic] = useState("");

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

  const handleLogout = () => {
    // Lógica de logout aqui (exemplo genérico)
    console.log("Usuário saiu");
    // Aqui você pode redirecionar o usuário para a página de login, por exemplo
    // window.location.href = "/login";
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
        <label htmlFor="bio">Biografia:</label>
        <textarea
          id="bio"
          value={bio}
          onChange={handleBioChange}
          placeholder="Escreva sua biografia aqui..."
        />
      </div>
      <button onClick={() => {/* Lógica para salvar o perfil */}}>
        Salvar Perfil
      </button>
    </div>    
  );
};

export default Profile;
