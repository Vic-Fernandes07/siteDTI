import React, { useState } from 'react';
import './Profile.css';

const Profile = () => {
  const availableStyles = ['Casual', 'Elegante', 'Esportivo', 'Streetwear', 'Sport Fino', 'Boho', 'Vintage'];
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    username: 'Username',
    bio: 'Biografia',
    name: 'Nome',
    age: 28,
    location: 'Localização',
    profession: 'Profissão',
    style: 'Casual' // Defina o estilo inicial
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    // Lógica para salvar os dados (ex: enviar para um backend)
    setIsEditing(false);
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img src="/path/to/profile-pic.jpg" alt="Profile" className="profile-pic" />
        {isEditing ? (
          <input
            type="text"
            name="username"
            value={userData.username}
            onChange={handleChange}
            className="edit-input"
          />
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
            <input
              type="text"
              name="name"
              value={userData.name}
              onChange={handleChange}
              className="edit-input"
            />
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
        <h3>Preferência de Estilo</h3>
        {isEditing ? (
          <select
            name="style"
            value={userData.style}
            onChange={handleChange}
            className="edit-input"
          >
            {availableStyles.map((style, index) => (
              <option key={index} value={style}>
                {style}
              </option>
            ))}
          </select>
        ) : (
          <p>
            <strong>Estilo:</strong> {userData.style}
          </p>
        )}
      </div>

      {isEditing ? (
        <button className="save-profile-btn" onClick={handleSave}>
          Salvar
        </button>
      ) : (
        <button className="edit-profile-btn" onClick={toggleEditing}>
          Editar Perfil
        </button>
      )}
    </div>
  );
};

export default Profile;
