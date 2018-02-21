import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

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
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  justify-items: center;
  align-items: center;
`;

const Logo = styled.span`
  grid-column-start: 2;
  font-size: 1.8rem;
  text-transform: uppercase;
`;

const NavBox = styled.div`
  margin-left: auto;
`;

const NavBoxText = css`
  font-size: 1rem;
  padding: 0 1rem;
  text-transform: uppercase;
`;

const Login = styled.span`
  ${NavBoxText};
  color: rgba(0, 0, 0, 0.8);
`;

const SignUp = styled.span`
  ${NavBoxText};
  color: #1dba53;
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
  max-width: 520px;
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
              <NavBox>
                <Link to="/login">
                  <Login>Login</Login>
                </Link>
                <Link to="/login">
                  <SignUp>Sign up</SignUp>
                </Link>
              </NavBox>
            </Nav>
          </Container>
          <Container>
            <HeroText>
              <Heading>Members-only shop for influencers</Heading>
              <Paragraph>
                Connect with top-brands through Shiff. Promote their products on
                social media and keep them for free in return.
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
