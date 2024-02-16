import React, { useState } from 'react';
import './Login.css' ;

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = () => {
      // Perform authentication
      // Example: make API call to authenticate user
      const authenticated = true; // Dummy value for demonstration
      if (authenticated) {
        onLogin(username);
      } else {
        alert('Authentication failed');
      }
    };
  
    return (
      <div className="login-container">
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleLogin}>Login</button>
      </div>
    );
  };

  export default Login;