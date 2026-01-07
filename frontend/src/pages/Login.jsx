import { useState } from "react";
import { loginApi } from "../api/authApi";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const data = await loginApi({ username, password });
      login(data.token, data.user);
      navigate("/dashboard");
    } catch (err) {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-6 rounded-lg shadow-md w-80 text-white">
        <h2 className="text-xl font-bold mb-4 text-center">Login</h2>

        {error && <p className="text-red-400 mb-2">{error}</p>}

        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="w-full p-2 rounded bg-gray-700 mb-3"
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full p-2 rounded bg-gray-700 mb-4"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-black p-2 rounded hover:bg-gray-700"
        >
          Login
        </button>
      </div>
    </div>
  );
}
