import React from "react";
import styled, { keyframes } from "styled-components";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFloat() {
  return (
    <Wrapper
      href="https://wa.me/919342948376"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <Pulse />
      <Icon>
        <FaWhatsapp />
      </Icon>
    </Wrapper>
  );
}

/* ================== ANIMATIONS ================== */

const pulseRing = keyframes`
  0% {
    transform: scale(0.85);
    opacity: 0.7;
  }
  70% {
    transform: scale(2);
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
`;

const floatIn = keyframes`
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

/* ================== STYLES ================== */

const Wrapper = styled.a`
  position: fixed;
  right: 35px;
  bottom: 32px;
  width: 58px;
  height: 58px;
  z-index: 2000;
  animation: ${floatIn} 0.6s ease forwards;
`;

const Pulse = styled.span`
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: rgba(37, 211, 102, 0.35);
  animation: ${pulseRing} 2.2s ease-out infinite;
`;

const Icon = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: #25d366;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 30px;
  box-shadow: 0 10px 30px rgba(37, 211, 102, 0.45);
  cursor: pointer;
  transition: transform 0.25s ease;

  &:hover {
    transform: scale(1.08);
  }
`;
