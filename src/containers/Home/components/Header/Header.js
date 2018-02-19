import React from "react";
import styled from "styled-components";

import background from "./img/bg.png";

const HeaderSection = styled.header`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const Overlay = styled.div`
  background-color: rgba(247, 247, 247, 0.2);
  @media (min-width: 1200px) {
    background-color: transparent;
  }
`;

const Content = styled.div`
  min-height: 100vh;
`;

const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
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

const Header = () => {
  return (
    <HeaderSection>
      <Overlay>
        <Content>
          <Container>
            <Nav>
              <Logo>Shiff</Logo>
            </Nav>
          </Container>
          <Container>
            <HeroText>
              <Heading>Members-only shop for influencers</Heading>
              <Paragraph>
                Connect with top-brands through Shiff. Promote their products on
                social <br /> media and keep them for free in return.
              </Paragraph>
              <Button>Get started</Button>
            </HeroText>
          </Container>
        </Content>
      </Overlay>
    </HeaderSection>
  );
};

export default Header;
