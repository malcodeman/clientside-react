import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import Header from "../../components/Header/Header";
import SocialCard from "../../components/SocialCard/SocialCard";
import { ButtonStyles } from "../../styles/button";

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
`;

const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
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

const Button = styled(Link)`
  ${ButtonStyles};
  align-self: flex-end;
`;

const SignUp = () => {
  return (
    <MainSection>
      <Header />
      <MainContent>
        <Container>
          <SocialCardContainer>
            <Heading>Connect to calculate your influencer score!</Heading>
            <SocialCard
              icon="facebook"
              buttonBackground="facebook"
              text="connect your facebook account"
              buttonText="connect"
            />
            <SocialCard
              icon="instagram"
              buttonBackground="instagram"
              text="connect your instagram account"
              buttonText="connect"
            />
            <Button to="/welcome">Calculate influencer score</Button>
          </SocialCardContainer>
        </Container>
      </MainContent>
    </MainSection>
  );
};

export default SignUp;
