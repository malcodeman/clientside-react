import React from "react";
import styled from "styled-components";

import background from "./img/bg.png";

const HeaderSection = styled.header`
  min-height: 100vh;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-color: rgba(0, 0, 0, 0.8);
`;

const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 2rem;
`;

const Nav = styled.nav`
  background-color: transparent;
  height: 128px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.span`
  font-size: 1.8rem;
  text-transform: uppercase;
`;

const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem 0;
  p {
    line-height: 1.8;
  }
  p:last-of-type {
    margin-bottom: 2rem;
  }
`;

const Heading = styled.h1`
  text-transform: uppercase;
  font-size: 1.4rem;
  letter-spacing: 2px;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  width: 256px;
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
`;

const Header = () => {
  return (
    <HeaderSection>
      <Container>
        <Nav>
          <Logo>Shiff</Logo>
        </Nav>
      </Container>
      <Container>
        <HeroText>
          <Heading>Members-only shop for influencers</Heading>
          <p>Connect with top-brands through Shiff.</p>
          <p>
            Promote their products on social media and keep them for free in
            return.
          </p>
          <Button>Get started</Button>
        </HeroText>
      </Container>
    </HeaderSection>
  );
};

export default Header;
