import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // ✅ استبدل Link بـ useNavigate
import * as XLSX from "xlsx";
import { IoArrowBack } from "react-icons/io5";
import {
  Container,
  Title,
  ImgWrapper,
  Img,
  Overlay,
  Description,
  Summary,
  BackLink,
  ContentWrapper,
} from "./styles";

function StarRating({ rating }) {
  const starCount = Math.round((rating / 10) * 5);
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span
        key={i}
        style={{
          color: i <= starCount ? "#ffb400" : "#ccc",
          fontSize: "1.4rem",
        }}
      >
        {i <= starCount ? "★" : "☆"}
      </span>
    );
  }

  return <div>{stars}</div>;
}

export default function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate(); // ✅ لإنشاء دالة الرجوع
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch("/data/movies.xlsx")
      .then((res) => res.arrayBuffer())
      .then((buffer) => {
        const workbook = XLSX.read(buffer, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);
        const found = jsonData.find((m) => String(m.id) === id);
        setMovie(found);
      })
      .catch((err) => console.error(err));
  }, [id]);

  if (!movie) return <p>Loading movie details...</p>;

  return (
    <Container>
      {/* زر رجوع أيقونة يرجع للصفحة السابقة */}
      <BackLink onClick={() => navigate(-1)}>
        <IoArrowBack />
      </BackLink>

      <Title>{movie.title}</Title>

      <ContentWrapper>
        <ImgWrapper>
          <Img src={movie.image_url} alt={movie.title} />

          <Overlay>
            <div>Year: {movie.year || "Unknown"}</div>
            <div>
              Rating:{" "}
              {movie.rating !== undefined && movie.rating !== null ? (
                <StarRating rating={movie.rating} />
              ) : (
                "N/A"
              )}
            </div>
            <div>Genre: {movie.genre || "Not specified"}</div>
          </Overlay>
        </ImgWrapper>

        <Description>
          <Summary>{movie.summary || "No summary available."}</Summary>
        </Description>
      </ContentWrapper>
    </Container>
  );
}
