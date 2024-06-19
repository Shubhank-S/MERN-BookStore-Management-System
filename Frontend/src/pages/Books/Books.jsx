import { useEffect, useState } from "react";
import BookCard from "../../components/BookCard/BookCard";
import axios from "axios";
import { Helmet } from "react-helmet";
import "./Books.css";

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
      <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <title>All Books</title>
        </Helmet>
      </div>
      {books.map((book) => (
        <>
          <BookCard key={book.id} book={book} />
        </>
      ))}
    </div>
  );
}

export default Books;
