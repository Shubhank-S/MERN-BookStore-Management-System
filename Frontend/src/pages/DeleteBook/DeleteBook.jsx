import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import "./DeleteBook.css";

function DeleteBook() {
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    (async function () {
      const json = await axios.delete(
        `http://localhost:8080/book/delete-book/${id}`
      );
      console.log(json);
      if (json.data.success) {
        toast.success(json.data.message);
        navigate("/books");
      }
    })();
  }, []);
}

export default DeleteBook;
