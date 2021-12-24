export default function SignInPage() {
  return (
    <div class="auth-sign-in-page">
      <label htmlFor="username">Username</label>
      <input type="text" name="username" id="username"></input>
      <label htmlFor="password">Password</label>
      <input type="password" name="password" id="password"></input>

      <input type="submit" value="Sign In"/>
    </div>
  );
}
