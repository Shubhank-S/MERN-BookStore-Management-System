import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import "./AddBook.css";

function AddBook() {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const json = await axios.post(`http://localhost:8080/book/add-books`, {
      name,
      author,
      imageUrl,
    });
    console.log(json);
    if (json.data.success) {
      toast.success(json.data.message)
      navigate("/books");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Add Book</h2>
        <br />
        <div className="form-group">
          <label htmlFor="roll">Name:</label>
          <input
            id="roll"
            name="roll"
            type="text"
            placeholder="Enter your Name..."
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            placeholder="Enter the Author..."
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="role">ImageURL:</label>
          <input
            type="text"
            placeholder="Enter The Image URL..."
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>

        <button className="btn-login" onClick={handleSubmit}>
          Add Book
        </button>
      </div>
    </div>
  );
}

export default AddBook;
