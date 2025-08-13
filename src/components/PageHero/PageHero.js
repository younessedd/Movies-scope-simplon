import React from "react";
import HeroSlider from "../HeroSlider";
import {
  HeroSection,
  SliderWrapper,
  ImageWrapper,
  HeroContent,
  Title,
  Subtitle,
  CTAButton,
} from "./styles";

import { Link } from "react-router-dom";

import useMovieImages from "../../hooks/useMovieImages";

export default function PageHero() {
  const images = useMovieImages();

  return (
    <HeroSection>
      <SliderWrapper>
        <ImageWrapper>
          <HeroSlider images={images} slidesPerView={1} effect="cube" />
        </ImageWrapper>
      </SliderWrapper>

      <HeroContent>
        <Title>Discover Amazing Movies</Title>
        <Subtitle>
          Browse reviews, ratings, and genres for your favorite films.
        </Subtitle>
        <CTAButton as={Link} to="/movies">
          Explore Now
        </CTAButton>
      </HeroContent>
    </HeroSection>
  );
}
