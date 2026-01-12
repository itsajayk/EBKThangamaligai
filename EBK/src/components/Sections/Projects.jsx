import React from "react";
import styled, { keyframes, css } from "styled-components";
// Components
import ProjectBox from "../Elements/ProjectBox";
import FullButton from "../Buttons/FullButton";
// Assets
import ProjectImg1 from "../../assets/img/projects/1.jpg";
import ProjectImg2 from "../../assets/img/projects/2.jpg";
import ProjectImg3 from "../../assets/img/projects/3.jpg";
import ProjectImg4 from "../../assets/img/projects/4.jpg";
import ProjectImg5 from "../../assets/img/projects/7.jpg";
import ProjectImg6 from "../../assets/img/projects/6.jpg";
import AddImage2 from "../../assets/img/projects/5.avif";

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;



export default function Projects() {
  return (
    <Wrapper id="Collections">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Our Collections</h1>
            <p className="font13">
              Authentic South-Indian craftsmanship — heirloom pieces, temple
              collections, bridal sets and contemporary classics. Each piece is
              hallmarked and crafted with transparent pricing.
            </p>
          </HeaderInfo>

          {/* GRID OF COLLECTIONS */}
          <Grid className="row textCenter">
            <CardCol>
              <ProjectBox
                img={ProjectImg1}
                title="Heritage Temple Set"
                text="Hand-carved motifs, traditional finish — a timeless heirloom."
                action={() => alert("View Temple Set")}
              />
            </CardCol>

            <CardCol>
              <ProjectBox
                img={ProjectImg2}
                title="Bridal Collection"
                text="Designed for ceremony and celebration — curated bridal sets."
                action={() => alert("View Bridal")}
              />
            </CardCol>

            <CardCol>
              <ProjectBox
                img={ProjectImg3}
                title="Contemporary Classics"
                text="Modern silhouettes with classic purity and certified gold."
                action={() => alert("View Contemporary")}
              />
            </CardCol>
          </Grid>

          <Grid className="row textCenter" style={{ marginTop: 20 }}>
            <CardCol>
              <ProjectBox
                img={ProjectImg4}
                title="Nakshi & Kundan"
                text="Intricate stonework and expert setting for refined taste."
                action={() => alert("View Nakshi")}
              />
            </CardCol>

            <CardCol>
              <ProjectBox
                img={ProjectImg5}
                title="Everyday Gold"
                text="Lightweight pieces for daily wear with trusted purity."
                action={() => alert("View Everyday")}
              />
            </CardCol>

            <CardCol>
              <ProjectBox
                img={ProjectImg6}
                title="Bespoke Orders"
                text="Custom-made designs — bring your idea, we craft it."
                action={() => alert("Start Bespoke")}
              />
            </CardCol>
          </Grid>

          <div className="row flexCenter">
            <div style={{ margin: "50px 0", width: "200px" }}>
              <FullButton title="Load More" action={() => alert("Load more")} />
            </div>
          </div>
        </div>
      </div>

      {/* ADVERTISING / BRAND STORY */}
      <div className="lightBg">
        <div className="container">
          <Advertising className="flexSpaceCenter">
            <AddLeft>
              <AddLeftInner>
                <ImgWrapper className="flexCenter">
                  <img className="radius8" src={AddImage2} alt="crafting" />
                </ImgWrapper>
              </AddLeftInner>
            </AddLeft>

            <AddRight>
              <h4 className="font15 semiBold">Why EBK?</h4>
              <h2 className="font40 extraBold">From Our Hands to Your Heirloom</h2>
              <p className="font12">
                Each piece passes through skilled hands and rigorous quality control.
                We practice transparent pricing, certified purity and provide lifetime
                servicing for eligible purchases. Visit our showroom or explore
                collections online.
              </p>

              <ButtonsRow className="flexNullCenter" style={{ margin: "30px 0" }}>
                <div style={{ width: "190px" }}>
                  <FullButton title="Explore Collections" action={() => alert("Explore")} />
                </div>
                <div style={{ width: "190px", marginLeft: "15px" }}>
                  <FullButton title="Visit Showroom" action={() => alert("Visit")} border />
                </div>
              </ButtonsRow>
            </AddRight>
          </Advertising>
        </div>
      </div>
    </Wrapper>
  );
}

/* ================= STYLES ================= */

/* ================= FLOATING IMAGE (OPTIONAL) ================= */

const floatKey = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-40px); }
  100% { transform: translateY(0px); }
`;

const FloatingImage = css`
  animation: ${floatKey} 2s ease-in-out infinite;
`;


const Wrapper = styled.section`
  width: 100%;
  overflow: hidden;

  @media (max-width: 768px) {
    overflow-x: hidden;
  }
