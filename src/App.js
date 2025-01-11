
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HomePage from "./Pages/HomePage";
import TopRatedPage from "./Pages/TopRatedPage";
import UpcomingPage from "./Pages/UpcomingPage";
import MovieDetailPage from "./Pages/MovieDetailPage";
import SearchedMoviePage from "./Pages/SearchedMoviePage";


function App() {
  return (
    <div className="gray-black-bg">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/top-rated" element={<TopRatedPage />} />
          <Route path="/upcoming" element={<UpcomingPage />} />
          <Route path="/movie/:id" element={<MovieDetailPage />} />
          <Route path="/search/:query" element={<SearchedMoviePage />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
