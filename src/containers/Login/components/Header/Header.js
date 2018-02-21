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
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  box-sizing: border-box;
`;

const Logo = styled.span`
  font-size: 1.8rem;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.8);
`;

const Header = () => {
  return (
    <HeaderSection>
      <Link to="/">
        <Logo>Shiff</Logo>
      </Link>
    </HeaderSection>
  );
};

export default Header;
