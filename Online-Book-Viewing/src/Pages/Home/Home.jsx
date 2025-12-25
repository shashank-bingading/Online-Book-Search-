import {useState} from 'react'
import Booklist from '../../components/BookList/Booklist.jsx'
import SearchBar from '../../components/SearchBar/SearchBar.jsx'
const Home = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSearch = async (searchText) => {

        if (!searchText || searchText.trim() === '') { return; }

        try {
            setLoading(true);
            setError(null);
        
        const url = `https://openlibrary.org/search.json?q=${encodeURIComponent(
        searchText
      )}`
      const response = await fetch(url);
        if (!response.ok) {
            throw new Error('failed to fetch books');
    }
    const data  = await response.json();
    setBooks(data.docs || []);
}catch (error) {
    setError(error.message || 'Something went wrong');
    setBooks([]);
}finally {
    setLoading(false);
}}
  return (
    <main className = "home-container">
        <h1 className ="home-title"> Search for Books</h1>
            <SearchBar onSearch={handleSearch}/>
            {loading && <p>Loading...</p>}
            {error && <p className="error-message">{error}</p>}
            {!loading && !error && <Booklist books={books}/>}
        
    </main>
  )
}

export default Home
