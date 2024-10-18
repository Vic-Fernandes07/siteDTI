// src/App.jsx
import { useState } from 'react';
import './Perfil.css';

function Perfil() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <nav className="navbar">
        <a href="/" className="logo">Instagram</a>
        <button className="hamburger" onClick={toggleMenu}>☰</button>
      </nav>

      <div className={`menu ${menuOpen ? 'open' : ''}`}>
        <ul className="menu-list">
          <li className="menu-item"><a href="/">Home</a></li>
          <li className="menu-item"><a href="/explore">Explore</a></li>
          <li className="menu-item"><a href="/direct/inbox">Messages</a></li>
          <li className="menu-item"><a href="/accounts/activity">Notifications</a></li>
          <li className="menu-item"><a href="/create/select">Create</a></li>
          <li className="menu-item"><a href="/accounts/edit">Edit Profile</a></li>
          <li className="menu-item"><a href="/accounts/logout">Log Out</a></li>
        </ul>
      </div>

      {menuOpen && <div className="overlay" onClick={toggleMenu}></div>}

      <Profile />
      <Gallery />
    </div>
  );
}

function Profile() {
  return (
    <header className="profile-header">
      <div className="profile-picture-container">
        <img
          src="https://picsum.photos/seed/gamerguy_chris_pompadour_2023/400"
          alt="Christopher Galli: a tall man with reddish-brown hair styled in a pompadour, green eyes, and a scruffy beard."
          className="profile-picture"
          width="200"
          height="200"
        />
      </div>
      <div className="profile-info">
        <div className="username-container">
          <h1 className="username">gamerguy_chris</h1>
          <a href="/accounts/edit" className="edit-profile">Edit Profile</a>
        </div>
        <div className="stats">
          <Stat label="posts" count="203" />
          <Stat label="followers" count="5.2k" />
          <Stat label="following" count="1.1k" />
        </div>
        <div className="fullname">Christopher Galli</div>
        <div className="bio">
          - Hardcore gamer<br />
          - Competitive Overwatch player (Cassidy main all the way)<br />
          - Hobbyist game dev<br />
          - Saxophone player<br />
          - Beer aficionado<br /><br />
          My look:<br />
          Height: 6'1" (I love towering over my competition, hah)<br />
          Weight: 210lbs<br />
          Body type: Tall/average<br />
          Hair color: Reddish brown<br />
          Eye color: Green<br /><br />
          Just a tall and slightly thick dude with a scruffy beard and medium-length hair. I’m trying out a pompadour look right now.<br /><br />
          You can usually spot me wearing my signature green bomber jacket, grey oxford sneakers, and brown joggers.<br />
        </div>
        <a href="https://www.gamerguychris.com" className="website" target="_blank" rel="noreferrer">gamerguychris.com</a>
      </div>
    </header>
  );
}

function Stat({ label, count }) {
  return (
    <div className="stat">
      <span className="stat-count">{count}</span>
      <span className="stat-label"> {label}</span>
    </div>
  );
}

function Gallery() {
  const images = [
    {
      src: "https://picsum.photos/seed/chris_casual_outfit_2023/300",
      alt: "Christopher showing off his signature look."
    },
    {
      src: "https://picsum.photos/seed/chris_overwatch_2023/300",
      alt: "Christopher intensely focused on playing Overwatch."
    },
    // Add more images here...
  ];

  return (
    <main className="gallery">
      {images.map((img, index) => (
        <div className="gallery-item" key={index}>
          <img src={img.src} alt={img.alt} />
        </div>
      ))}
    </main>
  );
}

export default Perfil;
