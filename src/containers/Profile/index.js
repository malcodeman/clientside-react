import React from "react";
import styled from "styled-components";
import Header from "../Products/components/Header/Header";
import SocialRatings from "../../components/SocialRatings";
import ProgressScoreCard from "../../components/ProgressScoreCard";
import ChartCard from "../../components/ChartCard";
import SocialCard from "../../components/SocialCard";

import { CardStyles } from "../../styles/card";

const ProfileSection = styled.section`
  background-color: #f2f2f2;
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
`;

const ProfileContent = styled.div`
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
  margin-bottom: 2rem;
`;

const Heading = styled.h2`
  font-size: 1.6rem;
  color: rgba(0, 0, 0, 0.6);
  text-transform: uppercase;
`;

const CampaignsSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
`;

const Campaign = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  @media (min-width: 576px) {
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }
  ${CardStyles};
`;

const CampaignLeft = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 576px) {
    flex-direction: row;
    align-items: center;
  }
`;

const CampaignImage = styled.img`
  height: 128px;
  width: 100%;
  object-fit: cover;
  @media (min-width: 576px) {
    height: 64px;
    width: 64px;
  }
`;

const Info = styled.div`
  padding: 2rem 0;
  @media (min-width: 576px) {
    padding: 0 1rem;
  }
`;

const Name = styled.p`
  color: rgba(0, 0, 0, 0.8);
  font-size: 1rem;
`;

const Category = styled.p`
  font-size: 1rem;
`;

const Status = styled.span`
  text-transform: uppercase;
  background-color: #f5a623;
  color: #fff;
  padding: 2px 4px;
  display: inline-block;
  border-radius: 4px;
  font-size: 0.8rem;
`;

const Input = styled.input`
  border: 1px solid rgba(0, 0, 0, 0.2);
  height: 32px;
  font-size: 1rem;
  color: rgba(0, 0, 0, 0.8);
  box-sizing: border-box;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  padding: 0;
  text-indent: 1rem;
  @media (min-width: 768px) {
    border-bottom-left-radius: 4px;
    border-top-left-radius: 4px;
    border-top-right-radius: 0;
  }
`;

const AddLink = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Button = styled.button`
  height: 32px;
  background-color: #1dba53;
  border: 0;
  padding: 0 1rem;
  box-sizing: border-box;
  cursor: pointer;
  color: #fff;
`;

const Profile = () => {
  return (
    <ProfileSection>
      <Header />
      <ProfileContent>
        <Container>
          <Grid>
            <SocialRatings score="300" points="230" />
            <ProgressScoreCard />
            <SocialCard
              icon="instagram"
              text="Connect your instagram account"
              buttonBackground="instagram"
              buttonText="connect"
            />
            <ChartCard />
          </Grid>
          <Heading>Active campaigns</Heading>
          <CampaignsSection>
            <Campaign>
              <CampaignLeft>
                <CampaignImage src="https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/irr1kfajtt10zdxsufd6/free-rn-flyknit-2017-running-shoe-LBTgDKD3.jpg" />
                <Info>
                  <Name>Nike Free RN Flyknit 2017</Name>
                  <Category>Footwear by Nike Inc.</Category>
                  <Status>Inactive</Status>
                </Info>
              </CampaignLeft>
              <AddLink>
                <Input type="text" placeholder="Please add link" />
                <Button>Add link</Button>
              </AddLink>
            </Campaign>
            <Campaign>
              <CampaignLeft>
                <CampaignImage src="https://c.static-nike.com/a/images/t_PDP_1728_v1/f_auto/wsosk7g52leyhii4tq30/air-zoom-pegasus-34-running-shoe-ERTB02VX.jpg" />
                <Info>
                  <Name>Nike Air Zoom Pegasus 34</Name>
                  <Category>Footwear by Niko Inc.</Category>
                  <Status>Inactive</Status>
                </Info>
              </CampaignLeft>
              <AddLink>
                <Input type="text" placeholder="Please add link" />
                <Button>Add link</Button>
              </AddLink>
            </Campaign>
          </CampaignsSection>
        </Container>
      </ProfileContent>
    </ProfileSection>
  );
};

export default Profile;
