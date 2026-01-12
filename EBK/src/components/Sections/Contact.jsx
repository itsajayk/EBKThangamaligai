import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import TopNavbar from "../Nav/TopNavbar";
import Footer from "./Footer";

export default function Contact() {
  return (
    <>
    <TopNavbar/>
      <Helmet>
        {/* <title>Contact Us</title>
        <meta
          name="description"
          content="Get in touch with us for enquiries, support, or business opportunities."
        /> */}
      </Helmet>

      <Wrapper>
        <Container>
          <Header>
            <h1>Contact Us</h1>
            <p>
              Have a question, need support, or want to work with us?  
              Fill out the form below and we’ll get back to you.
            </p>
          </Header>

          <Content>
            {/* LEFT INFO */}
            <Info>
              <InfoBlock>
                <span>📍 Address</span>
                <p>Thanjavur, Tamil Nadu, India</p>
              </InfoBlock>

              <InfoBlock>
                <span>📞 Phone</span>
                <p>+91 9XXXXXXXXX</p>
              </InfoBlock>

              <InfoBlock>
                <span>✉️ Email</span>
                <p>support@example.com</p>
              </InfoBlock>

              <Note>
                We usually respond within <strong>24 hours</strong> on working days.
              </Note>
            </Info>

            {/* RIGHT FORM */}
            <Form>
              <Field>
                <label>Name</label>
                <input type="text" placeholder="Your full name" />
              </Field>

              <Field>
                <label>Email</label>
                <input type="email" placeholder="Your email address" />
              </Field>

              <Field>
                <label>Subject</label>
                <input type="text" placeholder="Reason for contacting us" />
              </Field>

              <Field>
                <label>Message</label>
                <textarea rows="5" placeholder="Write your message here..." />
              </Field>

              <Button type="button">Send Message</Button>
            </Form>
          </Content>
        </Container>
      </Wrapper>
      <Footer />
    </>
  );
}

/* ================= STYLES ================= */

const Wrapper = styled.section`
  min-height: 100vh;
  background: #bbbcbcff;
  padding-top: calc(80px + var(--info-bar-height, 0px));
`;

const Container = styled.div`
  max-width: 1100px;
  margin: auto;
  padding: 40px 20px 80px;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 50px;

  h1 {
    font-size: 36px;
    font-weight: 800;
    margin-bottom: 12px;
  }

  p {
    font-size: 16px;
    color: #555;
    max-width: 620px;
    margin: auto;
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 40px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Info = styled.div`
  background: #111;
  color: #fff;
  border-radius: 14px;
  padding: 30px;
`;

const InfoBlock = styled.div`
  margin-bottom: 22px;

  span {
    display: block;
    font-weight: 700;
    margin-bottom: 6px;
    color: #ffcf33;
  }

  p {
    margin: 0;
    line-height: 1.6;
  }
`;

const Note = styled.div`
  margin-top: 30px;
  font-size: 14px;
  opacity: 0.85;
`;

const Form = styled.form`
  background: #fff;
  border-radius: 14px;
  padding: 30px;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 18px;

  label {
    font-weight: 700;
    margin-bottom: 6px;
    font-size: 14px;
  }

  input,
  textarea {
    padding: 12px 14px;
    border-radius: 10px;
    border: 1px solid #ddd;
    font-size: 14px;
    font-family: inherit;
    resize: none;

    &:focus {
      outline: none;
      border-color: #ffcf33;
    }
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 14px;
  border-radius: 12px;
  border: none;
  background: #ffcf33;
  font-weight: 800;
  font-size: 15px;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
  }
`;
