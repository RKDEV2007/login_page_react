import './App.css';
import { useState } from 'react';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedUsername = username.trim();
    const trimmedPassword = password.trim();

    if (trimmedUsername === '' || trimmedPassword === '') {
      setError('Please fill in all fields.');
      return;
    }

    if (trimmedUsername === 'admin' && trimmedPassword === 'admin') {
      setRole('admin');
      setError('');
      return;
    }

    if (trimmedUsername === 'guest' && trimmedPassword === 'guest') {
      setRole('user');
      setError('');
      return;
    }

    setError('Invalid username or password.');
  };

  const handleLogout = () => {
    setRole('');
    setUsername('');
    setPassword('');
    setError('');
  };

  if (role === 'admin') {
    return (
      <div className="app">
        <div className="result-card">
          <h1 className="result-title">Welcome, Admin</h1>
          <p className="result-text">Who are we banning today?</p>
          <button className="button" type="button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    );
  }

  if (role === 'user') {
    return (
      <div className="app">
        <div className="result-card">
          <h1 className="result-title">Welcome, Guest</h1>
          <p className="result-text">You are not an admin. Access is limited.</p>
          <button className="button" type="button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <div className="login-container">
        <h1 className="title">Login Form</h1>
        <p className="subtitle">Use admin/admin or guest/guest</p>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username" className="label">
              Username
            </label>
            <input
              className="input"
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="label">
              Password
            </label>
            <input
              className="input"
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && <p className="error-text">{error}</p>}

          <button className="button" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;