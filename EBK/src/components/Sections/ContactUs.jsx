import React from "react";
import styled from "styled-components";

// Assets
import ContactImg1 from "../../assets/img/contact-1.jpg";
import ContactImg2 from "../../assets/img/contact-2.jpg";
import ContactImg3 from "../../assets/img/contact-3.jpg";

export default function ContactUs() {
  return (
    <Wrapper id="contact">
      <div className="lightBg">
        <div className="container">
          <Header>
            <h1 className="font40 extraBold">Get in Touch</h1>
            <p className="font13">
              Visit us, talk to us, or drop a message.  
              We’d love to help you craft something timeless.
            </p>
          </Header>

          <ContentGrid>
            {/* FORM */}
            <FormCard>
              <form>
                <Field>
                  <label>First Name</label>
                  <input type="text" placeholder="Your name" />
                </Field>

                <Field>
                  <label>Email</label>
                  <input type="email" placeholder="you@example.com" />
                </Field>

                <Field>
                  <label>Subject</label>
                  <input type="text" placeholder="Inquiry subject" />
                </Field>

                <Field>
                  <label>Message</label>
                  <textarea rows="4" placeholder="Write your message..." />
                </Field>

                <SubmitBtn type="submit">Send Message</SubmitBtn>
              </form>
            </FormCard>

            {/* IMAGES */}
            <ImageGrid>
              <ImgBox tall>
                <img src={ContactImg1} alt="Store interior" />
              </ImgBox>
              <ImgBox>
                <img src={ContactImg2} alt="Gold craftsmanship" />
              </ImgBox>
              <ImgBox>
                <img src={ContactImg3} alt="Jewellery display" />
              </ImgBox>
            </ImageGrid>
          </ContentGrid>
        </div>
      </div>
    </Wrapper>
  );
}

/* ---------------- STYLES ---------------- */

const Wrapper = styled.section`
  width: 100%;
`;

const Header = styled.div`
  text-align: center;
  padding: 80px 0 50px;

  p {
    max-width: 600px;
    margin: 15px auto 0;
    color: #666;
  }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 60px;
  padding-bottom: 80px;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

/* ---------- FORM ---------- */

const FormCard = styled.div`
  background: #fff;
  padding: 50px;
  border-radius: 18px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.08);

  @media (max-width: 600px) {
    padding: 30px;
  }
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 28px;

  label {
    font-size: 13px;
    font-weight: 600;
    margin-bottom: 6px;
  }

  input,
  textarea {
    border: none;
    border-bottom: 1px solid #bbb;
    padding: 10px 0;
    font-size: 16px;
    outline: none;
    background: transparent;
  }

  textarea {
    resize: none;
  }
`;

const SubmitBtn = styled.button`
  margin-top: 20px;
  background: #c9a24d;
  border: none;
  padding: 14px;
  width: 100%;
  color: #111;
  font-weight: 700;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #b08a38;
    transform: translateY(-2px);
  }
`;

/* ---------- IMAGES ---------- */

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 180px;
  gap: 20px;

  @media (max-width: 960px) {
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 160px;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-auto-rows: 220px;
  }
`;

const ImgBox = styled.div`
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);

  ${({ tall }) =>
    tall &&
    `
    grid-row: span 2;
  `}

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
