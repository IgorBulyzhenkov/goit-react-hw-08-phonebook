function Login() {
  return (
    <form>
      <label>
        Email
        <input type="mail" required />
      </label>
      <label>
        Password
        <input type="password" required />
      </label>
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
