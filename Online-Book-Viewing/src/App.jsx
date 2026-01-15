import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { useState } from "react";
import Home from "./Pages/Home/Home.jsx";
import About from "./Pages/About/About.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import BookDetails from "./components/BookDetails/BookDetails.jsx";

export default function App() {
  // states
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // search logic 
  const handleSearch = async (searchText) => {
    if (!searchText || searchText.trim() === '') return;

    try {
      setLoading(true);
      setError(null);
      const url = `https://openlibrary.org/search.json?q=${encodeURIComponent(searchText)}`;
      const response = await fetch(url);
      if (!response.ok) throw new Error('Failed to fetch books');
      
      const data = await response.json();
      setBooks(data.docs || []);
    } catch (error) {
      setError(error.message);
      setBooks([]);
    } finally {
      setLoading(false);
    }
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar onSearch={handleSearch} />
          <Outlet context={{ books, loading, error }} /> 
        </>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/book/:bookId",
          element: <BookDetails />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}