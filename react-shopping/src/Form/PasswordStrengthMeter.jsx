import { useState } from "react";

export function PasswordStrengthMeter() {
  const [password, setPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("");

  function handlePasswordChange(event) {
    setPassword(event.target.value);
    setPasswordStrength(checkPasswordStrength(event.target.value));
  }

  function checkPasswordStrength(password) {
    if (password.length < 4) {
      return "Poor Password";
    } else if (password.length >= 4 && password.length <= 15 && !password.match(/[A-Z]/)) {
      return "Weak Password";
    } else if (password.length >= 4 && password.length <= 15 && password.match(/[A-Z]/)) {
      return "Strong Password";
    }
  }

  return (
    <div>
      <label style={{fontWeight:'bolder'}}>Password:</label>
      <input type="password" value={password} onChange={handlePasswordChange} />
      <span>{passwordStrength}</span>
    </div>
  );
}
