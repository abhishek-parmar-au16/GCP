// Login.js

import React ,{useState} from 'react';
import "./Login.css"

function Login({ handlePageChange }) {
    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Your login logic here
    if (username === 'admin' && password === 'password') {
      handlePageChange('upload');
    } else {
      setError('Invalid username or password');
    }
  };
//   const handleLogin = () => {
//     // Your login logic here
//     handlePageChange('upload');
//   };

  return (
      <div className="login-container">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      {error && <p className="error-message">{error}</p>}
    </div>
    
  );
}

export default Login;
