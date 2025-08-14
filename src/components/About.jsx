import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function About() {
  const [movies, setMovies] = useState([]);
  const [slidesToShow, setSlidesToShow] = useState(getSlides());

  useEffect(() => {
    // fetch("/data/movies.xlsx")
    fetch(`${process.env.PUBLIC_URL}/data/movies.xlsx`)

      .then((res) => res.arrayBuffer())
      .then((buffer) => {
        const workbook = XLSX.read(buffer, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);
        setMovies(jsonData);
      })
      .catch((err) => console.error("Error reading Excel:", err));
  }, []);

  useEffect(() => {
    function handleResize() {
      setSlidesToShow(getSlides());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function getSlides() {
    const w = window.innerWidth;
    if (w <= 768) return 1;
    if (w <= 1024) return 2;
    return 3;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow,
    slidesToScroll: 1,
    centerMode: slidesToShow === 3,
    centerPadding: "0px",
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: "ease-in-out",
    arrows: true,
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #0d1117, #1c1f26)",
      color: "#fff",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      paddingBottom: "4rem"
    }}>
      {/* Hero Section */}
      <div style={{
        textAlign: "center",
        background: "linear-gradient(135deg, #1e3c72, #2a5298)", // gradient stays same
        boxShadow: "0 12px 35px rgba(255, 107, 107, 0.7)", // Hero orange shadow
        borderRadius: "0 0 30px 30px",
        maxWidth: 900,
        margin: "0 auto 4rem",
        padding: "3rem 2rem"
      }}>
        <h1 style={{
          fontSize: "3.2rem",
          fontWeight: "900",
          marginBottom: "1rem",
          color: "#fff",
          textShadow: "2px 2px 12px rgba(255, 107, 107, 0.9)", // orange text shadow
          letterSpacing: "2px",
          textTransform: "uppercase"
        }}>
          About MovieScope
        </h1>
        <p style={{
          fontSize: "1.3rem",
          maxWidth: 800,
          margin: "auto",
          lineHeight: 1.8,
          color: "rgba(255,255,255,0.9)",
          fontWeight: "500"
        }}>
          MovieScope is your ultimate platform to explore, review, and recommend movies. Discover trending films, dive into details, and enjoy a sleek and modern browsing experience.
        </p>
      </div>

      {/* Slider Section */}
      <div style={{ maxWidth: 1200, margin: "2rem auto", padding: "0 1rem" }}>
        {movies.length > 0 ? (
          <>
            <style>{`
              .slick-track { display: flex; align-items: center; }
              .slick-slide { padding: 0 10px; box-sizing: border-box; display: flex !important; justify-content: center; align-items: center; transition: transform 0.4s ease, filter 0.4s ease; }
              .movie-slide { 
                width: 100%; 
                border-radius: 16px; 
                overflow: hidden; 
                box-shadow: 0 8px 25px rgba(255, 107, 107, 0.4); /* orange shadow */
                filter: brightness(0.75); 
                transition: transform 0.4s ease, filter 0.4s ease, box-shadow 0.4s ease; 
                background: #1c1f26; 
              }
              .movie-slide img { 
                width: 100%; 
                height: 450px; 
                object-fit: cover; 
                border-radius: 16px; 
                user-select: none; 
                box-shadow: inset 0 0 25px rgba(255, 107, 107, 0.2); /* orange glow */
              }
              .slick-center .movie-slide { 
                transform: scale(1.1); 
                filter: brightness(1); 
                box-shadow: 0 15px 40px rgba(255, 107, 107, 0.85); /* center orange highlight */
                z-index: 3; 
              }
              .slick-center + .slick-slide .movie-slide,
              .slick-center ~ .slick-slide .movie-slide { 
                transform: scale(0.95); 
                filter: brightness(0.8); 
                box-shadow: 0 8px 20px rgba(255, 107, 107, 0.4); 
                z-index: 2; 
              }
              @media (max-width: 1024px) { .movie-slide img { height: 350px; } }
              @media (max-width: 768px) { 
                .movie-slide img { height: 230px; } 
                .slick-slide { transform: none !important; filter: brightness(1) !important; box-shadow: none !important; } 
              }
            `}</style>

            <Slider {...settings}>
              {movies
                .filter((m) => m.image_url)
                .slice(0, 20)
                .map((movie, idx) => (
                  <div key={idx} className="movie-slide" aria-label={movie.title}>
                    <img src={movie.image_url} alt={movie.title} loading="lazy" />
                  </div>
                ))}
            </Slider>
          </>
        ) : (
          <p style={{ textAlign: "center", fontSize: "1.2rem", color: "rgba(255,255,255,0.8)" }}>Loading movies...</p>
        )}
      </div>
    </div>
  );
}