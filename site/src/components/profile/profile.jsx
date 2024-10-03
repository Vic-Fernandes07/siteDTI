import React, { useState } from "react";
import "./Profile.css"; 

const Profile = () => {
  const [bio, setBio] = useState("");
  const [profilePic, setProfilePic] = useState("");

  // Função para lidar com a atualização da biografia
  const handleBioChange = (event) => {
    setBio(event.target.value);
  };

  // Função para lidar com a atualização da foto de perfil
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

  return (
    <div className="profile-container">
      <h2>Meu Perfil</h2>
      {profilePic && <img src={profilePic} alt="Perfil" className="profile-pic" />}
      <input type="file" onChange={handleProfilePicChange} />
      <div>
        <label htmlFor="bio">Biografia:</label>
        <textarea
          id="bio"
          value={bio}
          onChange={handleBioChange}
          placeholder="Escreva sua biografia aqui..."
        />
      </div>
    </div>
  );
};

export default Profile;
