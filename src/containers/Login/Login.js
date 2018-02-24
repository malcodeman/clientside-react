import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../../components/Header/Header";
import SocialCard from "../../components/SocialCard/SocialCard";

const MainSection = styled.main`
  background-color: #f2f2f2;
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
`;

const MainContent = styled.div`
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SocialCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 480px;
  width: 100%;
`;

const Heading = styled.h2`
  font-size: 1.6rem;
  letter-spacing: 2px;
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

const Login = () => {
  return (
    <MainSection>
      <Header />
      <MainContent>
        <SocialCardContainer>
          <Heading>Login</Heading>
          <SocialCard
            icon="facebook"
            buttonBackground="facebook"
            text="Login with Facebook"
            buttonText="login"
          />
          <SocialCard
            icon="instagram"
            buttonBackground="instagram"
            text="Login with Instagram"
            buttonText="login"
          />
          <RegisterText>
            Don't have an account?
            <Link to="/signup">
              <RegisterLink>Create a SHIFF account</RegisterLink>
            </Link>
          </RegisterText>
        </SocialCardContainer>
      </MainContent>
    </MainSection>
  );
};

export default Login;
