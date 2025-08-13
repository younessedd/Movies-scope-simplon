// src/components/Navbar/Navbar.jsx
import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar({ search, setSearch }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const showSearch = location.pathname === "/movies";

  // دالة تمرير الصفحة للأعلى عند الضغط على Home إذا كنا في الصفحة الرئيسية
  const handleHomeClick = (e) => {
    setMenuOpen(false);
    if (location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <header className="navbar" ref={menuRef}>
        <div className="navbar-logo">
          <Link to="/" onClick={handleHomeClick}>
            🎬 <span>MovieScope</span>
          </Link>
        </div>

        <div className={`navbar-search ${!showSearch ? "hidden" : ""}`}>
          <input
            type="text"
            placeholder="Search for a movie..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Search movies"
          />
        </div>

        <button
          className={`navbar-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`navbar-links ${menuOpen ? "active" : ""}`}>
          <Link to="/" onClick={handleHomeClick}>Home</Link>
          <Link to="/movies" onClick={() => setMenuOpen(false)}>Movies</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
        </nav>
      </header>

      {showSearch && (
        <div className="mobile-search-fixed">
          <input
            type="text"
            placeholder="Search for a movie..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Search movies"
          />
        </div>
      )}
    </>
  );
}
