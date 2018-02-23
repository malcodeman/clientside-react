import React from "react";
import styled from "styled-components";
import Header from "../../components/Header/Header";
import SocialRatings from "./components/SocialRatings/SocialRatings";
import SocialCard from "../../components/SocialCard/SocialCard";
import ProgressScoreCard from "./components/ProgressScoreCard/ProgressScoreCard";

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

const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
`;

const Grid = styled.section`
  display: grid;
  grid-gap: 1rem;
  grid-template-rows: repeat(6, 128px);
  grid-template-columns: 1fr;
  @media (min-width: 768px) {
    grid-template-rows: repeat(3, 128px);
    grid-template-columns: 1fr 1fr;
  }
`;

const Chart = styled.div`
  grid-row: 4 / span 3;
  @media (min-width: 768px) {
    grid-column-start: 2;
    grid-row: 1 / span 3;
  }
`;

const Welcome = () => {
  return (
    <MainSection>
      <Header />
      <MainContent>
        <Container>
          <Grid>
            <SocialRatings score="300" points="230" />
            <ProgressScoreCard/>
            <SocialCard
              icon="instagram"
              text="Connect your instagram account"
              buttonBackground="instagram"
              buttonText="connect"
            />
            <Chart>
              <div>4</div>
            </Chart>
          </Grid>
        </Container>
      </MainContent>
    </MainSection>
  );
};

export default Welcome;
