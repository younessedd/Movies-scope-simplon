// src/hooks/useMovieImages.js
import * as XLSX from "xlsx";
import { useState, useEffect } from "react";

export default function useMovieImages() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("/data/movies.xlsx")
      .then((res) => res.arrayBuffer())
      .then((data) => {
        const workbook = XLSX.read(data, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);

        const imageList = jsonData.map((row) => row.image_url).filter(Boolean);
        setImages(imageList);
      });
  }, []);

  return images;
}
