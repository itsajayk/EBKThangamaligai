import React from "react";
import styled, { keyframes } from "styled-components";
import HeroImg from "../../assets/img/header-img.jpg";
import { Link as RouterLink } from "react-router-dom";

export default function Header() {
  return (
    <Wrapper id="home">
      <Overlay />
      <Content className="container">
        <Brand>EBK Thangamaligai</Brand>
        <Tagline>The World Of South Indian Elegance</Tagline>
        <div class="" style={{ display: "flex", alignItems: "center" , justifyContent: "center"}}>

            <RouterLink to="/#about" className="navLink">
                    <CTA className="FlexCenter">TAKE THE TOUR</CTA>
          </RouterLink>
        </div>
      </Content>
    </Wrapper>
  );
}

/* ---------------- ANIMATIONS ---------------- */

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slowZoom = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.05);
  }
`;

const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(255,255,255,0.4); }
  70% { box-shadow: 0 0 0 12px rgba(255,255,255,0); }
  100% { box-shadow: 0 0 0 0 rgba(255,255,255,0); }
`;

/* ---------------- STYLES ---------------- */

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  background: url(${HeroImg}) center/cover no-repeat;
  animation: ${slowZoom} 20s ease-in-out infinite alternate;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 90vh;
  }

  @media (max-width: 480px) {
    height: 85vh;
  }
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    rgba(0, 0, 0, 0.55),
    rgba(0, 0, 0, 0.6)
  );
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
  max-width: 720px;

  @media (max-width: 768px) {
    text-align: center;
    align-items: center;
  }
`;

const Brand = styled.h4`
  letter-spacing: 4px;
  font-weight: 500;
  opacity: 0.9;
  font-size: 40px;
    text-align: center;

  animation: ${fadeUp} 1.2s ease forwards;
  

  @media (max-width: 768px) {
    font-size: 26px;
    letter-spacing: 3px;
  }

  @media (max-width: 480px) {
    font-size: 22px;
  }
`;

const Tagline = styled.h1`
  font-size: 52px;
  margin: 20px 0 40px;
    text-align: center;
  font-family: "Playfair Display", serif;
  line-height: 1.2;
  animation: ${fadeUp} 1.5s ease forwards;
  animation-delay: 0.35s;
  opacity: 0;

  @media (max-width: 768px) {
    font-size: 34px;
    margin-bottom: 30px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

const CTA = styled.button`
  width: fit-content;
  padding: 14px 42px;
  border: 1px solid #fff;
  background: transparent;
  color: #fff;
  letter-spacing: 2px;
  cursor: pointer;
  font-size: 14px;

  animation: ${fadeUp} 0.9s ease forwards;
  animation-delay: 0.45s;
  opacity: 2;
  transition: all 0.35s ease;
  animation: ${pulse} 2.5s infinite;

  &:hover {
    background: #fff;
    color: #000;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 12px 36px;
  }
`;
