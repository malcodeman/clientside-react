import React from "react";
import styled from "styled-components";
import { CardStyles } from "../../../../styles/card";
import AwardIcon from "./img/award.svg";
import StarIcon from "./img/star.svg";

const SocialBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: 576px) {
    flex-direction: row;
    align-items: center;
  }
  ${CardStyles};
`;

const SocialBoxItem = styled.div`
  display: flex;
`;

const RatingBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Icon = styled.img`
  height: 32px;
  width: 32px;
  margin-right: 1rem;
`;

const RatingText = styled.span`
  text-transform: uppercase;
  font-size: 0.8rem;
`;

const RatingNumber = styled.span`
  font-weight: 500;
  font-size: 1rem;
`;

const SocialRatings = props => {
  return (
    <SocialBox>
      <SocialBoxItem>
        <Icon src={AwardIcon} />
        <RatingBox>
          <RatingText>influencer score</RatingText>
          <RatingNumber>{props.score}</RatingNumber>
        </RatingBox>
      </SocialBoxItem>
      <SocialBoxItem>
        <Icon src={StarIcon} />
        <RatingBox>
          <RatingText>shiff points</RatingText>
          <RatingNumber>{props.points}</RatingNumber>
        </RatingBox>
      </SocialBoxItem>
    </SocialBox>
  );
};

export default SocialRatings;
