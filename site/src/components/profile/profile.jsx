<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from 'react';
import './Profile.css';
=======
import React, { useState } from "react";
import "./profile.css";
>>>>>>> origin/vitoria

const Profile = () => {
<<<<<<< HEAD
  const availableStyles = ['Casual', 'Elegante', 'Esportivo', 'Streetwear', 'Sport Fino', 'Boho', 'Vintage'];
  const [isEditing, setIsEditing] = useState(false);
  const [errors, setErrors] = useState({ username: '', name: '' });
  const [userData, setUserData] = useState({
    username: 'mariasilvabr',
    bio: 'Explorando o mundo, uma foto de cada vez 📸🌍',
    name: 'Maria Silva',
    age: 28,
    location: 'São Paulo, Brasil',
    profession: 'Fotógrafa Freelancer',
    selectedStyles: ['Casual'], // Inicializa com um estilo selecionado
  });
=======
  const [bio, setBio] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [username, setUsername] = useState(""); // Estado para o nome de usuário
  const [error, setError] = useState(""); // Estado para mensagens de erro
>>>>>>> origin/vitoria

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateFields = () => {
    let valid = true;
    let newErrors = { username: '', name: '' };

    if (userData.username.trim().length < 3) {
      newErrors.username = 'O nome de usuário deve ter pelo menos 3 caracteres.';
      valid = false;
    }

    if (userData.name.trim().length < 3) {
      newErrors.name = 'O nome deve ter pelo menos 3 caracteres.';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSave = () => {
    if (validateFields()) {
      // Lógica para salvar os dados (ex: enviar para um backend)
      setIsEditing(false);
    }
  };

  const toggleStyle = (style) => {
    if (!isEditing) return; // Apenas altera o estilo se o modo de edição estiver ativo
    setUserData((prevState) => {
      const alreadySelected = prevState.selectedStyles.includes(style);
      const newStyles = alreadySelected
        ? prevState.selectedStyles.filter((s) => s !== style)
        : [...prevState.selectedStyles, style];
      return { ...prevState, selectedStyles: newStyles };
    });
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
      <div className="profile-header">
        <img src="/path/to/profile-pic.jpg" alt="Profile" className="profile-pic" />
        {isEditing ? (
          <>
            <input
              type="text"
              name="username"
              value={userData.username}
              onChange={handleChange}
              className="edit-input"
            />
            {errors.username && <p className="error-text">{errors.username}</p>}
          </>
        ) : (
          <h2>@{userData.username}</h2>
        )}
        {isEditing ? (
          <textarea
            name="bio"
            value={userData.bio}
            onChange={handleChange}
            className="edit-input"
          />
        ) : (
          <p className="profile-bio">
            <em>{userData.bio}</em>
          </p>
        )}
      </div>

      <div className="profile-info">
        <p>
          <strong>Nome:</strong>{' '}
          {isEditing ? (
            <>
              <input
                type="text"
                name="name"
                value={userData.name}
                onChange={handleChange}
                className="edit-input"
              />
              {errors.name && <p className="error-text">{errors.name}</p>}
            </>
          ) : (
            userData.name
          )}
        </p>
        <p>
          <strong>Idade:</strong>{' '}
          {isEditing ? (
            <input
              type="number"
              name="age"
              value={userData.age}
              onChange={handleChange}
              className="edit-input"
            />
          ) : (
            `${userData.age} anos`
          )}
        </p>
        <p>
          <strong>Localização:</strong>{' '}
          {isEditing ? (
            <input
              type="text"
              name="location"
              value={userData.location}
              onChange={handleChange}
              className="edit-input"
            />
          ) : (
            userData.location
          )}
        </p>
        <p>
          <strong>Profissão:</strong>{' '}
          {isEditing ? (
            <input
              type="text"
              name="profession"
              value={userData.profession}
              onChange={handleChange}
              className="edit-input"
            />
          ) : (
            userData.profession
          )}
        </p>
      </div>

      <div className="profile-style">
        <h3>Preferências de Estilo</h3>
        {isEditing ? (
          <div className="style-options">
            {availableStyles.map((style) => (
              <button
                key={style}
                type="button"
                className={`style-btn ${userData.selectedStyles.includes(style) ? 'selected' : ''}`}
                onClick={() => toggleStyle(style)}
              >
                {style}
              </button>
            ))}
          </div>
        ) : (
          <div className="selected-styles">
            {userData.selectedStyles.length > 0 ? (
              userData.selectedStyles.map((style) => (
                <span key={style} className="style-badge">
                  {style}
                </span>
              ))
            ) : (
              <p>Nenhum estilo selecionado.</p>
            )}
          </div>
        )}
      </div>

      {isEditing ? (
        <button className="save-profile-btn" onClick={handleSave}>
          Salvar
        </button>
      ) : (
        <button className="edit-profile-btn" onClick={() => setIsEditing(true)}>
          Editar Perfil
        </button>
      )}
<<<<<<< HEAD
    </div>
=======
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
<<<<<<< HEAD
      <button onClick={() => {/* Lógica para salvar o perfil */}}>
        Salvar Perfil
      </button>
    </div>    
>>>>>>> origin/vitoria
=======
      {error && <p className="error-message">{error}</p>}{" "}
      {/* Mensagem de erro */}
      <button onClick={handleSaveProfile}>Salvar Perfil</button>
    </div>
>>>>>>> origin/vitoria
  );
};

export default Profile;
=======
>>>>>>> origin/sophia
