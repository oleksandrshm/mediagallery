import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogin = () => {
    navigate('/login');
  };

  const handleRegister = () => {
    navigate('/register');
  };

  const toggleSidebar = () => {
    setSidebarOpen(prevState => !prevState);
  };

  return (
    <div className="home-container">
      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <a href="#home">Головна</a>
        <a href="#profile">Профіль</a>
        <a href="#messages">Повідомлення</a>
        <a href="#settings">Налаштування</a>
      </div>
      <div className="header">
        <button className={`menu-button ${sidebarOpen ? 'active' : ''}`} onClick={toggleSidebar}>
          &#9776;
        </button>
        <div className="nav-buttons">
          <button className="nav-button" onClick={handleLogin}>Увійти</button>
          <button className="nav-button" onClick={handleRegister}>Зареєструватися</button>
        </div>
      </div>
      <div className="content">
        <h1>Ласкаво просимо до MediaGallery!</h1>
        <p className="description">MediaGallery - це соціальна мережа, де ви можете ділитися своїми фото та відео з друзями та родиною. Приєднуйтесь до нас сьогодні, щоб зберігати свої спогади та ділитися ними з тими, кого ви любите.</p>
        <div className="features">
          <div className="feature">
            <img src="/images/share.png" alt="Share" className="feature-image" />
            <h2>Діліться своїми моментами</h2>
            <p>Завантажуйте свої фото та відео, діліться ними з друзями та родиною.</p>
          </div>
          <div className="feature">
            <img src="/images/album.png" alt="Album" className="feature-image" />
            <h2>Створюйте альбоми</h2>
            <p>Організуйте свої фото та відео у тематичні альбоми для зручності.</p>
          </div>
          <div className="feature">
            <img src="/images/follow.png" alt="Follow" className="feature-image" />
            <h2>Слідкуйте за оновленнями друзів</h2>
            <p>Переглядайте нові публікації та коментуйте їх.</p>
          </div>
        </div>
        <div className="social-media-info">
        <h2>Соціальні мережі</h2>
        <p>Тут ви можете знайти інформацію про наші соціальні мережі:</p>
        <ul>
          <li>Facebook: <a href="https://facebook.com">facebook.com</a></li>
          <li>Twitter: <a href="https://twitter.com">twitter.com</a></li>
          <li>Instagram: <a href="https://instagram.com">instagram.com</a></li>
          <li>LinkedIn: <a href="https://linkedin.com">linkedin.com</a></li>
        </ul>
      </div>
      </div>
    </div>
  );
};

export default Home;
