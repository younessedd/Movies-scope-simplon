import React from "react";
import styled from "styled-components";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Foot = styled.footer`
  background: #0d1117;
  color: #ccc;
  padding: 3rem 2rem;
  margin-top: 4rem;
  flex-shrink: 0;

  .headings-row {
    display: flex;
    justify-content: center;
    gap: 4rem;
    margin-bottom: 1.5rem;
    flex-wrap: wrap;
  }

  .heading-group {
    flex: 1 1 220px;
    min-width: 220px;
    text-align: center;
  }

  .heading-group h3 {
    color: #fff;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }

  .footer-links, .social-links, .heading-group p {
    font-size: 0.95rem;
    max-width: 280px;
    margin: 0 auto;
  }

  .footer-links {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
  }

  .footer-links a {
    color: #ccc;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  .footer-links a:hover { color: #ff6b6b; }

  .social-links {
    display: flex;
    justify-content: center;
    gap: 1.2rem;
    margin-top: 0.3rem;
  }

  .social-links a {
    color: #ccc;
    font-size: 1.5rem;
    transition: color 0.3s ease;
  }

  .social-links a:hover { color: #ff6b6b; }

  .footer-bottom {
    width: 100%;
    text-align: center;
    margin-top: 2rem;
    border-top: 1px solid #222;
    padding-top: 1rem;
    font-size: 0.85rem;
    color: #888;
  }

  @media (max-width: 768px) {
    .headings-row { gap: 2rem; }
    .heading-group { flex: 1 1 100%; max-width: 100%; }
  }
`;

export default function Footer() {
  return (
    <Foot>
      <div className="headings-row">
        <div className="heading-group">
          <h3>🎬 MovieScope</h3>
          <p>MovieScope is your ultimate platform for movie reviews and recommendations.</p>
        </div>
        <div className="heading-group">
          <h3>Quick Links</h3>
          <div className="footer-links">
            <a href="/">Home</a>
            <a href="/about">About</a>
          </div>
        </div>
        <div className="heading-group">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">&copy; {new Date().getFullYear()} MovieScope. All rights reserved.</div>
    </Foot>
  );
}
