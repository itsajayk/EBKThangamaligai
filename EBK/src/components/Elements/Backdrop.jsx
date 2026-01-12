import React from "react";
import styled from "styled-components";

export default function Backdrop({ toggleSidebar }) {
  return <Wrapper onClick={() => toggleSidebar(false)} />;
}

/* ================= styles ================= */

const Wrapper = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  z-index: 9998;

  animation: fadeIn 0.25s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
