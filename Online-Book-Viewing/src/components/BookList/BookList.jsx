import React from "react";
import { Link } from "react-router-dom";

const Booklist = ({ books }) => {
  if (!books || books.length === 0) {
    return <div>No books available</div>;
  }
  return (
    <div className="book-list">
      {books.map((book, index) => {
        const title = book.title ? book.title : "No Title Available";
        const authors = book.authors
          ? book.authors.join(", ")
          : "Unknown Author";
        const year = book.first_publish_year
          ? book.first_publish_year
          : "no info regarding book year of publication available";

        const workKey = book.key ? book.key : null;
        return (
          <div key={workKey || index} className="book-card">
            {workKey ? (
              <Link to={`/book${workKey}`} className="book-link">
                <h3 className="book-title">{title}</h3>
                {authors && (
                  <p className="book-authors">Author: {authors.join(", ")}</p>
                )}
                {year && <p className="book-year">First publication: {year}</p>}
              </Link>
            ) : (
              //fallback if the workKey is not available

              <>
                <h3 className="book-title">{title}</h3>

                {authors && (
                  <p className="book-authors">Author: {authors.join(", ")}</p>
                )}

                {year && <p className="book-year">First published: {year}</p>}
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Booklist;
