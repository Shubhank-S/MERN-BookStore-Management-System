import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import "./Login.css";

function Login({ setRolee }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("admin");

  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const json = await axios.post(`http://localhost:8080/admin/login`, {
      username,
      password,
      role,
    });
    console.log(json);
    if (json.data.success && json.data.role === "admin") {
      setRolee("admin");
      toast.success(json.data.message);
      navigate("/dashboard");
    } else if (json.data.success && json.data.role === "student") {
      setRolee("student");
      toast.success(json.data.message);
      navigate("/books");
    }else{
      toast.error("Error While Login")
    }
  };
  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login</h2>
        <br />
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            placeholder="Enter Username..."
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            placeholder="Enter Password..."
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="role">Role:</label>
          <select
            name="role"
            id="role"
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="admin">Admin</option>
            <option value="student">Student</option>
          </select>
        </div>
        <button className="btn-login" onClick={handleSubmit}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
