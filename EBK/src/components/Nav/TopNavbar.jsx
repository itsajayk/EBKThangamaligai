import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

// Components
import Sidebar from "../Nav/Sidebar";
import Backdrop from "../Elements/Backdrop";

// Assets (SVGs should use `currentColor` for fills so they inherit color)
import LogoIcon from "../../assets/img/add/Logo.png";

import BurgerIcon from "../../assets/svg/BurgerIcon";

export default function TopNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [sidebarOpen, toggleSidebar] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}

      <Wrapper scrolled={scrolled}>
        <NavInner className="container flexSpaceCenter">
          {/* Logo link - inline style for guaranteed color switch */}
          <ScrollLink to="home" smooth className="pointer flexNullCenter" style={{ color: scrolled ? "#000" : "#fff", transition: "color .25s" }}>
            {/* <LogoIcon /> */}
             <LogoImg
              src={LogoIcon}
              alt="EBK Thangamaligai Logo"
              scrolled={scrolled}
            />
            {/* <h1 className="logoText" style={{ marginLeft: 15, color: "inherit" }}>EBK Thangamaligai</h1> */}
          </ScrollLink>

          <BurgerWrapper onClick={() => toggleSidebar(!sidebarOpen)} style={{ color: scrolled ? "#000" : "#fff" }}>
            <BurgerIcon />
          </BurgerWrapper>

          {/* pass scrolled prop so styled-components can use it */}
          <UlWrapper scrolled={scrolled}>
    <li>
    <RouterLink
        to="/"
        smooth
        offset={-80}
        className="navLink"
      >
        HOME
      </RouterLink>


  </li>

  <li>
    <RouterLink
  to="/about"
  className="navLink"
>
  ABOUT US
</RouterLink>

  </li>

  <li>
    <RouterLink to="/#blog" className="navLink">
  BLOG
</RouterLink>
  </li>

  <li>
    <RouterLink to="/#Collections" smooth spy offset={-80} className="navLink">
      COLLECTIONS
    </RouterLink>
  </li>

  <li>
    <RouterLink
  to="/contact"
  className="navLink"
>
  CONTACT US
</RouterLink>

  </li>
</UlWrapper>


          <UlWrapperRight scrolled={scrolled}>
            {/* <li>
              <a href="/" className="navLink">
                Log in
              </a>
            </li> */}
            <li>
              <a href="/" className="ctaBtn">
                Contact Now
              </a>
            </li>
          </UlWrapperRight>
        </NavInner>
      </Wrapper>
    </>
  );
}

/* Styled components */
const Wrapper = styled.nav`
  position: fixed;
  top: var(--info-bar-height, 0px); /* <- important */
  left: 0;
  width: 100%;
  height: ${({ scrolled }) => (scrolled ? "60px" : "80px")};
  z-index: 1000;
  background: ${({ scrolled }) => (scrolled ? "#ffffff" : "transparent")};
  box-shadow: ${({ scrolled }) => (scrolled ? "0 6px 25px rgba(0,0,0,0.08)" : "none")};
  transition: all 0.35s ease;
  border-bottom: ${({ scrolled }) => (scrolled ? "solid .5px #000" : "transparent")};


  @media (max-width: 1200px) {
    font-size: 15px;
  }
`;


const NavInner = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

    @media (max-width: 768px) {
    font-size: 10px;
  }

    @media (max-width: 950px) {
    font-size: 10px;
  }
   
`;

/* burger icon */
const BurgerWrapper = styled.button`
  background: transparent;
  border: 0;
  display: none;
  color: inherit;
  @media (max-width: 760px) {
    display: block;
  }
`;

/* main nav links */
const UlWrapper = styled.ul`
  display: flex;
  gap: 8px;
  margin-left: 24px;

  li { list-style: none; }

  .navLink {
    position: relative;
    padding: 10px 15px;
    cursor: pointer;
    font-weight: 500;
    color: ${({ scrolled }) => (scrolled ? "#000" : "#fff")};
    text-shadow: ${({ scrolled }) =>
      scrolled ? "none" : "0 2px 8px rgba(0,0,0,0.6)"};
    transition: color 0.25s ease;

    /* underline base */
    &::after {
      content: "";
      position: absolute;
      left: 15px;
      bottom: 6px;
      width: 0;
      height: 2px;
      background: ${({ scrolled }) => (scrolled ? "#000" : "#fff")};
      transition: width 0.25s ease;
    }

    &:hover {
      color: ${({ scrolled }) => (scrolled ? "#000" : "#fff")};
    }

    &:hover::after {
      width: calc(100% - 30px);
    }
  }

  @media (max-width: 760px) {
    display: none;
  }
`;


/* right side actions */
const UlWrapperRight = styled.ul`
  display: flex;
  gap: 12px;
  align-items: center;

  .navLink {
    color: ${({ scrolled }) => (scrolled ? "#000" : "#fff")};
    transition: color .25s ease;
  }

  .ctaBtn {
    background: ${({ scrolled }) => (scrolled ? "#000" : "rgba(255,255,255,0.9)")};
    color: ${({ scrolled }) => (scrolled ? "#fff" : "#000")};
    padding: 8px 14px;
    border-radius: 6px;
    transition: all 0.25s ease;
  }

  @media (max-width: 760px) {
    display: none;
  }
`;

const LogoImg = styled.img`
  height: ${({ scrolled }) => (scrolled ? "40px" : "55px")};
  width: auto;
  transition: height 0.3s ease;
  object-fit: contain;

  @media (max-width: 768px) {
    height: 38px;
  }
`;
