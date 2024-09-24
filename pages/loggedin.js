export default function LoggedIn() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>You are logged in</h1>
      <a href="/.auth/logout" style={{ marginTop: "20px", display: "block" }}>Sign out</a>
    </div>
  );
}
