import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderSection = styled.header`
  background-color: #fff;
  height: 64px;
  box-shadow: 0 2px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  padding: 0 2rem;
  box-sizing: border-box;
`;

const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
`;

const Logo = styled.span`
  font-size: 1.8rem;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.8);
`;

const Header = () => {
  return (
    <HeaderSection>
      <Container>
        <Link to="/">
          <Logo>Shiff</Logo>
        </Link>
      </Container>
    </HeaderSection>
  );
};

export default Header;
