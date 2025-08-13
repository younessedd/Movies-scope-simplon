import styled from "styled-components";

export const HeroSection = styled.section`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(135deg, #0d1117, #1c1f26);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
  position: relative;
  overflow: hidden;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 2rem 5vw;
  }
`;

export const SliderWrapper = styled.div`
  width: 50vh;
  height: 100vh;
  max-width: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 100%;
    height: 90vh;
    margin-bottom: 1.5rem;
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: auto;
    height: 50vh;
    max-width: 100%;
    border-radius: 12px;
    object-fit: cover;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.6);
  }
`;

export const HeroContent = styled.div`
  max-width: 800px;
  z-index: 10;
  padding: 1rem;
  color: #fff;
  text-align: center;
  flex-shrink: 0;

  @media (min-width: 768px) {
    width: 40%;
    text-align: left;
    padding-left: 2rem;
  }
`;

export const Title = styled.h1`
  font-size: 2.8rem;
  font-weight: 900;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.8);

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.3rem;
  margin-bottom: 2rem;
  line-height: 1.4;
  text-shadow: 1px 1px 6px rgba(0, 0, 0, 0.7);

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const CTAButton = styled.a`
  display: inline-block;
  padding: 0.75rem 2.5rem;
  background-color: #ff6b6b;
  color: #fff;
  font-weight: 700;
  font-size: 1.1rem;
  border-radius: 30px;
  text-decoration: none;
  cursor: pointer;
  box-shadow: 0 6px 18px rgba(255, 107, 107, 0.7);
  transition: background-color 0.3s ease, box-shadow 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #e03535;
    box-shadow: 0 8px 22px rgba(224, 53, 53, 0.9);
    transform: translateY(-2px);
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    padding: 0.6rem 2rem;
  }
`;
