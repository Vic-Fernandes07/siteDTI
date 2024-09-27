import React, { useState } from "react";
import "./Lookbook.css"; // Arquivo de estilos para o Lookbook

const Lookbook = () => {
  const [photos, setPhotos] = useState([]);
  const [image, setImage] = useState("");

  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (image) {
      setPhotos([...photos, image]);
      setImage(""); // Limpa o input após o envio
    }
  };

  const handleDelete = (index) => {
    const updatedPhotos = photos.filter((_, i) => i !== index);
    setPhotos(updatedPhotos);
  };

  return (
    <div className="lookbook">
      <h1>Lookbook</h1>
      <div className="lookbook-box">
        <form onSubmit={handleSubmit} className="upload-form">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
          <button type="submit">Postar Look</button>
        </form>
        <div className="photo-feed">
          {photos.map((photo, index) => (
            <div className="photo-item" key={index}>
              <img src={photo} alt={`Look ${index + 1}`} />
              <button className="delete-button" onClick={() => handleDelete(index)}>
                Excluir
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Lookbook;
