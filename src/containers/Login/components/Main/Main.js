import React from "react";
import styled from "styled-components";
import SocialCard from "./components/SocialCard/SocialCard";

const MainSection = styled.main`
  background-color: #f2f2f2;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 480px;
  width: 100%;
  text-align: center;
  padding: 2rem;
`;

const Cta = styled.h1`
  font-size: 2rem;
  text-transform: uppercase;
  margin-bottom: 2rem;
`;

const RegisterText = styled.p`
  font-size: 1rem;
`;

const RegisterLink = styled.a`
  font-size: 1rem;
  color: #1dba53;
`;

const Main = () => {
  return (
    <MainSection>
      <MainContent>
        <Cta>Login</Cta>
        <SocialCard
          icon="facebook"
          buttonBackground="facebook"
          text="Login with Facebook"
        />
        <SocialCard
          icon="instagram"
          buttonBackground="instagram"
          text="Login with Instagram"
        />
        <RegisterText>
          Don't have an account?
          <RegisterLink>Create a SHIFF account</RegisterLink>
        </RegisterText>
      </MainContent>
    </MainSection>
  );
};

export default Main;
