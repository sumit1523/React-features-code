import { useState } from "react";

function Login1() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission

    // Validate email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Please enter a valid email address");
      return; // Don't proceed if email is invalid
    } else {
      setEmailError(""); // Clear error if email is valid
    }

    // Validate password (you might want more robust validation)
    if (!password || password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      return; // Don't proceed if password is invalid
    } else {
      setPasswordError(""); // Clear error if password is valid
    }

    // If both email and passwordare valid, log the values
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailError && <p style={{ color: "red" }}>{emailError}</p>}
      </div>

      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}
      </div>

      <button type="submit">Login</button>
    </form>
  );
}

export default Login1;
