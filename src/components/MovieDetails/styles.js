import styled from "styled-components";

export const Container = styled.div`
  background: #111; /* dark background */
  padding: 2.5rem 2rem;
  margin: 2rem auto;
  max-width: 1000px;
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(255, 107, 107, 0.2); /* primary shadow */
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #fff; /* main text color */
  position: relative;

  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
    margin: 1rem;
  }
`;

export const Title = styled.h2`
  margin-bottom: 2rem;
  font-size: 2.2rem;
  font-weight: 800;
  letter-spacing: 1px;
  text-align: center;
  color: #ff6b6b; /* primary accent */
`;

export const ContentWrapper = styled.div`
  display: flex;
  gap: 2rem;
  align-items: flex-start;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ImgWrapper = styled.div`
  position: relative;
  width: 320px;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 85%;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(255, 107, 107, 0.3); /* primary shadow */
  display: block;
`;

export const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(255, 107, 107, 0.85); /* primary overlay */
  color: #fff;
  padding: 1rem 1.5rem;
  border-radius: 0 0 12px 12px;
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 500;
`;

export const Description = styled.div`
  flex: 1;
  text-align: left;
`;

export const Summary = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #ccc; /* secondary text */
  margin-top: 1rem;
`;

export const BackLink = styled.a`
  position: fixed;
  bottom: 20px;
  left: 10px;
  background: #ff6b6b; /* primary button */
  color: white;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  text-decoration: none;
  box-shadow: 0 4px 12px rgba(255, 107, 107, 0.4);
  z-index: 1000;
  transition: background 0.3s ease, transform 0.2s ease;

  &:hover {
    background: #e03030;
    transform: scale(1.08);
  }
`;
