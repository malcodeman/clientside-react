import React from "react";
import styled from "styled-components";

const FooterSection = styled.footer`
  background-color: #fff;
`;

const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
`;

const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem;
`;

const Heading = styled.h1`
  text-transform: uppercase;
  font-size: 1.4rem;
  letter-spacing: 2px;
  margin-bottom: 1rem;
`;

const Paragraph = styled.p`
  margin-bottom: 2rem;
  line-height: 1.8;
`;

const Button = styled.button`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1dba53;
  color: #fff;
  padding: 0;
  border: 0;
  text-transform: uppercase;
  font-size: 1rem;
  cursor: pointer;
  @media (min-width: 575px) {
    width: 256px;
  }
`;

const Nav = styled.nav`
  background-color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 575px) {
    flex-direction: row;
    justify-content: space-between;
    height: 128px;
  }
`;

const Logo = styled.span`
  font-size: 1.8rem;
  text-transform: uppercase;
  color: #fff;
`;

const LinkBox = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  @media (min-width: 575px) {
    flex-direction: row;
  }
`;

const Link = styled.a`
  color: #fff;
  text-transform: uppercase;
  padding: 1rem;
  cursor: pointer;
  @media (min-width: 575px) {
    padding: 0 1rem;
  }
`;

const BlackBackground = styled.div`
  background-color: #000;
  padding: 0 1rem;
`;

const Footer = () => {
  return (
    <FooterSection>
      <Container>
        <HeroText>
          <Heading>ready to get started on shiff?</Heading>
          <Paragraph>
            Start by connecting your account. We'll guide you through each step.
            If your influence <br />
            meets the quality standards, you'll hear more.
          </Paragraph>
          <Button>Discover products</Button>
        </HeroText>
      </Container>
      <BlackBackground>
        <Container>
          <Nav>
            <Link>
              <Logo>Shiff</Logo>
            </Link>
            <LinkBox>
              <Link>Terms</Link>
              <Link>Privacy</Link>
              <Link>About</Link>
            </LinkBox>
          </Nav>
        </Container>
      </BlackBackground>
    </FooterSection>
  );
};

export default Footer;
