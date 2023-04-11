import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Apps() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission

    // Store user registration information in local storage
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    setIsSubmitted(true); // Set isSubmitted to true to show popup message
    toast.success('Registration successful!');

  };

  const handleReset = () => {
    setUsername('');
    setEmail('');
    setPassword('');
    setIsSubmitted(false); // Set isSubmitted to false to show form again
  };

  return (
    <div className="container">
      {!isSubmitted && (
        <form onSubmit={handleSubmit} className="form-container">
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" value={username} onChange={(event) => setUsername(event.target.value)} className="form-control" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)} className="form-control" required />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" value={password} onChange={(event) => setPassword(event.target.value)} className="form-control" required />
          </div>

          <button type="submit" id="submit-btn" className="btn btn-primary">Submit</button>
        </form>
      )}

      {isSubmitted && (
        <div className="alert-container">
          <div className="alert-message animated bounceIn">
            <p>Registration successful!</p>
            <button id="close-btn" onClick={handleReset} className="btn btn-secondary">Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Apps;
