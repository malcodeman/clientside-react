import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { Color } from "../../../../styles/constants";
import { ButtonStyles } from "../../../../styles/button";

import background from "../../../../img/bg.png";

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
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: 64px 64px;
  grid-template-areas: "logo logo logo" ". navBox .";
  justify-items: center;
  align-items: center;
  @media (min-width: 576px) {
    grid-template-rows: 32px 32px;
    grid-template-areas: ". logo navBox" ". logo navBox";
  }
`;

const Logo = styled.span`
  grid-area: logo;
  font-size: 1.8rem;
  text-transform: uppercase;
`;

const NavBox = styled.div`
  grid-area: navBox;
  margin-left: auto;
`;

const NavBoxText = css`
  font-size: 1rem;
  padding: 1rem;
  text-transform: uppercase;
`;

const Login = styled(Link)`
  ${NavBoxText};
  color: rgba(0, 0, 0, 0.8);
`;

const SignUp = styled(Link)`
  ${NavBoxText};
  color: ${Color.green};
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

const Button = styled(Link)`
  ${ButtonStyles};
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
                <Login to="/login">Login</Login>
                <SignUp to="/signup">Sign up</SignUp>
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
              <Button to="/signup">Get started</Button>
            </HeroText>
          </Container>
        </Content>
      </Overlay>
    </HeaderSection>
  );
};

export default Header;
