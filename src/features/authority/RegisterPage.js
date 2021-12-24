export default function RegisterPage() {
  return (
    <form class="auth-register-page">
      <label htmlFor="username">Username</label>
      <input type="text" name="username" id="username"></input>
      <label htmlFor="password">Password</label>
      <input type="password" name="password" id="password"></input>
      <label htmlFor="retypePassword">Retype password</label>
      <input type="password" name="retypePassword" id="retypePassword"></input>
      <label htmlFor="emailAddress">Email address</label>
      <input type="text" name="emailAddress" id="emailAddress"></input>

      <input type="submit" value="register"/>
    </form>
  );
}
