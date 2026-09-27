import { useState } from "react";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones
    if (!email.trim() || !password.trim() || !confirmPassword.trim()) {
      alert("Todos los campos son obligatorios.");
      return;
    }

    if (password.length < 6) {
      alert("El password debe tener al menos 6 caracteres.");
      return;
    }

    if (password !== confirmPassword) {
      alert("El password y la confirmación del password deben ser iguales.");
      return;
    }

    alert("¡Registro exitoso!");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="container my-5" style={{ maxWidth: "500px" }}>
      <h2 className="mb-4 text-center fw-bold">Register</h2>
      <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-col control form-control"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary w-100 mt-2">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;