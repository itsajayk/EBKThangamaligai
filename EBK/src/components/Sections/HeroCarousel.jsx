import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

// Images
import Slide1 from "../../assets/img/add/5.jpg";
import Slide2 from "../../assets/img/add/6.jpg";
import Slide3 from "../../assets/img/add/3.png";

export default function HeroCarousel() {
  return (
    <HeroWrapper id= "about">
      <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            loop
            speed={1200}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            >

        <SwiperSlide>
          <SlideInner>
            <SlideText>
              <h1>Pure Gold. Trusted Prices.</h1>
              <p>Live gold rates updated daily</p>
            </SlideText>

            <SlideVisual>
              <img src={Slide1} alt="Gold purity" />
            </SlideVisual>
          </SlideInner>
        </SwiperSlide>

        <SwiperSlide>
          <SlideInner>
            <SlideText>
              <h1>Transparency You Can Trust</h1>
              <p>Market-linked gold pricing</p>
            </SlideText>

            <SlideVisual>
              <img src={Slide2} alt="Gold pricing" />
            </SlideVisual>
          </SlideInner>
        </SwiperSlide>

        
      </Swiper>
    </HeroWrapper>
  );
}



const HeroWrapper = styled.section`
  width: 100%;
  min-height: 85vh;
  padding: 140px 0 100px;
  background: #fff;

  .swiper {
    height: 100%;
  }

  .swiper-slide {
    position: relative;
    display: flex;
    align-items: center;
  }

  .slide-content {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
}

  @media (max-width: 768px) {
    min-height: 75vh;
    padding: 120px 20px 80px;
  }
`;

const SlideInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 60px;

  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
    gap: 30px;
  }
`;

const SlideText = styled.div`
  flex: 1;

  h1 {
    font-size: 3.2rem;
    font-weight: 800;
    line-height: 1.2;
    margin-bottom: 15px;
  }

  p {
    font-size: 1.1rem;
    color: #555;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2.2rem;
    }
  }
`;

const SlideVisual = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  img {
    max-width: 420px;
    width: 100%;
    height: auto;
    border-radius: 16px;
  }
`;

