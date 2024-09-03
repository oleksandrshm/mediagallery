import React, { useState } from 'react';
import axios from 'axios';
import './Register.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');

  const validatePassword = (password) => {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (password.length < minLength) {
      return `Пароль повинен містити не менше ${minLength} символів.`;
    }
    if (!hasUpperCase) {
      return 'Пароль повинен містити хоча б одну велику букву.';
    }
    if (!hasLowerCase) {
      return 'Пароль повинен містити хоча б одну малу букву.';
    }
    if (!hasDigit) {
      return 'Пароль повинен містити хоча б одну цифру.';
    }
    if (!hasSpecialChar) {
      return 'Пароль повинен містити хоча б один спеціальний символ.';
    }
    return '';
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const passwordError = validatePassword(password);
    if (passwordError) {
      setError(passwordError);
    } else if (password !== confirmPassword) {
      setError('Паролі не співпадають');
    } else {
      try {
        const response = await axios.post('http://localhost:27017/api/register', {
          username,
          email,
          password,
        });
        console.log(response.data);
        setError('');
      } catch (error) {
        console.error('Error registering user:', error); // Логування помилки
        setError('Error registering user');
      }
    }
  };

  return (
    <div className="register-container">
      <h2>Реєстрація</h2>
      <form onSubmit={handleRegister}>
        <div className="form-group">
          <label htmlFor="username">Ім'я</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Пароль</label>
          <div className="password-container">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? '👁️' : '👁️‍🗨️'}
            </button>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Підтвердити Пароль</label>
          <div className="password-container">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowConfirmPassword((prev) => !prev)}
            >
              {showConfirmPassword ? '👁️' : '👁️‍🗨️'}
            </button>
          </div>
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">Зареєструватися</button>
      </form>
    </div>
  );
};

export default Register;
