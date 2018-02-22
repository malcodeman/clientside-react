import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ButtonStyles } from "../../../../styles/button";

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
  max-width: 620px;
`;

const Button = styled(Link)`
  ${ButtonStyles};
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
`;

const StyledLink = styled(Link)`
  color: #fff;
  font-size: 1rem;
  text-transform: uppercase;
  padding: 1rem;
  cursor: pointer;
  @media (min-width: 575px) {
    padding: 0 1rem;
  }
`;

const LinkBox = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 575px) {
    flex-direction: row;
    align-items: initial;
  }
`;

const BlackBackground = styled.div`
  background-color: #000;
  padding: 1rem;
`;

const Footer = () => {
  return (
    <FooterSection>
      <Container>
        <HeroText>
          <Heading>ready to get started on shiff?</Heading>
          <Paragraph>
            Start by connecting your account. We'll guide you through each step.
            If your influence meets the quality standards, you'll hear more.
          </Paragraph>
          <Button to="/signup">Discover products</Button>
        </HeroText>
      </Container>
      <BlackBackground>
        <Container>
          <Nav>
            <StyledLink to="/">
              <Logo>Shiff</Logo>
            </StyledLink>
            <LinkBox>
              <StyledLink to="/terms">Terms</StyledLink>
              <StyledLink to="/privacy">Privacy</StyledLink>
              <StyledLink to="/about">About</StyledLink>
            </LinkBox>
          </Nav>
        </Container>
      </BlackBackground>
    </FooterSection>
  );
};

export default Footer;
