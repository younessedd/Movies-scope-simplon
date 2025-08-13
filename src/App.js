import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import PageHero from "./components/PageHero/PageHero";
import MovieList from "./components/MovieList/MovieList";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import About from "./components/About";
import Footer from "./components/Footer/Footer";

import "./styles/global.css";

export default function App() {
  const [search, setSearch] = useState("");

  // يمكنك جلب صور لأبطال الصفحة من ملف بيانات الأفلام أو ثابتة
  // هنا مثال ثابت للصور للـ Hero
  const heroImages = [
    "/images/movie1.jpg",
    "/images/movie2.jpg",
    "/images/movie3.jpg",
  ];

  return (
    <Router>
      <Navbar search={search} setSearch={setSearch} />

      <main style={{ minHeight: "80vh", padding: "5rem 2rem 1rem" }}>
        <Routes>
          <Route path="/" element={<PageHero images={heroImages} />} />
          <Route path="/movies" element={<MovieList search={search} />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}
