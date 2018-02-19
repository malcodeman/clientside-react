import React from "react";
import styled from "styled-components";
import meetIcon from "./img/meet.png";
import micIcon from "./img/mic.png";
import promoteIcon from "./img/promote.png";

const FeaturesSection = styled.section`
  background-color: #f2f2f2;
`;

const Content = styled.div`
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
`;

const FeatureBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;

const Heading = styled.h3`
  text-transform: uppercase;
  font-size: 1rem;
  letter-spacing: 2px;
  @media (min-width: 576px) {
    font-size: 1.2rem;
  }
`;

const Icon = styled.img`
  height: 64px;
  width: 64px;
  margin-bottom: 1rem;
`;

const Features = () => {
  return (
    <FeaturesSection>
      <Container>
        <Content>
          <FeatureBox>
            <Icon src={micIcon} />
            <Heading>connect social accounts</Heading>
            <p>Connect social accounts and get access to products on Shiff</p>
          </FeatureBox>
          <FeatureBox>
            <Icon src={promoteIcon} />
            <Heading>promote products you love</Heading>
            <p>Find products you love and promote then on social media</p>
          </FeatureBox>
          <FeatureBox>
            <Icon src={meetIcon} />
            <Heading>get products for free</Heading>
            <p>
              Get products for free in exchange for you social media influence.
            </p>
          </FeatureBox>
        </Content>
      </Container>
    </FeaturesSection>
  );
};

export default Features;
