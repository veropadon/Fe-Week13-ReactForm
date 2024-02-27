import React from 'react';
import './App.css'; 



function LoginForm() {
  return (
    <div className="container"> {/* Use the container class to center the form */}
      <div className="login-form">
        <h3>Company Name</h3>
        <form>
          <div>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit">Log In</button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
