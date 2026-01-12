import React from "react";
import styled from "styled-components";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

// Assets
import CloseIcon from "../../assets/svg/CloseIcon";
import LogoIcon from "../../assets/svg/Logo";

export default function Sidebar({ sidebarOpen, toggleSidebar }) {
  return (
    <Wrapper sidebarOpen={sidebarOpen}>
      <SidebarHeader>
        <Brand>
          <LogoIcon />
          <h1>EBK</h1>
        </Brand>

        <CloseBtn onClick={() => toggleSidebar(false)}>
          <CloseIcon />
        </CloseBtn>
      </SidebarHeader>

<NavList>
  <li>
    <RouterLink to="/" onClick={close}>
      HOME
    </RouterLink>
  </li>

  <li>
    <RouterLink to="/about" onClick={close}>
      ABOUT US
    </RouterLink>
  </li>

  <li>
    <RouterLink to="/#blog" onClick={close}>
      BLOG
    </RouterLink>
  </li>

  <li>
    <RouterLink to="/#collections" onClick={close}>
      COLLECTIONS
    </RouterLink>
  </li>

  <li>
    <RouterLink to="/contact" onClick={close}>
      CONTACT
    </RouterLink>
  </li>
</NavList>



      <FooterActions>
        <a href="/">Log in</a>
        <a href="/" className="cta">Get Started</a>
      </FooterActions>
    </Wrapper>
  );
}

/* ================= styles ================= */

const Wrapper = styled.aside`
  width: 380px;
  height: 100vh;
  position: fixed;
  top: 0;
  right: ${({ sidebarOpen }) => (sidebarOpen ? "0" : "-380px")};
  background: #ffffff;
  z-index: 9999;
  padding: 0 28px;
  transition: right 0.35s ease;
  box-shadow: -10px 0 30px rgba(0,0,0,0.12);

  color: #000;

  svg {
    color: inherit;
  }

  @media (max-width: 420px) {
    width: 100%;
    right: ${({ sidebarOpen }) => (sidebarOpen ? "0" : "-100%")};
  }
`;

const SidebarHeader = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  h1 {
    font-size: 20px;
    font-weight: 700;
  }
`;

const CloseBtn = styled.button`
  background: none;
  color: black;
  border: 0;
  padding: 10px;
  cursor: pointer;
`;

const NavList = styled.ul`
  padding: 40px 0;

  li {
    margin: 18px 0;
  }

  a {
    font-size: 15px;
    font-weight: 600;
    color: #000;
    cursor: pointer;
    transition: opacity 0.2s ease;

    &:hover {
      opacity: 0.6;
    }
  }
`;

const FooterActions = styled.div`
  position: absolute;
  bottom: 40px;
  left: 28px;
  right: 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    font-weight: 600;
    color: #000;
  }

  .cta {
    background: #000;
    color: #fff;
    padding: 10px 16px;
    border-radius: 6px;
  }
`;
