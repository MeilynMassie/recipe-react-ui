import { useNavigate } from "react-router";
import { createChef } from '../services/AuthService'
import { useAuth } from '../context/AuthContext'

function RegisterForm({setErrorMessage}) {
  const navigate = useNavigate();
  const { setChef } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const username = formData.get('username');
    const email = formData.get('email');
    const password = formData.get('password');
    try {
        const response = await createChef(
            username,
            email,
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
      <h1>Register</h1>
      <form className="auth-form" onSubmit={handleSubmit}>
        <div>
          <label className="form-label" htmlFor="register-username">Chef&apos;s Name</label>
          <input className="form-control" id="register-username" name="username" autoComplete="username" required />
        </div>
        <div>
          <label className="form-label" htmlFor="register-email">Email</label>
          <input className="form-control" id="register-email" name="email" type="email" autoComplete="email" />
        </div>
        <div>
          <label className="form-label" htmlFor="register-password">Password</label>
          <input
            className="form-control"
            id="register-password"
            name="password"
            type="password"
            autoComplete="new-password"
            required
          />
        </div>

        <button className="btn btn-primary w-100" type="submit">Create Account</button>
      </form>
    </section>
  )
}

export default RegisterForm