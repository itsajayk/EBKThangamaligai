import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// import LogoImg from "../../assets/svg/Logo";
import { FaWhatsapp } from "react-icons/fa";
import LogoIcon from "../../assets/img/add/Logo.png";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <FooterWrapper>
      <TopSection>
        <Container>
          <Grid>
            {/* Brand */}
            <Brand>
              <LogoRow>
                 <LogoImg
                  src={LogoIcon}
                  alt="EBK Thangamaligai Logo"            
                />
                {/* <BrandName>EBK Thangamaligai</BrandName> */}
              </LogoRow>
              <BrandDesc>
                A trusted name in South Indian gold jewellery, delivering
                certified purity, transparent pricing, and timeless designs
                for generations.
              </BrandDesc>

              <TrustBadges>
                <Badge>BIS Hallmarked Gold</Badge>
                <Badge>Transparent Pricing</Badge>
                <Badge>Since 1998</Badge>
              </TrustBadges>
            </Brand>

            {/* Links */}
            <Column>
              <ColumnTitle>Quick Links</ColumnTitle>
              <FooterLink to="home" smooth offset={-80}>Home</FooterLink>
              <FooterLink to="services" smooth offset={-80}>Collections</FooterLink>
              <FooterLink to="goldrate" smooth offset={-80}>Live Gold Rate</FooterLink>
              <FooterLink to="contact" smooth offset={-80}>Contact</FooterLink>
            </Column>

            {/* Store */}
            <Column>
              <ColumnTitle>Visit Our Store</ColumnTitle>
              <Text>
                EBK Thangamaligai<br />
                79, Gandhiji Rd, opp. <br />
                Manikoondu (Clock Tower),  <br />
                Attar Mohalla, <br />
                Thanjavur - 613001<br />
              </Text>
              <Text>🕒 Mon – Sun: 10 AM – 9 PM</Text>
            </Column>

            {/* Contact */}
            <Column>
              <ColumnTitle>Contact</ColumnTitle>
              <Text href="tel:+919342948376">📞 +91 93429 48376</Text>
              <Text><FaWhatsapp/> WhatsApp Available</Text>
              <Text href="mailto:support@ebkthangamaligai.com">
                ✉️ support@ebkthangamaligai.com
              </Text>            
              </Column>
          </Grid>
        </Container>
      </TopSection>

      {/* Bottom bar */}
      <BottomBar>
        <Container className="flexSpaceCenter">
          <SmallText>
            © {year} EBK Thangamaligai. All Rights Reserved.
          </SmallText>

          <BackTop to="home" smooth offset={-80}>
            Back to top ↑
          </BackTop>
        </Container>
      </BottomBar>
    </FooterWrapper>
  );
}

/* ===================== STYLES ===================== */

const FooterWrapper = styled.footer`
  width: 100%;
  background: #0c0c0c;
  color: #fff;
`;

const TopSection = styled.div`
  padding: 70px 0 60px;
  border-bottom: 1px solid rgba(255,255,255,0.08);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 50px;

  @media (max-width: 960px) {
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

const Brand = styled.div``;

const LogoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 16px;

  svg {
    color: #e6c15a;
  }
`;

const BrandName = styled.h2`
  font-size: 18px;
  letter-spacing: 1px;
  margin: 0;
`;

const BrandDesc = styled.p`
  font-size: 14px;
  line-height: 1.7;
  color: rgba(255,255,255,0.75);
  max-width: 420px;
`;

const TrustBadges = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 18px;
`;

const Badge = styled.span`
  font-size: 11px;
  padding: 6px 10px;
  border: 1px solid rgba(230,193,90,0.4);
  color: #e6c15a;
  letter-spacing: 0.6px;
`;

const Column = styled.div``;

const ColumnTitle = styled.h4`
  font-size: 14px;
  margin-bottom: 14px;
  letter-spacing: 1px;
  color: #e6c15a;
`;

const FooterLink = styled(Link)`
  display: block;
  margin-bottom: 10px;
  font-size: 14px;
  color: rgba(255,255,255,0.8);
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: #e6c15a;
  }
`;

const Text = styled.p`
  font-size: 14px;
  line-height: 1.7;
  margin-bottom: 10px;
  color: rgba(255,255,255,0.75);
  cursor: pointer;
`;

const BottomBar = styled.div`
  padding: 18px 0;
  background: #080808;
`;

const SmallText = styled.p`
  font-size: 13px;
  color: rgba(255,255,255,0.65);
`;

const BackTop = styled(Link)`
  font-size: 13px;
  color: #e6c15a;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
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
