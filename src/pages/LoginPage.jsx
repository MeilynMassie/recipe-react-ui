import { useState } from 'react';
import  LoginForm  from '../components/LoginForm'
import  RegisterForm  from '../components/RegisterForm'
import '../styles/auth-forms.css'


function LoginPage() {
  const [errorMessage, setErrorMessage] = useState('');
  const [pageMode, setPageMode] = useState('');

  return (
    <main className="auth-page">
      <div className="auth-content">
        {errorMessage && <div className="alert alert-danger" role="alert">{errorMessage}</div>}

        {pageMode === '' && (
          <section className="auth-card auth-choice">
            <h1>Welcome to SaltyChef</h1>
            <p className="text-muted mb-4">Sign in or create an account to get cooking.</p>
            <div className="auth-actions">
              <button className="btn btn-primary" onClick={() => {
                setPageMode('login');
                setErrorMessage('');
              }}>
                Login
              </button>
              <button className="btn btn-outline-primary" onClick={() => {
                setPageMode('register');
                setErrorMessage('');
              }}>
                Register
              </button>
            </div>
          </section>
        )}

        {pageMode === 'login' && (
          <LoginForm setErrorMessage={setErrorMessage} />
        )}

        {pageMode === 'register' && (
          <RegisterForm setErrorMessage={setErrorMessage} />
        )}
      </div>
    </main>
  )
}

export default LoginPage