import { useEffect, useState } from "react";
import BookCard from "../../components/BookCard/BookCard";
import axios from "axios";
import './Books.css'

function Books() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    (async function () {
      try {
        const json = await axios.get(`http://localhost:8080/book/get-books`);
        setBooks(json.data.getBooks);
        console.log(books);
      } catch (error) {
        console.log(`Error In ${error}`);
      }
    })();
  }, []);
  return (
    <div className="book-list">
      {books.map((book) => (
        <>
          <BookCard key={book.id} book={book}/>
        </>
      ))}
    </div>
  );
}

export default Books;
