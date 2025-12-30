import { Form, useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import "./BookDetails.css";
import { useState, useEffect } from "react";

const BookDetails = () => {
  const { bookId } = useParams();
  //debugging
  console.log("BookDetails mounted. bookId =", bookId);

  const [book, setBook] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!bookId) {
      return;
    }

    const fetchBookDetails = async () => {
      try {
        setLoading(true);
        setError(null);

        const url = `https://openlibrary.org/${bookId}.json`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch book details");
        }
        const data = await response.json();
        setBook(data);
      } catch (err) {
        setError(err.message || "Something went wrong");
        setBook(null);
      } finally {
        setLoading(false);
      }
    };
    fetchBookDetails();
  }, [bookId]); //re-run when bookId changes

  if (loading) {
    return (
      <main className="book-details-container">
        <Loader />
      </main>
    );
  }
  if (error) {
    return (
      <main className="book-details-container">
        <p>Error: {error}</p>
      </main>
    );
  }
  if (!book) {
    return (
      <main className="book-details-container">
        <p>No Book Details Found.</p>
      </main>
    );
  }
  const title = book.title;
  const description =
    typeof book.description === "string"
      ? book.description
      : book.description && book.description.value;
  const subjects = book.subjects;

  return (
    <main className="book-details-container">
      <h1 className="book-details-titles">{title}</h1>
      {description && <p className="book-details-description">{description}</p>}
      {subjects && subjects.lenght > 0 && (
        <div className="book-details-subjects">
          <h3>Subjects</h3>
          <ul>
            {subjects.slice(0, 10).map((subj) => (
              <li key={subj}>{subj}</li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
};

export default BookDetails;
