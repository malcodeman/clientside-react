import React from "react";
import styled from "styled-components";
import { Color } from "../../../../styles/constants";

const ChartBox = styled.div`
  grid-row: 4 / span 3;
  @media (min-width: 768px) {
    grid-column-start: 2;
    grid-row: 1 / span 3;
  }
`;

const ChartCard = () => {
  return (
    <ChartBox>
      <h1>Chart</h1>
    </ChartBox>
  );
};

export default ChartCard;
