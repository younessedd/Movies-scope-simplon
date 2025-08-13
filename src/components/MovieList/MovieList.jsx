// MovieList.jsx
import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import styles from "./MovieList.module.css";
import { useLocation } from "react-router-dom";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

function useExcelData(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.arrayBuffer())
      .then((buffer) => {
        const workbook = XLSX.read(buffer, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);
        setData(jsonData);
      })
      .catch((err) => console.error("Error reading Excel file:", err));
  }, [url]);

  return data;
}

function renderStars(rating) {
  const stars = [];
  const score = rating / 2;
  const fullStars = Math.floor(score);
  const halfStar = score - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  for (let i = 0; i < fullStars; i++)
    stars.push(<FaStar key={`full-${i}`} color="#f5c518" />);
  if (halfStar) stars.push(<FaStarHalfAlt key="half" color="#f5c518" />);
  for (let i = 0; i < emptyStars; i++)
    stars.push(<FaRegStar key={`empty-${i}`} color="#f5c518" />);

  return stars;
}

export default function MovieList({ search }) {
  const movies = useExcelData("/data/movies.xlsx");
  const searchTerm = search ? search.toLowerCase() : "";
  const location = useLocation(); // مراقبة المسار

  // Scroll to top عند دخول صفحة /movies
  useEffect(() => {
    if (location.pathname === "/movies") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm)
  );

  if (!movies.length) return <p className={styles.loading}>Loading movies...</p>;

  return (
    <div className={styles.container}>
      {filteredMovies.length === 0 ? (
        <p className={styles.noResults}>No movie matches your search.</p>
      ) : (
        <ul className={styles.list}>
          {filteredMovies.map((movie) => (
            <li key={movie.id} className={styles.item}>
              <a
                href={`/movie/${movie.id}`}
                className={styles.link}
                onClick={() =>
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }
              >
                <img
                  className={styles.img}
                  src={movie.image_url}
                  alt={movie.title}
                  loading="lazy"
                />
                <h3 className={styles.title}>{movie.title}</h3>
                <div className={styles.rating}>
                  {renderStars(movie.rating)}
                  <span className={styles.score}>{movie.rating}/10</span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
