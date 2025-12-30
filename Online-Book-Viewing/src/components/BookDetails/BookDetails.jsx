import { useParams } from "react-router-dom";
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

        const url = `/api/openlibrary/works/${bookId}.json`;
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

  const getCoverUrl = (book) => {
  const coverId = book.covers?.[0]; 
  if (coverId) {
    return `https://covers.openlibrary.org/b/id/${coverId}-L.jpg`; // L = Large
  }
  return null;
};

const coverUrl = book ? getCoverUrl(book) : null;

  return (
    <main className="book-details-container">
        <div className="book-details-hero">
      <h1 className="book-details-titles">{title}</h1></div>

       <div className="book-details-content">
      <div className="book-cover-container">
        {coverUrl && <img src={coverUrl} alt={title} className="book-cover" />}
      </div>
      
      <div>
        {description && (
          <div className="book-details-description">{description}</div>
        )}
      </div>
        </div>


      {subjects && subjects.length > 0 && (
        <div className="book-details-subjects">
          <h3>Subjects</h3>
            <div className="subjects-grid">
            {subjects.slice(0, 10).map((subj, index) => (
              <div key={index} className="subject-tag">{subj}</div>
            ))}
          </div>
        </div>
      )}
    </main>
  );
};

export default BookDetails;

// import { useParams } from "react-router-dom";

// const BookDetails = () => {
//   const { bookId } = useParams();

//   return (
//     <main style={{ padding: "2rem" }}>
//       <h1>BOOK DETAILS TEST PAGE</h1>
//       <p>
//         bookId from URL: <strong>{bookId}</strong>
//       </p>
//       <p>If you see this, routing works perfectly.</p>
//     </main>
//   );
// };

// export default BookDetails;
