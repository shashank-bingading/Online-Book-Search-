import {useParams} from 'react-router-dom';

const BookDetails = () => {
  const { bookId } = useParams();

  return (
    <main className='book-details-container'>
      <h1 className='book-details-titles'>
        Book Details
      </h1>
      <p>Book ID: {bookId}</p>


      
    </main>
  )
}

export default BookDetails
