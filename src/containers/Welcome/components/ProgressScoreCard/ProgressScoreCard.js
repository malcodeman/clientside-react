import React from "react";
import styled from "styled-components";
import { CardStyles } from "../../../../styles/card";
import { Color } from "../../../../styles/constants";
import CheckCircleIcon from "./img/check-circle.svg";

const ProgressBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  ${CardStyles};
`;

const ProgressBar = styled.progress`
  -webkit-appearance: none;
  color: #36559d;
  background-color: #eff1f3;
  width: 100%;
  border: 0;
  height: 24px;
  border-radius: 2px;
  ::-moz-progress-bar {
    background-color: #36559d;
    border-radius: 2px;
  }
  ::-webkit-progress-bar {
    background-color: #eff1f3;
    border-radius: 2px;
  }
  ::-webkit-progress-value {
    background-color: #36559d;
    border-radius: 2px;
  }
`;

const ScoreBox = styled.div`
  display: flex;
  align-items: center;
`;

const ScoreText = styled.span`
  text-transform: uppercase;
  font-size: 0.8rem;
  margin-right: 0.4rem;
`;

const Icon = styled.img`
  height: 16px;
  width: 16px;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;

const ApprovedText = styled.p`
  font-size: 0.8rem;
  color: ${Color.green};
`;

const ProgressScoreCard = () => {
  return (
    <ProgressBox>
      <Header>
        <ScoreBox>
          <ScoreText>Facebook score</ScoreText>
          <Icon src={CheckCircleIcon} />
        </ScoreBox>
        <div>
          <span>2360/10000</span>
        </div>
      </Header>
      <ProgressBar value="2360" max="10000" />
      <ApprovedText>
        Approved! You can use Shiff with your Facebook account!
      </ApprovedText>
    </ProgressBox>
  );
};

export default ProgressScoreCard;
