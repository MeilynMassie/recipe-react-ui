import { useState } from 'react';
import { useNavigate } from "react-router";
import { verifyUser } from '../services/AuthService'
import { useAuth } from '../context/AuthContext'

function LoginPage() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');
  const { setChef } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const username = formData.get('login');
    const password = formData.get('password');
    try {
        const token = await verifyUser(
            username,
            password
        );
        setChef({
          username: username,
          token: token
        });
        navigate('/home', { replace: true });
    } catch (error) {
        // Display red banner with incorrect whatever
        console.error(error.message);
        setErrorMessage(error.message);
    }
  }

  return (
    <main>
      <h1>Sign In</h1>
      {/* Message box */}
      {errorMessage && <p class="alert alert-danger" role="alert">{errorMessage}</p>}

      {/* Login Form */}
      <form onSubmit={handleSubmit}>
        <label>
          Username or email
          <input name="login" required />
        </label>
        <label>
          Password
          <input
            name="password"
            type="password"
            required
          />
        </label>

        <button type="submit">Sign In</button>
      </form>
    </main>
  )
}

export default LoginPage