`;

/* ================= HEADER ================= */

const HeaderInfo = styled.div`
  margin: 36px 0 12px 0;
  animation: ${fadeUp} 0.9s ease both;
  h1 {
    line-height: 1.2;
    animation: ${fadeUp} 0.9s ease both;
  }

  p {
    max-width: 820px;
    color: #5d5d5d;
    line-height: 1.7;
    animation: ${fadeUp} 0.9s ease both;

  }

  @media (max-width: 992px) {
    margin: 32px 0 10px 0;
  }

  @media (max-width: 860px) {
    text-align: center;

    p {
      margin: 0 auto;
    }
  }

  @media (max-width: 560px) {
    margin: 28px 0 8px 0;

    h1 {
      font-size: 28px;
    }

    p {
      font-size: 13px;
    }
  }

  @media (max-width: 420px) {
    h1 {
      font-size: 24px;
    }
  }
`;

const scaleFade = keyframes`
  from {
    opacity: 0;
    transform: translateY(24px) scale(0.97);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;


/* ================= GRID ================= */

const Grid = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 18px;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 992px) {
    gap: 20px;
  }

  @media (max-width: 860px) {
    gap: 18px;
  }

  @media (max-width: 560px) {
    gap: 16px;
  }
`;

/* ================= CARD ================= */

const CardCol = styled.div`
  width: calc(33.333% - 16px);
  min-width: 260px;
  margin-bottom: 18px;
  display: flex;
  justify-content: center;
  animation: ${scaleFade} 0.6s ease both;
  animation-delay: ${({ index }) => index * 0.12}s;

  transition: transform 0.35s ease, box-shadow 0.35s ease; 

  &:hover {
    transform: translateY(-8px) scale(1.02);
  }

  @keyframes appear {
    from {
      opacity: 0;
      transform: translateY(18px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 1200px) {
    width: calc(33.333% - 12px);
      padding-left: 15px;
  padding-right: 15px;
  }

  @media (max-width: 920px) {
    width: calc(50% - 12px);
    padding-left: 15px;
    padding-right: 15px;
  }

  @media (max-width: 560px) {
    width: 100%;
    margin-bottom: 14px;
  padding-left: 15px;
  padding-right: 15px;
  }
`;

/* ================= ADVERTISING ================= */

const Advertising = styled.div`
  padding: 60px 0;
  margin: 60px 0;
  display: flex;
  align-items: center;

  @media (max-width: 992px) {
    padding: 50px 0;
  }

  @media (max-width: 860px) {
    flex-direction: column;
    padding: 30px 0;
    margin: 40px 0;
  }

  @media (max-width: 560px) {
    padding: 24px 0;
    margin: 32px 0;
  }
`;

/* ================= BUTTON ROW ================= */

const ButtonsRow = styled.div`
  display: flex;

  @media (max-width: 860px) {
    justify-content: center;
    flex-wrap: wrap;
    gap: 12px;
  }

  @media (max-width: 560px) {
    flex-direction: column;
    align-items: center;

    > div {
      width: 100% !important;
      max-width: 240px;
    }
  }
`;

/* ================= LEFT IMAGE ================= */

const AddLeft = styled.div`
  width: 50%;
  position: relative;

  @media (max-width: 860px) {
    width: 100%;
    order: 1;
    margin-bottom: 20px;
  }
`;

const AddLeftInner = styled.div`
  width: 100%;
  position: relative;
  top: -40px;

  @media (max-width: 1190px) {
    top: -30px;
  }

  @media (max-width: 992px) {
    top: -24px;
  }

  @media (max-width: 860px) {
    top: 0;
  }
`;

const ImgWrapper = styled.div`
  width: 100%;
  padding: 0 10%;
  display: flex;
  justify-content: center;

  img {
    width: 100%;
    max-width: 520px;
    height: auto;
    border-radius: 12px;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.12);
    animation: ${floatKey} 6s ease-in-out infinite;
  }

  @media (max-width: 768px) {
    padding: 0 8%;
  }

  @media (max-width: 560px) {
    padding: 0 6%;
  }

  @media (max-width: 420px) {
    padding: 0 4%;
  }
`;

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;


/* ================= RIGHT CONTENT ================= */

const AddRight = styled.div`
  width: 50%;
  padding-left: 48px;
    animation: ${slideIn} 0.9s ease both;

  p {
    max-width: 520px;
    color: #555;
    line-height: 1.7;
      animation: ${slideIn} 0.8s ease both;
          animation-delay: 0.15s;


  }

  @media (max-width: 992px) {
    padding-left: 32px;
  }

  @media (max-width: 860px) {
    width: 100%;
    padding-left: 0;
    text-align: center;

    p {
      margin: 0 auto;
    }
  }

  @media (max-width: 560px) {
    h2 {
      font-size: 26px;
    }

    p {
      font-size: 13px;
    }
  }

  @media (max-width: 420px) {
    h2 {
      font-size: 22px;
    }
  }
`;




// export {
//   Wrapper,
//   HeaderInfo,
//   Grid,
//   CardCol,
//   Advertising,
//   ButtonsRow,
//   AddLeft,
//   AddLeftInner,
//   ImgWrapper,
//   AddRight,
//   FloatingImage
// };
