import React from "react";
import styled, { keyframes, css } from "styled-components";
// Components
import FullButton from "../Buttons/FullButton";
// Assets
import AddImage1 from "../../assets/img/add/10.jpg";
import AddImage2 from "../../assets/img/add/7.jpg";
import AddImage3 from "../../assets/img/add/11.jpg";
import AddImage4 from "../../assets/img/add/2.jpg";

export default function Services() {
  return (
    <Wrapper id="blog">
      <div className="whiteBg" style={{ padding: "60px 0" }}>
        <div className="lightBg">
          <div className="container">
            <Advertising className="flexSpaceCenter">
              <AddLeft>
                <h4 className="font15 semiBold">Our Legacy</h4>
                <h2 className="font40 extraBold">
                  Crafting Timeless South Indian Jewellery
                </h2>
                <p className="font12">
                  For generations, we have blended tradition with precision to
                  create jewellery that reflects purity, trust, and cultural
                  elegance. Every piece is crafted with certified gold and
                  transparent pricing.
                </p>

                <ButtonsRow className="flexNullCenter" style={{ margin: "30px 0" }}>
                  <div style={{ width: "190px" }}>
                    <FullButton title="Explore Collections" />
                  </div>
                  <div style={{ width: "190px", marginLeft: "15px" }}>
                    <FullButton title="Visit Store" border />
                  </div>
                </ButtonsRow>
              </AddLeft>

              <AddRight>
                <AddRightInner>
                  <div className="flexNullCenter">
                    <AddImgWrapp1>
                      <img src={AddImage1} alt="Gold Jewellery" />
                    </AddImgWrapp1>
                    <AddImgWrapp2>
                      <img src={AddImage2} alt="Temple Jewellery" />
                    </AddImgWrapp2>
                  </div>
                  <div className="flexNullCenter">
                    <AddImgWrapp3>
                      <img src={AddImage3} alt="Bridal Jewellery" />
                    </AddImgWrapp3>
                    <AddImgWrapp4>
                      <img src={AddImage4} alt="Traditional Jewellery" />
                    </AddImgWrapp4>
                  </div>
                </AddRightInner>
              </AddRight>
            </Advertising>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

/* ------------------ STYLES ------------------ */

const Wrapper = styled.section`
  width: 100%;
  overflow: hidden;
`;

/* Animations */
const fadeLeft = keyframes`
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeRight = keyframes`
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const float = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-25px); }
  100% { transform: translateY(0); }
`;

const Advertising = styled.div`
  margin: 80px 0;
  padding: 100px 0;
  position: relative;
  align-items: center;

  @media (max-width: 860px) {
    flex-direction: column;
    padding: 40px 0;
  }
`;

const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: center;
    flex-wrap: wrap;
    gap: 15px;
  }
`;

const AddLeft = styled.div`
  width: 50%;
  z-index: 2;
  opacity: 0;
  transform: translateX(-40px);
  animation: ${fadeLeft} 0.9s ease forwards;

  p {
    max-width: 480px;
    line-height: 1.7;
  }

  @media (max-width: 860px) {
    width: 90%;
    text-align: center;
    order: 2;

    p {
      margin: 0 auto;
    }
  }
`;

const AddRight = styled.div`
  width: 50%;
  position: absolute;
  right: 0;
  top: -40px;
  opacity: 0;
  transform: translateX(40px);
  animation: ${fadeRight} 0.9s ease forwards;
  animation-delay: 0.2s;
  z-index: 1;

  @media (max-width: 860px) {
    position: relative;
    width: 90%;
    top: 0;
    order: 1;
    margin-bottom: 40px;
  }
`;

const AddRightInner = styled.div`
  width: 100%;
`;

/* Floating image wrappers */
const floatingStyle = css`
  animation: ${float} 6s ease-in-out infinite;
`;

const imageStyle = css`
  width: 100%;
  height: auto;
  border-radius: 1rem;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.25);
`;

const AddImgWrapp1 = styled.div`
  width: 48%;
  margin: 0 6% 10px 6%;
  ${floatingStyle}
  img { ${imageStyle} }
`;

const AddImgWrapp2 = styled.div`
  width: 30%;
  margin: 0 5% 10px 5%;
  ${floatingStyle}
  animation-delay: 1s;
  img { ${imageStyle} }
`;

const AddImgWrapp3 = styled.div`
  width: 20%;
  margin-left: 40%;
  ${floatingStyle}
  animation-delay: 2s;
  img { ${imageStyle} }
`;

const AddImgWrapp4 = styled.div`
  width: 30%;
  margin: 0 5%;
  ${floatingStyle}
  animation-delay: 3s;
  img { ${imageStyle} }
`;
