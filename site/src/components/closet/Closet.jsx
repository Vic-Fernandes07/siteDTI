import React, { useState } from 'react';  
import './Closet.css';
import camisasIcon from '../../assets/camiseta.svg';
import calcasIcon from '../../assets/calcas.svg';
import sapatosIcon from '../../assets/sapatos.svg';
import acessoriosIcon from '../../assets/acessorios.svg';

const Closet = () => {
  const [clothes, setClothes] = useState([]); 
  const [imagePreview, setImagePreview] = useState(null); 
  const [category, setCategory] = useState(''); 
  const [openFolders, setOpenFolders] = useState({}); 
  const [dropdownOpen, setDropdownOpen] = useState(false); 

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddClothes = () => {
    if (imagePreview && category) {
      setClothes([...clothes, { image: imagePreview, category }]);
      setImagePreview(null); 
      setCategory(''); 
    } else {
      alert('Por favor, carregue uma imagem e selecione uma categoria.');
    }
  };

  const handleRemoveClothes = (index) => {
    const updatedClothes = clothes.filter((_, i) => i !== index);
    setClothes(updatedClothes); 
  };

  const toggleFolder = (category) => {
    setOpenFolders((prevOpenFolders) => ({
      ...prevOpenFolders,
      [category]: !prevOpenFolders[category],
    }));
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen); 
  };

  const handleCategorySelect = (category) => {
    setCategory(category); 
    setDropdownOpen(false);
  };

  const categoryOptions = [
    { label: 'Camisas', value: 'Camisas', icon: camisasIcon },
    { label: 'Calças', value: 'Calças', icon: calcasIcon },
    { label: 'Sapatos', value: 'Sapatos', icon: sapatosIcon },
    { label: 'Acessórios', value: 'Acessórios', icon: acessoriosIcon },
  ];

  return (
    <div className="closet-box">
      <div className="closet-container">
        <h1>Meu Closet Virtual</h1>
        
        <div className="upload-section">
          <input 
            type="file" 
            id="file-input"
            onChange={handleImageChange} 
            style={{ display: 'none' }} 
          />
          <label htmlFor="file-input" className="file-label">Selecionar Roupa</label>
          
          <div className="custom-select">
            <div className="selected-category" onClick={toggleDropdown}>
              {category ? (
                <>
                  <img
                    src={categoryOptions.find(opt => opt.value === category).icon}
                    alt={category}
                    className="category-icon"
                  />
                  <span>{category}</span>
                </>
              ) : (
                <span>Selecione uma categoria</span>
              )}
            </div>
            {dropdownOpen && (
              <ul className="dropdown">
                {categoryOptions.map((option, index) => (
                  <li
                    key={index}
                    onClick={() => handleCategorySelect(option.value)}
                    className="dropdown-option"
                  >
                    <img src={option.icon} alt={option.label} className="category-icon" />
                    <span>{option.label}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
          
          <button onClick={handleAddClothes}>Adicionar ao Closet</button>
        </div>

        {/* Seção de pré-visualização */}
        {imagePreview && (
          <div className="preview-section">
            <h3>Pré-visualização:</h3>
            <img src={imagePreview} alt="Pré-visualização da roupa" className="image-preview" />
          </div>
        )}

        <div className="folders-list">
          {categoryOptions.map((categoryOption, index) => (
            <div key={index} className="folder">
              <div className="folder-header" onClick={() => toggleFolder(categoryOption.value)}>
                <img src={categoryOption.icon} alt={categoryOption.label} className="folder-icon" />
                <span>{categoryOption.label}</span>
              </div>
              
              {openFolders[categoryOption.value] && (
                <div className="folder-content">
                  {clothes
                    .filter(clothing => clothing.category === categoryOption.value)
                    .map((clothing, idx) => (
                      <div key={idx} className="clothing-item">
                        <img src={clothing.image} alt={`Roupa ${idx}`} className="clothing-image" />
                        <button onClick={() => handleRemoveClothes(idx)} className="remove-button">
                          Excluir
                        </button>
                      </div>
                    ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Closet;
