import Booklist from "../../components/BookList/BookList.jsx";
import Loader from "../../components/Loader/Loader.jsx";
import "./Home.css";
import { useOutletContext } from "react-router-dom";

const Home = () => {
  const { books, loading, error } = useOutletContext();
  return (
    <main className="home-container">
      <h1 className="home-title"> Search for Books</h1>
      {loading && <Loader />}
      {error && <p className="error-message">{error}</p>}
      {!loading && !error && <Booklist books={books} />}
    </main>
  );
};

export default Home;
