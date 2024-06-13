import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import "./AddStudent.css";

function AddStudent() {
  const [rollNumber, setRollNumber] = useState("");
  const [username, setUsername] = useState("");
  const [grade, setGrade] = useState("admin");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const json = await axios.post(`http://localhost:8080/student/register`, {
      rollNumber,
      username,
      grade,
      password,
    });
    console.log(json);
    if(json.data.success){
      toast.success(json.data.message)
      navigate('/dashboard')
   }else{
    toast.error(json.data.message)
   }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Add Student</h2>
        <br />
        <div className="form-group">
          <label htmlFor="roll">Roll No:</label>
          <input
            id="roll"
            name="roll"
            type="text"
            placeholder="Enter Roll No..."
            onChange={(e) => setRollNumber(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            placeholder="Enter Username..."
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="role">Grade:</label>
          <input
            type="text"
            placeholder="Enter Grade..."
            onChange={(e) => setGrade(e.target.value)}
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

        <button className="btn-login" onClick={handleSubmit}>
          Add Student
        </button>
      </div>
    </div>
  );
}

export default AddStudent;
