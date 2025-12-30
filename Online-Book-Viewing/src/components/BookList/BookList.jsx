import { Link } from "react-router-dom";
import "./BookList.css";

const Booklist = ({ books }) => {
  if (!books || books.length === 0) {
    return <div>No books available</div>;
  }
  return (
    <div className="book-list">
      {books.map((book, index) => {
        const title = book.title ? book.title : "No Title Available";
        const authors = book.author_name
          ? book.author_name
          : "No authors found";
        let authorText = "";

        if (Array.isArray(authors)) {
          authorText = authors.join(", ");
        } else if (typeof authors === "string") {
          authorText = authors;
        }
        const year = book.first_publish_year
          ? book.first_publish_year
          : "no info regarding book year of publication available";

        const workKey = book.key ? book.key : null;
        //if cover_i is available, prefer that, else first edition_key
        let coverUrl = null;
        if (book.cover_i) {
          coverUrl = `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`;
        } else if (book.edition_key && book.edition_key.length > 0) {
          coverUrl = `https://covers.openlibrary.org/b/olid/${book.edition_key[0]}-M.jpg`;
        }
        //for everything to be displayed
        const content = (
          <>
            {coverUrl && (
              <img src={coverUrl} alt={title} className="book-cover" />
            )}
            <h3 className="book-title">{title}</h3>
            {authorText && <p className="book-authors">Author: {authorText}</p>}
            {year && <p className="book-year">First published: {year}</p>}
          </>
        );

        return (
          <div key={workKey || index} className="book-card">
            {workKey ? (
              <Link to={`/book/${workKey.replace('/works/', '')}`} className="book-link">
                {content}
              </Link>
            ) : (
              //fallback if the workKey is not available
              content
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Booklist;
