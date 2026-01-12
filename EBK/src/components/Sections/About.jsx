import React from "react";
import styled from "styled-components";
import AboutImg from "../../assets/img/contact-1.jpg";
import CraftImg from "../../assets/img/contact-2.jpg";
import TopNavbar from "../Nav/TopNavbar";
import Footer from "../Sections/Footer";

export default function About() {
  return (
    <Wrapper id="about">
      {/* HERO */}
      <TopNavbar />
      <Hero>
        <Overlay />
        <HeroContent className="container">
          <HeroTitle>Our Legacy in Gold</HeroTitle>
          <HeroSub>
            Trust. Purity. Craftsmanship — carried forward for generations.
          </HeroSub>
        </HeroContent>
      </Hero>

      {/* STORY */}
      <Section>
        <Container className="flexSpaceCenter">
          <TextBlock>
            <h2>About EBK Thangamaligai</h2>
            <p>
              Established in <strong>1998</strong>, EBK Thangamaligai has been a
              trusted destination for South Indian gold jewellery. Rooted in
              tradition and guided by transparency, we deliver jewellery that
              celebrates life’s most meaningful moments.
            </p>
            <p>
              Every piece we offer is <strong>BIS hallmarked</strong>, ethically
              sourced, and priced with complete clarity — ensuring confidence
              with every purchase.
            </p>
          </TextBlock>

          <ImageBlock>
            <img src={AboutImg} alt="EBK showroom" />
          </ImageBlock>
        </Container>
      </Section>

      {/* VALUES */}
      <DarkSection>
        <Container>
          <SectionHeader>
            <h2>What We Stand For</h2>
            <p>
              Our principles guide every design, every gram, and every customer
              relationship.
            </p>
          </SectionHeader>

          <ValuesGrid>
            <ValueCard>
              <h4>Certified Purity</h4>
              <p>BIS hallmarked gold with verified weight and quality.</p>
            </ValueCard>

            <ValueCard>
              <h4>Transparent Pricing</h4>
              <p>No hidden charges. Live rates. Honest billing.</p>
            </ValueCard>

            <ValueCard>
              <h4>Traditional Craft</h4>
              <p>South Indian artistry blended with modern refinement.</p>
            </ValueCard>

            <ValueCard>
              <h4>Lifetime Support</h4>
              <p>Servicing, guidance, and trust beyond the sale.</p>
            </ValueCard>
          </ValuesGrid>
        </Container>
      </DarkSection>

      {/* CRAFT */}
      <Section>
        <Container className="flexSpaceCenter reverse">
          <ImageBlock>
            <img src={CraftImg} alt="Gold craftsmanship" />
          </ImageBlock>

          <TextBlock>
            <h2>Crafted With Purpose</h2>
            <p>
              From intricate temple jewellery to contemporary daily wear, our
              collections reflect dedication to detail and cultural heritage.
            </p>
            <p>
              Whether it’s a wedding, festival, or personal milestone, we help
              you choose jewellery that lasts beyond trends.
            </p>
          </TextBlock>
        </Container>
      </Section>
      <Footer />
    </Wrapper>
  );
}

/* ===================== STYLES ===================== */

const Wrapper = styled.section`
  width: 100%;
`;

/* HERO */

const Hero = styled.div`
  height: 70vh;
  background: url(${AboutImg}) center/cover no-repeat;
  position: relative;

  @media (max-width: 768px) {
    height: 55vh;
  }
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
`;

const HeroTitle = styled.h1`
  font-size: 52px;
  font-family: "Playfair Display", serif;

  @media (max-width: 768px) {
    font-size: 34px;
  }
`;

const HeroSub = styled.p`
  margin-top: 14px;
  font-size: 16px;
  max-width: 520px;
  opacity: 0.85;
`;

/* SECTIONS */

const Section = styled.section`
  padding: 80px 0;

  @media (max-width: 768px) {
    padding: 60px 0;
  }
`;

const DarkSection = styled(Section)`
  background: #0c0c0c;
  color: #fff;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  gap: 60px;

  &.reverse {
    flex-direction: row-reverse;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 40px;
  }
`;

/* TEXT */

const TextBlock = styled.div`
  flex: 1;

  h2 {
    font-size: 36px;
    margin-bottom: 18px;
  }

  p {
    font-size: 15px;
    line-height: 1.8;
    color: #555;
    margin-bottom: 16px;
  }

  ${DarkSection} & p {
    color: rgba(255,255,255,0.75);
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 28px;
    }
  }
`;

/* IMAGE */

const ImageBlock = styled.div`
  flex: 1;

  img {
    width: 100%;
    border-radius: 14px;
    box-shadow: 0 20px 50px rgba(0,0,0,0.15);
  }
`;

/* VALUES */

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 50px;

  h2 {
    font-size: 36px;
  }

  p {
    font-size: 15px;
    opacity: 0.75;
    margin-top: 10px;
  }
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

const ValueCard = styled.div`
  background: rgba(255,255,255,0.05);
  padding: 30px;
  border-radius: 14px;
  text-align: center;

  h4 {
    color: #e6c15a;
    margin-bottom: 10px;
  }

  p {
    font-size: 14px;
    opacity: 0.75;
  }
`;
