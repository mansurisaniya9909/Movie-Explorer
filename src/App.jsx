import React from "react";
import Home from "./Pages/Home";
import MovieDetails from "./Pages/MovieDetails";
import Movies from "./Pages/Movies";
import Error from "./Pages/Error";
import Favourite from "./Pages/Favourite";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movie-details/:id" element={<MovieDetails />} />
        <Route path="*" element={<Error />} />
        <Route path="/fav" element={<Favourite />} />
      </Routes>
      <ToastContainer/>
    </BrowserRouter>
  );
};

export default App;
