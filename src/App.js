import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import PageHero from "./components/PageHero/PageHero";
import MovieList from "./components/MovieList/MovieList";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import About from "./components/About";
import Footer from "./components/Footer/Footer";

import "./styles/global.css";

export default function App() {
  const [search, setSearch] = useState("");

  return (
    <>
      <Navbar search={search} setSearch={setSearch} />

      <main style={{ minHeight: "80vh", padding: "5rem 2rem 1rem" }}>
        <Routes>
          <Route path="/" element={<PageHero />} />
          <Route path="/movies" element={<MovieList search={search} />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}
