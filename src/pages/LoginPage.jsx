function LoginPage() {
  return (
    <main>
      <h1>Sign In</h1>
      <form>
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