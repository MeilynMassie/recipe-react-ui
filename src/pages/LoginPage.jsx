import { verifyUser } from '../services/AuthService'

function LoginPage() {
  const handleSubmit = async (event) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    try {
        const user = await verifyUser(
            formData.get('login'),
            formData.get('password')
        )

        console.log('Login successful:', user)

    } catch (error) {
        console.error(error.message)
    }
  }

  return (
    <main>
      <h1>Sign In</h1>
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