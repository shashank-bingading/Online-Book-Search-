import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home.jsx";
import About from "./Pages/About/About.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import BookDetails from "./components/BookDetails/BookDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Home />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <Navbar />
        <About />
      </>
    ),
  },
  {
    path: "/book/:bookId",
    element: (
      <>
        <Navbar />
        <BookDetails />
      </>
    ),
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
