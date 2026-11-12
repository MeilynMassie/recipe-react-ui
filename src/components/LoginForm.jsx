import { useNavigate } from "react-router";
import { verifyChef } from '../services/AuthService'
import { useAuth } from '../context/AuthContext'

function LoginForm({setErrorMessage}) {
  const navigate = useNavigate();
  const { setChef } = useAuth();

  const handleSubmit = async (event) => {
    setErrorMessage('');
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const username = formData.get('login');
    const password = formData.get('password');
    try {
        const response = await verifyChef(
            username,
            password
        );
        setChef({
          username: username,
          token: response.token
        });
        navigate('/home', { replace: true });
    } catch (error) {
        setErrorMessage(error.message);
    }
  }

  return (
    <section className="auth-card">
      <h1>Login</h1>
      <form className="auth-form" onSubmit={handleSubmit}>
        <div>
          <label className="form-label" htmlFor="login">Username or email</label>
          <input className="form-control" id="login" name="login" autoComplete="username" required />
        </div>
        <div>
          <label className="form-label" htmlFor="login-password">Password</label>
          <input
            className="form-control"
            id="login-password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
          />
        </div>

        <button className="btn btn-primary w-100" type="submit">Sign In</button>
      </form>
    </section>
  )
}

export default LoginForm