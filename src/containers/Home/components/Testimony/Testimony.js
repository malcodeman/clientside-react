import React from "react";
import styled from "styled-components";
import background from "./img/bg.png";

const TestimonySection = styled.section`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: 100% 50%;
  background-size: contain;
`;

const Overlay = styled.div`
  background-color: rgba(255, 255, 255, 0.2);
  @media (min-width: 1200px) {
    background-color: transparent;
  }
`;

const Content = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 2rem;
  width: 100%;
`;

const Text = styled.div`
  padding: 2rem 2rem;
`;

const Heading = styled.h2`
  text-transform: uppercase;
  margin-bottom: 4rem;
`;

const Quote = styled.p`
  @media (min-width: 576px) {
    border-left: 4px solid blue;
    padding-left: 2rem;
    p {
      line-height: 1.8;
      font-size: 1.2rem;
    }
  }
  margin-bottom: 1rem;
`;

const Author = styled.span`
  text-transform: uppercase;
`;

const Testimony = () => {
  return (
    <TestimonySection>
      <Overlay>
        <Content>
          <Container>
            <Text>
              <Heading>
                Your access to <br /> high-end products
              </Heading>
              <Quote>
                <p>
                  “Shiff really gets all of the best products in one place.<br />
                  It gave me an opportunity to get my favourise products <br />
                  for free in exchange for my influence.”
                </p>
              </Quote>
              <Author>John Doe, United States</Author>
            </Text>
          </Container>
        </Content>
      </Overlay>
    </TestimonySection>
  );
};

export default Testimony;
